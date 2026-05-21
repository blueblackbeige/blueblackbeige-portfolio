"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface SequencePlayerHandle {
  play: () => void;
  pause: () => void;
  toggle: () => void;
  seekTo: (progress: number) => void; // 0–1
}

interface Props {
  /** Total number of frames (e.g. 52 for frames 000–051) */
  frameCount: number;
  /** Path pattern with %d placeholder, e.g. "/frames/hero-video_%03d.svg" */
  pathPattern: string;
  /** Target FPS (default 24) */
  fps?: number;
  /** Ping-pong loop (default true) */
  pingPong?: boolean;
  /** Canvas CSS class */
  className?: string;
  /** Invert colors — turns black paths white (for dark backgrounds) */
  invert?: boolean;
  /** Show scrub bar (default false) */
  showControls?: boolean;
}

/**
 * Pad a number with leading zeros: pad(5, 3) => "005"
 */
function pad(n: number, width: number): string {
  return String(n).padStart(width, "0");
}

/**
 * Build the src URL for a given frame index.
 * Supports patterns like "/frames/hero-video_%03d.svg"
 */
function frameSrc(pattern: string, index: number): string {
  return pattern.replace(/%0(\d)d/, (_, w) => pad(index, Number(w)));
}

const HeroSequencePlayer = forwardRef<SequencePlayerHandle, Props>(
  (
    {
      frameCount,
      pathPattern,
      fps = 24,
      pingPong = true,
      className = "",
      invert = true,
      showControls = false,
    },
    ref
  ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const framesRef = useRef<HTMLImageElement[]>([]);
    const rafRef = useRef<number | null>(null);
    const lastTickRef = useRef<number>(0);
    const currentFrameRef = useRef<number>(0);
    const directionRef = useRef<1 | -1>(1);
    const playingRef = useRef<boolean>(true);

    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // ── Preload all frames ──
    useEffect(() => {
      let cancelled = false;
      const images: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = frameSrc(pathPattern, i);
        img.onload = () => {
          loadedCount++;
          if (!cancelled && loadedCount === frameCount) {
            framesRef.current = images;
            setLoaded(true);
          }
        };
        img.onerror = () => {
          console.warn(`Failed to load frame ${i}`);
          loadedCount++;
        };
        images.push(img);
      }

      return () => {
        cancelled = true;
      };
    }, [frameCount, pathPattern]);

    // ── Draw a single frame to canvas ──
    const drawFrame = useCallback(
      (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = framesRef.current[index];
        if (!canvas || !ctx || !img) return;

        // Match canvas internal resolution to its display size
        const rect = canvas.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap at 2x for perf
        const w = rect.width * dpr;
        const h = rect.height * dpr;

        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
        }

        ctx.clearRect(0, 0, w, h);

        if (invert) {
          // Draw white silhouette: fill white, then composite the SVG to cut it
          ctx.save();
          ctx.globalCompositeOperation = "source-over";
          ctx.drawImage(img, 0, 0, w, h);
          // Invert: draw the image, then use difference blending
          ctx.globalCompositeOperation = "difference";
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, w, h);
          ctx.restore();
        } else {
          ctx.drawImage(img, 0, 0, w, h);
        }
      },
      [invert]
    );

    // ── Animation loop ──
    const tick = useCallback(
      (timestamp: number) => {
        if (!playingRef.current || !loaded) {
          rafRef.current = requestAnimationFrame(tick);
          return;
        }

        const interval = 1000 / fps;
        const delta = timestamp - lastTickRef.current;

        if (delta >= interval) {
          lastTickRef.current = timestamp - (delta % interval);
          let frame = currentFrameRef.current;

          // Advance frame
          frame += directionRef.current;

          if (pingPong) {
            if (frame >= frameCount - 1) {
              frame = frameCount - 1;
              directionRef.current = -1;
            } else if (frame <= 0) {
              frame = 0;
              directionRef.current = 1;
            }
          } else {
            if (frame >= frameCount) frame = 0;
          }

          currentFrameRef.current = frame;
          drawFrame(frame);
          setProgress(frame / (frameCount - 1));
        }

        rafRef.current = requestAnimationFrame(tick);
      },
      [fps, pingPong, frameCount, loaded, drawFrame]
    );

    // ── Start loop once loaded ──
    useEffect(() => {
      if (!loaded) return;
      // Draw first frame immediately
      drawFrame(0);
      rafRef.current = requestAnimationFrame(tick);

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [loaded, tick, drawFrame]);

    // ── Imperative handle for parent control ──
    useImperativeHandle(ref, () => ({
      play() {
        playingRef.current = true;
        setIsPlaying(true);
      },
      pause() {
        playingRef.current = false;
        setIsPlaying(false);
      },
      toggle() {
        playingRef.current = !playingRef.current;
        setIsPlaying(playingRef.current);
      },
      seekTo(p: number) {
        const frame = Math.round(p * (frameCount - 1));
        currentFrameRef.current = frame;
        drawFrame(frame);
        setProgress(p);
      },
    }));

    return (
      <div className={`relative ${className}`}>
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ imageRendering: "auto" }}
        />

        {/* Loading indicator */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
          </div>
        )}

        {/* Optional scrub controls */}
        {showControls && loaded && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => {
                playingRef.current = !playingRef.current;
                setIsPlaying(playingRef.current);
              }}
              className="text-white/60 hover:text-white text-xs font-mono"
            >
              {isPlaying ? "❚❚" : "▶"}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={progress}
              onChange={(e) => {
                const p = parseFloat(e.target.value);
                const frame = Math.round(p * (frameCount - 1));
                currentFrameRef.current = frame;
                drawFrame(frame);
                setProgress(p);
              }}
              className="flex-1 h-1 appearance-none bg-white/10 rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
            />
          </div>
        )}
      </div>
    );
  }
);

HeroSequencePlayer.displayName = "HeroSequencePlayer";
export default HeroSequencePlayer;

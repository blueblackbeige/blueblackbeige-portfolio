import { Linkedin, Share2, Twitter } from "lucide-react";

export default function ArticleShareLinks({ url, title }: { url: string; title: string }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const links = [
    { label: "Share on Twitter", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, Icon: Twitter },
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, Icon: Linkedin },
    { label: "Share on WhatsApp", href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, Icon: Share2 },
  ];

  return <div className="flex gap-4">
    {links.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center hover:bg-white hover:text-bg-primary transition-colors">
      <Icon className="w-4 h-4" aria-hidden="true" />
    </a>)}
  </div>;
}

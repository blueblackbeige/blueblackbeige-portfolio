import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  return Response.redirect(new URL("/logo.png", request.url), 308);
}

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get("token");

  if (req.nextUrl.pathname.startsWith("/checkout") && !isLoggedIn) {
    const loginUrl = new URL("/auth/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*"],
};

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (!token && pathname.startsWith("/account"))
    return NextResponse.redirect(new URL("/login", req.url));

  if (
    token &&
    (pathname.startsWith("/login") || pathname.startsWith("/signup"))
  )
    return NextResponse.redirect(new URL("/account", req.url));

  if (!token && pathname.startsWith("/cart/checkout"))
    return NextResponse.redirect(new URL("/login", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*", "/login", "/signup", "/cart/checkout"],
};

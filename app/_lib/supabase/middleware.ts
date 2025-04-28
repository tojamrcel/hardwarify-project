import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const pathname = request.nextUrl.pathname;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session && pathname.startsWith("/account"))
    return NextResponse.redirect(new URL("/login", request.url));

  if (!session && pathname.startsWith("/cart/checkout"))
    return NextResponse.redirect(new URL("/login", request.url));

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && pathname.startsWith("/account"))
    return NextResponse.redirect(new URL("/login", request.url));

  if (!user && pathname.startsWith("/cart/checkout"))
    return NextResponse.redirect(new URL("/login", request.url));

  if (user && pathname.startsWith("/login"))
    return NextResponse.redirect(new URL("/account", request.url));

  return supabaseResponse;
}

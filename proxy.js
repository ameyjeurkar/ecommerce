import { NextResponse } from "next/server";

export function proxy(request) {
    const ACCESS_TOKEN = request.cookies.get("token")?.value;
    console.log("ACCESS TOKEN: ", ACCESS_TOKEN);

    const isAuthPages = request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/register");

    const isProtectedRoute = request.nextUrl.pathname.startsWith("/home");

    if(!ACCESS_TOKEN && isProtectedRoute) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // User already logged in
    if (ACCESS_TOKEN && isAuthPages) {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    return NextResponse.next();
}
import { NextResponse } from "next/server"

export async function POST(request) {
    const body = await request.json();
    const { firstname, password } = body;

    // VALIDATE LOGIN CREDS
    if(firstname === "admin" && password === "admin") {
        const response = NextResponse.json({ success: true });
        response.cookies.set("token", "fake-jwt-token", {
            httpOnly: true,
            secure: false,
            path: "/",
            maxAge: 60*60*24, // 1 day
        })

        return response;
    }
    else {
        const response = NextResponse.json({ success: false }, { status: 401 });
        return response;
    }
}
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const { nextUrl, geo } = req;
    const country = geo?.country || "Korea";
    const city = geo?.city || "Seoul";
    nextUrl.searchParams.set("country", country);
    nextUrl.searchParams.set("city", city);

    return NextResponse.rewrite(nextUrl);
}

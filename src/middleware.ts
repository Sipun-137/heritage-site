import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.rewrite(new URL('/about-2', request.url))
    }
}

export function AuthUser(req:NextRequest){
    const token=req.headers.get("Authorization")?.split(" ")[1];
    if(!token){
      return false
    }
    try {
        const extractAuthUserinfo = jwt.verify(token,process.env.HASHSECRETKEY as string);
        if (extractAuthUserinfo) {
            // Return the decoded token if authentication is successful
            return extractAuthUserinfo;
        }
    } catch (error: any) {
        console.log(error);
    }
}

export const config = {
    matcher: '/about/:path*',
}
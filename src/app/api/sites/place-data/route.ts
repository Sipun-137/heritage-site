import connect from "@/dbConfig/dbConfig";
import Site from "@/models/SiteModels";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"

connect();

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ success: false, message: "id should be required" })
        const response = await Site.findById(id);
        console.log(response)
        if (response) {
            return NextResponse.json({
                success: true,
                data: response
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "No results found"
            })
        }
    } catch (e: any) {
        console.log(e)
        return NextResponse.json({
            success: false,
            message: "something went wrongtry again"
        })
    }
}
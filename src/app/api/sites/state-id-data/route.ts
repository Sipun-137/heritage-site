import connect from "@/dbConfig/dbConfig";
import Site from "@/models/SiteModels";

import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic"
connect();
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ success: false, message: "id requried to fetch the data" })
        const nid = id.replace(/%20/g, " ");
        const data = await Site.find({ state: nid })
        if (!data) {
            return NextResponse.json({
                success: false,
                message: "could not find anything to show"
            })
        }
        return NextResponse.json({
            success: true,
            data: data
        })
    } catch (e: any) {
        console.log(e);
        return NextResponse.json({
            success: false,
            message: "something went wrong tray after some time"
        })
    }
}
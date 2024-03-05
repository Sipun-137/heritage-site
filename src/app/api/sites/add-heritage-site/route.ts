import { NextRequest, NextResponse } from "next/server";
import Site from "@/models/SiteModels";
import connect from "@/dbConfig/dbConfig";

interface siteType {
    name: String,
    state: String,
    imgurl: String[],
    description: String
}


connect();

export async function POST(req: NextRequest) {
    try {
        const data: siteType = await req.json();
        console.log(data)
        const onSuccess = await Site.create(data)
        if (onSuccess) {
            return NextResponse.json({
                success: true,
                message: "data saved successfully",
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "unable to store try again",
            })
        }

    } catch (e: any) {
        console.log(e)
        return NextResponse.json({
            success: false,
            message: "something went wrong! please try after some time"
        })
    }
}
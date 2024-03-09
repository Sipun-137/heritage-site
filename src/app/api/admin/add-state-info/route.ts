import State from "@/models/StateModel";
import { NextRequest, NextResponse } from "next/server";
import connect from "@/dbConfig/dbConfig";

interface stateType {
    name: String,
    capital: String,
    imgurl: String,
}

export const dynamic="force-dynamic"
connect();
export async function POST(req:NextRequest){
    try {
        const data:stateType = await req.json();
        console.log(data)
        const onSuccess = await State.create(data)
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
        
    } catch (e:any) {
        console.log(e)
        return NextResponse.json({
            success:false,
            message:"something went wrong"
        })
    }
}
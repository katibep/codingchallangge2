import { RegisterInputProps } from "@/components/formapi";
import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const data:RegisterInputProps = await request.json();
    
    try {
        const product=await db.product.create({
            data,
        })
        return NextResponse.json({
            message:"created",
            data:product,
            error:null
        },{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"Something went wrong"
        },{status:500})
    }

}

export async function GET(request:NextRequest){
    try {
        const products=await db.product.findMany()
        return NextResponse.json({
            message:"created",
            data:products,
            error:null
        },{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"Something went wrong"
        },{status:500})
    }

}
import { db } from "@/prisma/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request:NextRequest,{params}:{params:Promise<{id:string}>}){
    try {
        const {id} = await params;
        const product=await db.product.findFirst({
            where:{
                id
            }
        })
        return NextResponse.json({
            message:"created",
            data:product,
            error:null
        },{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"Something went wrong"
        },{status:500})
    }

}

export async function DELETE(request:NextRequest,{params}:{params:Promise<{id:string}>}){
    try {
        const {id} = await params;
        const product=await db.product.delete({
            where:{
                id
            }
        })
        return NextResponse.json({
            message:"deleted",
            error:null
        },{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"Something went wrong"
        },{status:500})
    }

}

export async function PATCH(request:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const data = await request.json()
    const existingProduct = await db.product.findFirst()
    if(!existingProduct){
        return NextResponse.json({
            data:null,
            error:"Product not found"
        },{status:404})
    }
    try {
        
        const UpdatedProduct=await db.product.update({
            where:{
                id
            },data
        })
        return NextResponse.json({
            message:"updated",
            data:UpdatedProduct,
            error:null
        },{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"Something went wrong"
        },{status:500})
    }

}
"use server"

import { RegisterInputProps } from "@/components/formapi";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function createProduct(data:RegisterInputProps ) {
      const slug = data.slug
    try {
      const existingProduct = await db.product.findUnique({
        where: {
          slug,
        },
      });
      if (existingProduct) {
        return existingProduct;
      }
      const newProduct = await db.product.create({
        data,
      });
      // console.log(newCategory);
      revalidatePath("/");
      return newProduct;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


  export async function getAllproducts(){
    try {
      const categories = await db.product.findMany()
      return categories
    } catch (error) {
   console.log(error)   
    }
  }
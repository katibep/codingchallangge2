'use server'
import { ProductProps } from "@/types/type";

const url = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchapi(){
const response = await fetch(`${url}/api/v1/products`);
const results = await response.json();
console.log(results.data)
return results.data as ProductProps[];
}
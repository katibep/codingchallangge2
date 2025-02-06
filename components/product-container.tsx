"use server"
import React from 'react'
import ProductCard from './Productcard'
import { getAllproducts } from '@/actions/product';


export default async function ProductContainer({}) {
    const productsArray = await getAllproducts();
      console.log(productsArray)
  return (
    <div className='grid grid-cols-1 md:grid-cols-4  gap-3 p-4'>
        
        {productsArray && productsArray.map((product)=>{
              
                return <ProductCard key={product.id} product={product}/>
            })
        }
    </div>
  )
}

import React from 'react'
import ProductCard from './Productcard'
import { fetchapi } from '@/actions/fetchapi';

export default async function ProductContainer() {
    const productsArray = await fetchapi();
      console.log(productsArray)
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 p-4'>
        
        {
            productsArray.map((product)=>{
                return <ProductCard key={product.id} product={product}/>
            })
        }
    </div>
  )
}


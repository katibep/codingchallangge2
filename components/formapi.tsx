"use client"
import React from 'react'
import { useForm, type SubmitHandler } from "react-hook-form";

export type Inputs = {
    name: string
    images:string[]
    description: string
    price: number
    slug :string
  }

  const baseurl=process.env.NEXT_PUBLIC_BASE_URL;
  

export default function Formapi() {

    const {register,
        handleSubmit,
        reset,
        formState: { errors }} = useForm<Inputs>();

        async function onSubmit(data: Inputs){
                data.slug = data.name.split(" ").join("-").toLowerCase();
                data.price=Number(data.price)
            try {
            const response = await fetch(`${baseurl}/api/v1/products`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            console.log(response)
            if(response){
                reset()
            }
            } catch (error) {
                console.log(error)
            }
        }
  return (
    <div>
 

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Product Form</h1>

    

    <form onSubmit={handleSubmit(onSubmit)} action="#" className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <p className="text-center text-lg font-medium">Add your product</p>

      <div>
        <label htmlFor="name" className="sr-only">Product name</label>

        <div className="relative">
          <input  {...register("name", { required: true })}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
            placeholder="Enter name"
          />
           {errors.name && <span>This field is required</span>}

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
        
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="description" className="sr-only">Product description</label>

        <div className="relative">
          <input  {...register("description", { required: true })}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
            placeholder="Enter description"
          />
            {errors.description && <span>This field is required</span>}

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
           
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="price" className="sr-only">Product price</label>

        <div className="relative">
          <input {...register("price", { required: true })}
            type="number"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
            placeholder="Enter price"
          />
          {errors.price && <span>This field is required</span>}

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            
          </span>
        </div>
      </div>

      
      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Submit product
      </button>

      
    </form>
  </div>
</div>
    </div>
  )
}


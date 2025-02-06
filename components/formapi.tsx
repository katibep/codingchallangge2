"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import CustomCarousel from "@/components/cutomcarosel";
import MultipleImageInput from "./FormInputs/MultipleImageInput";
import { createProduct } from "@/actions/product";
import { useRouter } from "next/navigation";
export type RegisterInputProps = {
      name: string;
      images:string[]
      description: string,
      price: number,
      slug: string,
};
export default function RegisterV1() {
  const [isLoading, setIsLoading] = useState(false);
const [productImages, setProductImages] = useState<string[]>([
  "/art3.jpg",
  "/art4.jpg",
  "/art5.jpg",
]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  const router = useRouter();
  async function onSubmit(data: RegisterInputProps) {
    setIsLoading(true)
    data.price=Number(data.price)
    data.images=productImages
    data.slug=data.name.toLowerCase().split(" ").join("-")
    const baseurl=process.env.NEXT_PUBLIC_BASE_URL
    console.log(data)
    try {
      const response=await fetch(`${baseurl}/api/v1/products`)
      await createProduct(data)
      alert(" created successfully") 
      setIsLoading(false)
      router.push("/");
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="absolute top-5 left-5">Simple UI</div>
          <div className="grid gap-2 text-center">
          </div>
          <form className="for grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="uploadthing">
          {/* <MultipleImageInput
  title="Product Images"
  imageUrls={productImages}
  setImageUrls={setProductImages}
  endpoint="productImages"
/> */}
        </div>

            <TextInput
              label="name"
              register={register}
              name="name"
              errors={errors}
              placeholder="eg John Doe"
            />
            <TextInput
              label="description"
              register={register}
              name="description"
              type="text"
              errors={errors}
              placeholder="Eg. johndoe@gmail.com"
            />
            <TextInput
              label="price"
              register={register}
              name="price"
              type="number"
              errors={errors}
              placeholder=""
            />

            <SubmitButton
              title="Add product"
              loading={isLoading}
              loadingTitle="Creating Account please wait..."
            />
          </form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}

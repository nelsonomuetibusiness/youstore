"use client"

import React from "react";
import UpdateForm from "@/app/components/UpdateForm";
import { useParams } from "next/navigation";

const UpdateProductPage = () => {

    const params = useParams();


  return (
    <div className=" px-4 md:px-12 bg-[#F8F9FA]">
      <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl w-full mx-auto">
        Update product
      </h2>

      {/*form Component*/}
      <UpdateForm  productId={params.productId as string} />
    </div>
  );
};

export default UpdateProductPage;

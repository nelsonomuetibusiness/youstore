"use client";

import React, { ChangeEvent, useState } from "react";
import { addAction } from "../utils/addAction";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AddForm = () => {
  const [imageURL, setImageURL] = useState("");
  const router = useRouter();
  async function clientAddAction(formData: FormData) {
    const { error, success } = await addAction(formData);

    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success(success);
      router.push("/");

      setImageURL("");
    }
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const filesize = file.size;

      if (Math.round(filesize / 1024) > 1024) {
        toast.error("Image greater than 1mb is not allowed");
      } else {
        setImageURL(URL.createObjectURL(file));
      }
    }
  };

  return (
    <form
      action={clientAddAction}
      className="w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5"
    >

        {imageURL && (
            <Image src={imageURL} alt="img" width={200} height={300} className="max-w-full max-h-72 object-cover object-center rounded-lg"/>
        )}
      <div className="flex flex-col w-full">
        <label htmlFor="">Product Image:</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
          className="w-full px-3 py-1.5 md:py-2 text-black rounded-lg bg-white border-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">Product Name:</label>
        <input
          type="text"
          name="name"
          placeholder="enter product name"
          className="w-full px-3 py-1.5 md:py-2 text-black rounded-lg bg-white border-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">Price:</label>
        <input
          type="number"
          name="price"
          placeholder="enter product price"
          className="w-full px-3 py-1.5 md:py-2 text-black rounded-lg bg-white border-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">Sellers Link:</label>
        <input
          type="text"
          name="link"
          placeholder="link to buy"
          className="w-full px-3 py-1.5 md:py-2 text-black rounded-lg bg-white border-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">Description :</label>
        <textarea
          name="description"
          id=""
          placeholder="Enter description"
          rows={4}
          className="w-full px-3 py-1.5 md:py-2 text-black rounded-lg bg-white border-gray-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-3 rounded-md cursor-pointer"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddForm;

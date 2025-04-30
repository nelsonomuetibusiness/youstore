"use server";

import { connectDB } from "../api/db/connectDB";
import Product from "../api/models/product.model";
import cloudinary from "./cloudinary";

export async function updateAction(formData: FormData, id: string) {
  try {
    const image = formData.get("image") as File;
    const name = formData.get("name");
    const price = formData.get("price");
    const link = formData.get("link");
    const description = formData.get("description");

    if (!name || !price || !link || !description) {
      console.log("All fields are required");

      return {
        error: "All fields are required",
      };
    }

    await connectDB();

    const product = await Product.findById(id);

    if (!product) {
      return {
        error: "no product found",
      };
    }

    if (image.size === 0) {
      await Product.findByIdAndUpdate(id, {
        name,
        price,
        link,
        description,
      });

      return {
        success: "product updated successfully",
      };
    } else {
      const parts = product.image.split("/");
      const filename = parts[parts.length - 1];
      const imageId = filename.split(".")[0];

      cloudinary.uploader
        .destroy(`watches/${imageId}`)
        .then((result) => console.log("Result", result));

      const arrayBuffer = await image.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      const imageResponse: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: "auto",
              folder: "watches",
            },

            async (error, result) => {
              if (error) {
                return reject(error.message);
              }
              return resolve(result);
            }
          )
          .end(buffer);
      });

      console.log("Image response: ", imageResponse);

      //store in DB

      await Product.findByIdAndUpdate(id, {
        image: imageResponse.secure_url,
        name,
        price,
        link,
        description,
      });

      return {
        success: "Product added successfully",
      };
    }

    //image process

    /*  const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const imageResponse: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder: "watches",
          },

          async (error, result) => {
            if (error) {
              return reject(error.message);
            }
            return resolve(result);
          }
        )
        .end(buffer);
    });

    console.log("Image response: ", imageResponse);

    //store in DB

    await Product.findByIdAndUpdate(id, {
      image: imageResponse.secure_url,
      name,
      price,
      link,
      description,
    });

    return {
      success: "Product added successfully",
    };*/
  } catch (error) {
    return {
      error: "something went wrong",
    };
  }
}

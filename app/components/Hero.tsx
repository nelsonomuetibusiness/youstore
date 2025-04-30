import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex flex-col md:flex-row justify-center items-center bg-white px-4 md:px-12 text-black">
      <div className="max-w-2xl">
        <h1 className="text-5xl pt-6 md:pt-0 md:text-7xl leading-tight font-semibold">
          Timeless Elegance
        </h1>
        <p className="text-[#54595d] mt-4">
          Discover our Collection of Premium watches
        </p>
        <Link href="#product">
          <button className="mt-8 bg-black text-white px-3 py-2 rounded-md cursor-pointer">
            Start Shopping
          </button>
        </Link>
      </div>
      <div className="mt-4">
        <Image src="/watch.jpg" alt="img" width={500} height={500} className="rounded-md md:ml-4" />
      </div>
    </div>
  );
};

export default Hero;

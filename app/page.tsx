import Image from "next/image";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";


export default function Home() {
  return (
    <div className="bg-[#f8fafb]"> 
      <Hero/>
      <h2 className="w-full text-center text-2xl md:text-4xl font-semibold py-6">All Products</h2>
      <ProductList/>
    </div>
  );
}

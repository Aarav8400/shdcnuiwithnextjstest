import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import TopNavigation from "@/components/TopNavigation";
import Test from "@/components/test";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      {/* <Test /> */}
      <TopNavigation />
      <Hero />
      <ProductCard />
    </main>
  );
}

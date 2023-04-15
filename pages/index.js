import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      <HeroBanner />

      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className=" text-gray-500 mb-5 font-semibold leading-tight text-lg">
            Lets shoping
          </div>
          <div className=" text-gray-500 mb-5 font-semibold leading-tight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
            sequi!
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-10  md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </main>
  );
}

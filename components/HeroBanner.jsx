import React from "react";
// import Slider from "./Slider";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <div className=" container relative text-white text-[20px] w-full max-w-max mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img
            src="/slide-1.png"
            className="aspect-[16/20] md:aspect-auto object-cover"
          />
          <button className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </button>
        </div>

        <div>
          <img
            src="/slide-2.png"
            className="aspect-[16/20] md:aspect-auto object-cover"
          />
          <button className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </button>
        </div>

        <div>
          <img
            src="/slide-3.png"
            className="aspect-[16/20] md:aspect-auto object-cover"
          />
          <button className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;

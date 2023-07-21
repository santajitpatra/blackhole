import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        //   showArrows={false}
        interval={5000}
      >
        <div>
          <Image
            // loading="lazy"
            src="/show.png"
            alt="Picture of the author"
            priority
            width={1400}
            height={1400}
          />
        </div>
        <div>
          <Image
            // loading="lazy"
            src="/t-shat.png"
            alt="Picture of the author"
            priority
            width={1400}
            height={1400}
          />
        </div>
        <div>
          <Image
            // loading="lazy"
            src="/camera.png"
            alt="Picture of the author"
            priority
            width={1400}
            height={1400}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

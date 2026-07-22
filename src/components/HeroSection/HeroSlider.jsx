import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import { slides } from "../../data/slides";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  
  const animateSlide = (slideEl) => {
    if (!slideEl) return;

    const image = slideEl.querySelector(".slide-image");

    if (!image) return;

    gsap.killTweensOf(image);

    gsap.fromTo(
      image,
      {
        scale: 1.15,
      },
      {
        scale: 1,
        duration: 6,
        ease: "power1.out",
        overwrite: true,
      }
    );
  };

  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop
        speed={1800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
       onInit={(swiper) => {
  const slide = swiper?.slides?.[swiper.activeIndex];

  if (slide) {
    animateSlide(slide);
  }
}}

onSlideChangeTransitionStart={(swiper) => {
  const slide = swiper?.slides?.[swiper.activeIndex];

  if (slide) {
    animateSlide(slide);
  }
}}
        className="hero-swiper h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px]"
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={slide?.id ?? index}>
            <div className="h-full overflow-hidden">
              <img
                src={slide?.image}
                alt={slide?.title || `Slide ${index + 1}`}
                className="slide-image h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
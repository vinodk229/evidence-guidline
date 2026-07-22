import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
const VideoSection = () => {
    const titleRef = useRef(null);
    
     useEffect(() => {
        const splitText = new SplitType(titleRef.current, {
          types: "chars",
        });
    
        gsap.from(splitText.chars, {
          y: 80,
          opacity: 0,
          rotateX: -90,
          stagger: 0.05,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
    
        return () => {
          splitText.revert();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }, []);
  return (
    <section className="py-10 lg:py-24 bg-gray-50">
    <div className="container mx-auto px-4"> {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12"> <span className="inline-block px-4 py-2 text-sm font-medium bg-red-100 text-red-600 rounded-full mb-4"> Watch Our Story </span>
           
            <h2
              ref={titleRef}
              className="text-2xl md:text-4xl lg:text-4xl text-center text-gray-900 leading-tight overflow-hidden pb-5 lg:pb-14 xl:max-w-xl mx-auto"
            >
             Discover How We Transform Ideas Into Results
         </h2>
            <p className="text-gray-600 text-lg"> Transforming ideas into measurable results, we combine creativity, strategy, and expertise to deliver innovative solutions that drive growth, success, and impact. </p>
        </div> {/* Video */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-video">
                <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/u0Av7NB06_Y?start=10"
                title="Video 1"
                allowFullScreen
                />
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-video">
                <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6o9XAqgZH8k"
                title="Video 2"
                allowFullScreen
                />
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-video">
                <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/h1ilK3LPjHI"
                title="Video 3"
                allowFullScreen
                />
            </div>
        </div>
    </div>
 </section>
  )
}

export default VideoSection
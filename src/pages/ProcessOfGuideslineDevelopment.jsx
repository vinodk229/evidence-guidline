import React from 'react'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import assets from '../assets/assets';

gsap.registerPlugin(ScrollTrigger);
const ProcessOfGuideslineDevelopment = () => {
     const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".word",
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, titleRef);

    return () => ctx.revert();
  }, []);

  const headingText =
    " The Overall Process of Guideline Development";
  return (
    <section>
         <div
        className="w-full min-h-[280px] flex items-center justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.htainBanner})` }}
    >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-4xl font-bold uppercase">
        Process of Guideline Development
        </h1>
      </div>
      <div className='container mx-auto py-10'>
         <div className='grid grid-cols-1'>
                <div className='text-center'>
                    <h2
                    ref={titleRef}
                    className="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight overflow-hidden"
                    >
                    {headingText.split(" ").map((word, index) => (
                        <span
                        key={index}
                        className="word inline-block mr-2"
                        >
                        {word}
                        </span>
                    ))}
                </h2>
          </div>
            <div className='flex justify-center items-center'>
                <img src={assets.process} alt='Process' />
            </div>
         </div>
      </div>
      
    </section>
  )
}

export default ProcessOfGuideslineDevelopment
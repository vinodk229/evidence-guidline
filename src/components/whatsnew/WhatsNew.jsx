import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
const whatsNewData = [
  {
    title: "Expression of Interest (EOI) for Establishing Technical Resource Centres (TRCs) under the Centre for Evidence based Guidelines, DHR",
    link: "https://www.dhr.gov.in/static/uploads/2026/05/8508d0ab0db90db2bdd6be7c873def6d.pdf",
  },
  {
    title: "On the Eve of World Cancer Day Honorable Union Health Minister Releases Evidence Based Guidelines for Lung Cancer Treatment and Palliation (3 February 2026)",
    link: "#",
  },

  
];
const WhatsNew = () => {
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
    <section className="bg-[#f5f5f5] py-10 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-6 lg:mb-12"> <span className="inline-block px-4 py-2 text-sm font-medium bg-red-100 text-red-600 rounded-full mb-4"> What's New </span>
           
            <h2
              ref={titleRef}
              className="text-2xl md:text-4xl lg:text-4xl text-center text-gray-900 leading-tight overflow-hidden pb-5 lg:pb-14"
            >
             Latest Updates
         </h2>
        </div>
        <div className="border-t border-gray-300">
          {whatsNewData.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              target="_blank"
              className="group flex items-center justify-between border-b border-gray-300 py-8 px-4 transition-all duration-300 hover:bg-white"
            >
              <p className="text-md md:text-xl line-clamp-2 text-gray-900 transition-transform duration-300 group-hover:text-blue-700 group-hover:translate-x-2">
                {item.title}
              </p>

              <span className="w-10 h-10 hidden lg:flex items-center justify-center rounded-full bg-blue-700 text-white transition-all duration-300 group-hover:bg-blue-800">
                <BsArrowUpRight className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatsNew
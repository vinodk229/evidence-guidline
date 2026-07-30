import React from 'react'
import assets from '../assets/assets'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { htaResourceData } from '../data/hubCenter';

gsap.registerPlugin(ScrollTrigger);
const ResourceHubsCentres = () => {
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
      "CGA Resource Network Across India";
  return (
    <>
    <section>
       <div className="w-full min-h-[280px] flex items-center justify-center relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${assets.htainBanner})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="relative z-10 text-white text-4xl font-bold uppercase">
               Resource Hubs / Centres
          </h1>
        </div>
    </section>
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className='text-center pb-8'>
             <p class="inline-block px-4 py-2 text-sm font-medium bg-red-100 text-red-600 rounded-full mb-4">CGA Resource</p>
          <h2
              ref={titleRef}
              className="text-2xl mt-4 md:text-4xl lg:text-4xl text-center font-bold text-gray-900 mb-6 leading-tight overflow-hidden"
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
        
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl p-6 bg-white inline-block">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl uppercase text-slate-800">
                Network Coverage
              </h3>

              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  Resource Hubs
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  RRCs
                </div>
              </div>
            </div>
           <img src={assets.indiaMap} className="w-full max-h-[500px] object-contain" alt='India map'/>
          </div>

          {/* Content Section */}
          <div className="space-y-8">

            {/* Resource Hubs */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl mb-6">
               CGA  Resource Hubs
              </h3>

              <div className="space-y-3">
                {htaResourceData.hubs.map((hub, index) => (
                  <div
                    key={index}
                    className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                  >
                    <div className="w-3 h-3 rounded-full bg-green-500 mt-2" />

                    <p className="text-slate-700 leading-relaxed">
                      {hub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 mt-8'>
          <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl mb-4">
               CGA Resource Centres (RRCs)
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {htaResourceData.rrcs.map((centre, index) => (
                  <div
                    key={index}
                    className="flex gap-3 p-3 rounded-xl hover:bg-orange-50 transition"
                  >
                    <div className="w-3 h-3 rounded-full bg-orange-500 mt-2" />

                    <p className="text-slate-700 text-sm">
                      {centre}
                    </p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ResourceHubsCentres
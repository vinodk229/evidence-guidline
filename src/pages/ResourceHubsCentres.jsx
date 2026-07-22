import React from 'react'
import assets from '../assets/assets'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const resourceHubs = [
 "Department of Paediatric Pulmonology, Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh, Punjab.",
"Department of Neurology, All India Institute of Medical Sciences (AIIMS), New Delhi.",
"Department of Reproductive Medicine and Surgery, Christian Medical College, Vellore.",
"Division of Evidence Synthesis, Datta Meghe Institute of Higher Education and Research (DMIHER), Wardha, Maharashtra.",
"Department of Pharmacy Practice, National Institute of Pharmaceutical Education and Research (NIPER), Guwahati, Assam.",
"Department of Surgical Oncology, Tata Memorial centre, Mumbai."
];
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
      "CGA Resource Hubs";
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
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16 lg:py-20">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-50"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
        
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
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-blue-600"></div>
        </div>

        {/* Cards */}
       <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              
              {/* India Map */}
              <div className="flex justify-center">
                <img
                  src={assets.indiaMap}
                  alt="India Map"
                  className="max-w-md w-full object-contain border rounded-lg p-3 border-gray-400"
                />
              </div>

              {/* Resource Hubs List */}
              <div>
               
                <ul className="space-y-4">
                  {resourceHubs.map((hub, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-700"></span>

                      <span className="text-lg leading-relaxed">
                        {hub}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>
      </div>
    </section>
    </>
  )
}

export default ResourceHubsCentres
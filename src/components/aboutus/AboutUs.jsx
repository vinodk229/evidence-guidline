import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import assets from "../../assets/assets";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const titleRef = useRef(null);
  const navigate = useNavigate();
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
    "Centre for Evidence Based Guidelines";

  return (
    <section className="py-10 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
          
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={assets.centerForGuidLine}
              alt="About Us"
              className="w-full max-w-md mx-auto object-cover rounded-2xl border border-gray-200 shadow-lg p-5"
            />
          </div>
          <div>
            <h2
              ref={titleRef}
              className="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight overflow-hidden max-w-2xl"
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

            <p className="text-gray-600 leading-8 mb-6">
              The development of evidence-based guidelines is crucial for enhancing healthcare quality, optimizing treatment strategies, and ensuring the efficient use of resources. Globally, organizations like the World Health Organization (WHO) continuously refine these guidelines through rigorous research and expert consensus. In India, the need for such guidelines is particularly pressing due to diverse healthcare challenges, regional disparities, and resource limitations. The fragmented nature of guideline development, along with the absence of a centralized authority, has impacted the uniformity and scientific rigor of clinical standards. 
            </p>

             <button
                onClick={() => navigate("/abouthtain")}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300"
              >
                Learn More
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from '../../assets/assets'
import { useNavigate } from "react-router-dom";
import { icons } from "lucide-react";

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
              className="w-full object-cover rounded-2xl border border-gray-200 shadow-lg p-4"
            />
          </div>
          <div>
            <p className="inline-flex items-center justify-center px-4 py-2 rounded-full border font-medium">About us</p>
            <h2
              ref={titleRef}
              className="text-2xl mt-4 md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight overflow-hidden max-w-2xl"
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

            <p className="text-gray-600 leading-8 mb-6 line-clamp-3">
              The development of evidence-based guidelines is crucial for enhancing healthcare quality, optimizing treatment strategies, and ensuring the efficient use of resources. Globally, organizations like the World Health Organization (WHO) continuously refine these guidelines through rigorous research and expert consensus. In India, the need for such guidelines is particularly pressing due to diverse healthcare challenges, regional disparities, and resource limitations. The fragmented nature of guideline development, along with the absence of a centralized authority, has impacted the uniformity and scientific rigor of clinical standards. 
            </p>
               <div className="flex items-center gap-6">
                <div className="group relative flex items-center p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 max-w-xl overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1 bg-blue-600"></div>
                  <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                    <img
                      src={assets.icons2}
                      alt="Vision"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="ml-6">
                    <h3 className="mt-1 text-2xl text-gray-700">
                      Our Vision
                    </h3>
                    <p className="mt-3 text-gray-600 leading-7">
                      To improve healthcare quality in India. To lead efforts in gathering and coordinating healthcare research.
                    </p>
                  </div>
                </div>
                 <div className="group relative flex items-center p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 max-w-xl overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1 bg-blue-600"></div>
                  <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                    <img
                      src={assets.icons1}
                      alt="Vision"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="ml-6">
                    <h3 className="mt-1 text-2xl text-gray-700">
                      Our Mission
                    </h3>
                    <p className="mt-3 text-gray-600 leading-7">
                      The Centre is committed to coordinating the development of evidence-based guidelines that reflect the best available scientific research.
                    </p>
                  </div>
                </div>
              </div>
             {/* <button
                onClick={() => navigate("/abouthtain")}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300"
              >
                Learn More
              </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
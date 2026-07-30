import React from 'react'
import {
  HeartPulse,
  Droplets,
  Bug,
  Baby,
  Brain,
  ChevronRight,
} from "lucide-react";

 const categories = [
    {
      icon: HeartPulse,
      title: "Cardiovascular Health",
      count: 25,
    },
    {
      icon: Droplets,
      title: "Diabetes & Endocrinology",
      count: 18,
    },
    {
      icon: Bug,
      title: "Infectious Diseases",
      count: 32,
    },
    {
      icon: Baby,
      title: "Maternal & Child Health",
      count: 21,
    },
    {
      icon: Brain,
      title: "Mental Health",
      count: 16,
    },
  ];

  const whatsNewData = [
  {
    title: "Expression of Interest (EOI) for Establishing Technical Resource Centres (TRCs) under the Centre for Evidence based Guidelines, DHR",
    path: "https://www.dhr.gov.in/static/uploads/2026/05/8508d0ab0db90db2bdd6be7c873def6d.pdf",
  },
  {
    title: "On the Eve of World Cancer Day Honorable Union Health Minister Releases Evidence Based Guidelines for Lung Cancer Treatment and Palliation (3 February 2026)",
    path: "#",
  },
];

  const updates = [
    {
      image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300",
      title: "New Guideline: Hypertension Management in Adults",
      date: "May 15, 2024",
      badge: "NEW",
    },
    {
      image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300",
      title: "Updated: Type 2 Diabetes Care Guideline",
      date: "May 02, 2024",
    },
    {
      image:
      "https://images.unsplash.com/photo-1573497491765-cf4147f4d2c4?w=300",
      title: "Webinar: GRADE Methodology in Guideline Development",
      date: "Apr 20, 2024",
    },
  ];
const WhatsNew = () => {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Explore Guidelines */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-3">
            <div className="flex items-center justify-between p-5">
              <h3 className="text-lg font-semibold text-gray-800 uppercase">
                Explore Guidelines
              </h3>
              <button className="text-sm font-medium text-blue-600 uppercase">
                View All
              </button>
            </div>

            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center justify-between border-t border-gray-100 px-5 py-4 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-7 w-7 text-blue-600" />
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.count} Guidelines
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              );
            })}
          </div>

          {/* Development Process */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-6">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 uppercase">
               What’s New
              </h3>

              <button className="text-sm font-medium text-blue-600 uppercase">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
            {whatsNewData.map((item, index) => (
              <a
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="xl:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold hidden">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>

                      {/* <p className="mt-2 text-sm text-gray-500 border border-gray-200 p-2 inline-block rounded-full px-3 bg-blue-100">
                       View Document
                      </p> */}
                    </div>

                    <svg
                      className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
            </div>
          </div>

          {/* Latest Updates */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-3">
            <div className="flex items-center justify-between p-5">
              <h3 className="text-lg font-semibold text-gray-800 uppercase">
                Latest Updates
              </h3>
              <button className="text-sm font-medium text-blue-600 uppercase">
                View All
              </button>
            </div>

            <div className="space-y-4 p-5 pt-0">
              {updates.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <img
                    src={item.image}
                    alt=""
                    className="h-16 w-20 rounded-md object-cover"
                  />

                  <div>
                    {item.badge && (
                      <span className="mb-1 inline-block rounded bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                        {item.badge}
                      </span>
                    )}

                    <h4 className="line-clamp-2 text-sm font-medium text-gray-800">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsNew
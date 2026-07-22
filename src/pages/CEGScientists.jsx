import React from 'react'
import assets from '../assets/assets';
const scientists = [
  {
    sno: 1,
    name: "Dr. Roopa Hariparsad",
    designation: "Scientist – F",
    email: "roopa.hariprasad@gov.in",
    contact: "—",
  },
  {
    sno: 2,
    name: "Dr. Chanchal Goyal",
    designation: "Scientist – F",
    email: "goyalc.hq@icmr.gov.in",
    contact: "—",
  },
  {
    sno: 3,
    name: "Dr. Vikas Dhikav",
    designation: "Scientist – E",
    email: "dhikav.v@icmr.gov.in",
    contact: "—",
  },
  {
    sno: 4,
    name: "Dr. Varsha Dalal",
    designation: "Scientist – E",
    email: "varsha.dalal@icmr.gov.in",
    contact: "—",
  },
  {
    sno: 5,
    name: "Dr. Debjani Ram Purakayastha",
    designation: "Scientist – D",
    email: "debjani.r@icmr.gov.in",
    contact: "—",
  },
  {
    sno: 6,
    name: "Dr. Siddharth Kapahtia",
    designation: "Scientist – D",
    email: "siddharth.kapahtia@icmr.gov.in",
    contact: "—",
  },
  {
    sno: 7,
    name: "Dr. Vikas Dhiman",
    designation: "Scientist – D",
    email: "dhiman.vikas@icmr.gov.in",
    contact: "—",
  },
];
const CEGScientists = () => {
  return (
    <>
       <div
        className="w-full min-h-[280px] flex items-center justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.htainBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-4xl font-bold uppercase">
        CEG Scientists
        </h1>
      </div>
  
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
      
        <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md lg:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-4 text-left">S.No.</th>
                  <th className="px-4 py-4 text-left">Name</th>
                  <th className="px-4 py-4 text-left">Designation</th>
                  <th className="px-4 py-4 text-left">Email ID</th>
                  <th className="px-4 py-4 text-left">Contact No.</th>
                </tr>
              </thead>

              <tbody>
                {scientists.map((item, index) => (
                  <tr
                    key={item.sno}
                    className={`border-b transition hover:bg-blue-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <td className="px-4 py-5 font-semibold text-blue-700">
                      {item.sno}
                    </td>

                    <td className="px-4 py-5 font-medium text-slate-800">
                      {item.name}
                    </td>

                    <td className="px-4 py-5">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        {item.designation}
                      </span>
                    </td>

                    <td className="px-4 py-5">
                      <a
                        href={`mailto:${item.email}`}
                        className="text-blue-700 hover:underline"
                      >
                        {item.email}
                      </a>
                    </td>

                    <td className="px-4 py-5 text-slate-700">
                      {item.contact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-4 lg:hidden">
          {scientists.map((item) => (
            <div
              key={item.sno}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  S.No. {item.sno}
                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  {item.designation}
                </span>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {item.name}
              </h3>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-slate-500">
                    Email:
                  </span>
                  <a
                    href={`mailto:${item.email}`}
                    className="ml-2 break-all text-blue-700 hover:underline"
                  >
                    {item.email}
                  </a>
                </div>

                <div>
                  <span className="font-medium text-slate-500">
                    Contact:
                  </span>
                  <span className="ml-2 text-slate-700">
                    {item.contact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}

export default CEGScientists
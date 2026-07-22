import React from 'react'
import assets from '../assets/assets';

const Secretary = () => {
   const achievements = [
    "Conducted, led and coordinated research that had a significant impact on health policy and programmes and has the potential of saving over 10,00,000 lives every year.",
    "Contributed to major innovations for newborn and child health including zinc in treatment of diarrhoea, early initiation and exclusive breastfeeding, outpatient treatment of newborns with severe infections when they cannot be admitted to a hospital, and immediate initiation of Kangaroo Mother Care after birth in mother-newborn intensive care units.",
    "Formulation of evidence-based global policy guidelines for the past 20 years in all aspects of maternal, newborn, child and adolescent health.",
    "Strengthened research capacity in more than 50 institutions in 20 countries through hands-on work on important research initiatives, including capacity for proposal development, world-class implementation, data analysis and interpretation of results."
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 lg:py-15">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={assets.DrRajvie}
                alt="Dr Rajiv Bahl"
                className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white/20"
              />
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl lg:text-5xl font-medium mb-4">
                Dr Rajiv Bahl
              </h1>

              <div className="h-1 w-24 bg-cyan-400 rounded-full mb-6"></div>

              <p className="text-lg leading-relaxed text-blue-100">
                Secretary, Department of Health Research (Ministry of Health &
                Family Welfare), Government of India and Director General,
                Indian Council of Medical Research (ICMR).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <h2 className="text-3xl font-normal text-slate-900 mb-8">
            Profile
          </h2>

          <div className="space-y-6 text-slate-700 leading-8 text-justify">
            <p>
              Dr Rajiv Bahl is a physician-scientist, with specialization in
              paediatrics (MD Pediatrics: University of Delhi) and public health
              (PhD: All India Institute of Medical Sciences). He has also
              received an Honorary Doctorate from University of Bergen, Norway,
              in 2022 in recognition of his contributions to maternal and child
              health research.
            </p>

            <p>
              He has 30 years of experience leading health research and
              translating research into public health policy both in India and
              globally.
            </p>

            <p>
              Dr Bahl has been the Head of Research on Maternal, Newborn, Child
              and Adolescent Health at the World Health Organization (WHO),
              Geneva (2013–2022). Prior to that, he was responsible for Newborn
              and Child Health research at WHO (2003–2012) and was a Scientist
              in the ICMR Advanced Centre for Diarrheal Disease and Nutrition
              Research at All India Institute of Medical Sciences (1994–2002).
            </p>

            <p>
              His expertise includes setting research agendas, implementing
              health research, mobilizing resources, strengthening institutional
              capacity, and translating findings into public health policies and
              programmes. He has extensive experience in nutrition, enteric and
              respiratory diseases, and non-communicable diseases.
            </p>

            <p>
              Dr Bahl has conducted and coordinated population-based and
              hospital-based intervention trials, cohort and case-control
              studies, and implementation research to scale-up interventions.
              His work has directly influenced public health policies and has
              been published in leading international journals.
            </p>

            <p>
              He has supported multi-country research studies in over 20
              countries across Asia and Africa and contributed to strengthening
              research capacity in more than 50 institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Major Achievements */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <h2 className="text-3xl font-normal text-slate-900 mb-8">
            Major Achievements
          </h2>

          <div className="grid gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                <p className="text-slate-700 leading-7">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Secretary
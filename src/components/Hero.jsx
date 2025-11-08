import { Rocket, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-medium">
              <Rocket className="h-4 w-4" /> Renewable Project Intelligence
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Data-driven Assessment for Renewable Energy Sites
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Explore distributed asset resource evaluations with interactive maps, bankable datasets, and transparent scoring designed for developers and financiers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700">
                Launch demo <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#showcase" className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-gray-700 font-medium hover:bg-gray-50">
                See insights
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border border-emerald-200 bg-white shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop"
                alt="Solar farm aerial"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block">
              <div className="rounded-lg bg-white shadow-md border p-4">
                <p className="text-sm font-medium text-gray-700">Site score</p>
                <p className="text-2xl font-bold text-emerald-600">92</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

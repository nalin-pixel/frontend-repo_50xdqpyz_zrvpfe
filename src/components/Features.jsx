import { Map, Wind, Droplets, Shield } from 'lucide-react'

const features = [
  {
    icon: Map,
    title: 'Geospatial layers',
    desc: 'Stack parcels, grid proximity, elevation, and protected areas to filter viable locations.',
  },
  {
    icon: Wind,
    title: 'Resource potential',
    desc: 'Bankable solar and wind datasets with hourly time-series and climatology corrections.',
  },
  {
    icon: Droplets,
    title: 'Environmental risk',
    desc: 'Hydrology, flood plains, and wetland indicators to de-risk siting early.',
  },
  {
    icon: Shield,
    title: 'Bankability scoring',
    desc: 'Transparent, adjustable criteria to score sites for investment committees.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Core capabilities</h2>
        <p className="mt-2 text-gray-600">Built to evaluate distributed renewable assets at scale.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border p-6 hover:shadow-sm transition-shadow">
              <Icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

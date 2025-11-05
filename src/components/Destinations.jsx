import { MapPin, Building2, Trees } from 'lucide-react';

const cityCards = [
  {
    title: 'Cape Town',
    description:
      'Iconic Table Mountain vistas, world‑class dining, and refined coastal retreats.',
    image:
      'https://images.unsplash.com/photo-1614854262340-9f084063329a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Johannesburg',
    description:
      'Contemporary art, cosmopolitan energy, and hidden speakeasies in the City of Gold.',
    image:
      'https://images.unsplash.com/photo-1559479083-f3b234ad0d4a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Durban',
    description:
      'Warm Indian Ocean beaches, Afro‑Asian flavours, and laid‑back luxury.',
    image:
      'https://images.unsplash.com/photo-1584988299603-9fa6e3b690bf?q=80&w=1200&auto=format&fit=crop',
  },
];

const parkCards = [
  {
    title: 'Kruger National Park',
    description:
      'Private game reserves, Big Five encounters, and candle‑lit bush dinners.',
    image:
      'https://images.unsplash.com/photo-1550955616-7c88f8e9bd9c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Addo Elephant Park',
    description: 'Gentle giants, rolling valleys, and elegant eco‑lodges.',
    image:
      'https://images.unsplash.com/photo-1548095115-45697e504efe?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Hluhluwe–Imfolozi',
    description: 'Rhino conservation heartland with cinematic landscapes.',
    image:
      'https://images.unsplash.com/photo-1543245927-22ea4b7a4fd9?q=80&w=1200&auto=format&fit=crop',
  },
];

function Card({ item }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-[#990000]">
          <MapPin size={16} />
          <h3 className="font-semibold tracking-tight text-gray-900">{item.title}</h3>
        </div>
        <p className="mt-2 text-sm text-gray-600">{item.description}</p>
        <a href="#contact" className="mt-4 inline-flex items-center text-sm font-medium text-[#990000] hover:underline">
          Enquire now →
        </a>
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">Featured</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Cities & National Parks</h2>
          </div>
          <div className="hidden md:flex gap-3 text-gray-500">
            <span className="inline-flex items-center gap-1 text-sm"><Building2 size={16}/> Major Cities</span>
            <span className="inline-flex items-center gap-1 text-sm"><Trees size={16}/> National Parks</span>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityCards.map((c) => (
            <Card key={c.title} item={c} />
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parkCards.map((p) => (
            <Card key={p.title} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Sparkles, Wine, Ship, Camera } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Private Safari Lodges',
    text: 'Exclusive-use villas, expert trackers, and sunrise game drives in pristine reserves.',
  },
  {
    icon: Wine,
    title: 'Winelands & Gastronomy',
    text: 'Michelin-starred collaborations, cellar tastings, and chef’s table experiences.',
  },
  {
    icon: Ship,
    title: 'Coastal Yachting',
    text: 'Sunset charters along the Atlantic seaboard with sommelier‑curated pairings.',
  },
  {
    icon: Camera,
    title: 'Photographic Expeditions',
    text: 'Led by award‑winning professionals with access to remote hideaways.',
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-gray-500">Signature</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Experiences</h2>
          <p className="mt-2 text-gray-600">Each itinerary is handcrafted around your tastes — with concierge attention from arrival to farewell.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#990000]/10 text-[#990000] flex items-center justify-center">
                <it.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

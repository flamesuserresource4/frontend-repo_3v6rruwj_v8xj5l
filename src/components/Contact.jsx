import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thank you, ${name}. Our concierge will be in touch shortly.`);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Begin your journey</h2>
            <p className="mt-2 text-gray-600">Share a few details and our team will craft a proposal tailored to your style.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#990000]" />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#990000]" />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Preferred Destination</label>
                <select name="destination" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#990000]">
                  <option>Cape Town</option>
                  <option>Johannesburg</option>
                  <option>Durban</option>
                  <option>Kruger</option>
                  <option>Addo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700">Travel Dates</label>
                <input type="text" name="dates" placeholder="e.g. 12–20 Dec" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#990000]" />
              </div>
              <button className="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium text-white bg-[#990000] hover:brightness-110">
                Request Proposal
              </button>
              {status && <p className="text-sm text-gray-700">{status}</p>}
            </form>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#990000]/10 blur-3xl" />
            <div className="relative">
              <h3 className="font-semibold text-gray-900">Why travel with us?</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li>• Discreet, end‑to‑end concierge service</li>
                <li>• Access to private reserves and exclusive events</li>
                <li>• Handpicked partners with impeccable credentials</li>
                <li>• Seamless logistics across cities and wilderness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

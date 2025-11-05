import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        {/* 3D scene background - replace with your Spline scene URL if desired */}
        <Spline scene="https://prod.spline.design/9wA0r0n0u7cE0s6G/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
            Curated luxury journeys across South Africa
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            From the vibrant pulse of Cape Town and Johannesburg to the serene majesty of Kruger and Addo — discover tailor‑made escapes crafted with discretion and style.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#destinations" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium text-white bg-[#990000] hover:brightness-110 transition">
              Explore Destinations
            </a>
            <a href="#experiences" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium text-gray-800 border border-gray-300 bg-white hover:bg-gray-50 transition">
              Signature Experiences
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Mzansi Luxe. All rights reserved.</p>
        <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-700">
          <span className="inline-flex w-2.5 h-2.5 rounded-full bg-[#990000]" />
          Crafted in South Africa
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-inter text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Destinations />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}

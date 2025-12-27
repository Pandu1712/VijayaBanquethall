import { Phone } from 'lucide-react';
import { navigateTo } from '../utils/navigation';
import { contactInfo } from '../data/services';

interface HeaderProps {
  currentPage: string;
}

const Header = ({ currentPage }: HeaderProps) => {
  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About Us', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Gallery', path: 'gallery' },
    { name: 'Contact', path: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => navigateTo('home')}
          >
            <img
              src="/chatgpt_image_dec_27,_2025,_03_08_33_pm.png"
              alt="Vijaya Banquet Hall Logo"
              className="h-14 w-14 object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-[#C9A961] tracking-wide">Vijaya</h1>
              <p className="text-sm text-gray-600 -mt-1">Banquet Hall</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigateTo(link.path)}
                className={`px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  currentPage === link.path
                    ? 'text-[#C9A961]'
                    : 'text-gray-700 hover:text-[#C9A961]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#C9A961] transform origin-left transition-transform duration-300 ${
                    currentPage === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </nav>

          <a
            href={`tel:${contactInfo.phone}`}
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#C9A961] to-[#B8954A] text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone size={18} />
            <span className="font-medium">Call Us</span>
          </a>

          <button
            className="lg:hidden flex flex-col space-y-1.5 p-2"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) {
                menu.classList.toggle('hidden');
              }
            }}
          >
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>

        <div id="mobile-menu" className="hidden lg:hidden pb-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  navigateTo(link.path);
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('hidden');
                }}
                className={`px-4 py-2 text-left text-sm font-medium transition-colors duration-300 ${
                  currentPage === link.path
                    ? 'text-[#C9A961] bg-[#C9A961]/10'
                    : 'text-gray-700 hover:text-[#C9A961] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#C9A961] to-[#B8954A] text-white px-4 py-2 rounded-lg mx-4 justify-center"
            >
              <Phone size={18} />
              <span className="font-medium">Call Us</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

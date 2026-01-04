import { Crown, Phone, Mail, MapPin } from 'lucide-react';
import { navigateTo } from '../utils/navigation';
import { contactInfo } from '../data/services';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About Us', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Gallery', path: 'gallery' },
    { name: 'Contact', path: 'contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/vijayalogo.png"
                alt="Vijay Banquet Hall Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#C9A961]">Vijay</h3>
                <p className="text-sm text-gray-400">Banquet Hall</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Creating unforgettable celebrations across three magnificent floors in the heart of Suryapet.
            </p>
            <div className="flex items-center space-x-2">
              <Crown className="text-[#C9A961]" size={24} />
              <span className="text-[#C9A961] font-semibold">Premium Experience</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigateTo(link.path)}
                    className="text-gray-400 hover:text-[#C9A961] transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-start space-x-3 text-gray-400 hover:text-[#C9A961] transition-colors duration-300"
                >
                  <Phone size={20} className="mt-1 flex-shrink-0" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start space-x-3 text-gray-400 hover:text-[#C9A961] transition-colors duration-300"
                >
                  <Mail size={20} className="mt-1 flex-shrink-0" />
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>
                  {contactInfo.address}
                  <br />
                  Pincode: {contactInfo.pincode}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Our Facilities</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#C9A961] rounded-full"></div>
                <span>Luxury Rooms</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#C9A961] rounded-full"></div>
                <span>Bar Facilities</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#C9A961] rounded-full"></div>
                <span>Banquet Hall (250-300)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#C9A961] rounded-full"></div>
                <span>Fine Dining</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#C9A961] rounded-full"></div>
                <span>Parking Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Vijay Banquet Hall. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Crafted with excellence in Suryapet, Telangana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/services';

const StickyContacts = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      <a
        href={`https://wa.me/91${contactInfo.phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat on WhatsApp
        </span>
      </a>

      <a
        href={`tel:${contactInfo.phone}`}
        className="group relative bg-[#C9A961] hover:bg-[#B8954A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Call"
      >
        <Phone size={24} />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default StickyContacts;

import { ArrowRight, Crown, Users, Sparkles, Building2 } from 'lucide-react';
import { navigateTo } from '../utils/navigation';
import { services, events } from '../data/services';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
            alt="Vijay Banquet Hall"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Crown className="text-[#C9A961] w-16 h-16 animate-float" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Vijay Banquet Hall
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
              Where Celebrations Meet Elegance
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Experience luxury across three magnificent floors designed to make your special occasions unforgettable
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigateTo('services')}
                className="group bg-gradient-to-r from-[#C9A961] to-[#B8954A] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Three Floors of Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A961] to-[#B8954A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">First Floor</h3>
              <p className="text-xl text-[#C9A961] mb-3 font-semibold">Luxury Rooms</p>
              <p className="text-gray-600 leading-relaxed">
                Comfortable and elegant rooms designed for your guests' convenience and relaxation.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Second Floor</h3>
              <p className="text-xl text-[#C9A961] mb-3 font-semibold">Dining Hall</p>
              <p className="text-gray-600 leading-relaxed">
                Exquisite dining experience with exceptional culinary delights for your guests.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Third Floor</h3>
              <p className="text-xl text-[#C9A961] mb-3 font-semibold">Banquet Hall</p>
              <p className="text-gray-600 leading-relaxed">
                Grand hall accommodating 250-300 guests for spectacular celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our world-class facilities designed for your perfect celebration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group cursor-pointer"
                onClick={() => navigateTo('service-detail', service.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-200 mb-3">{service.shortDesc}</p>
                    <div className="flex items-center text-[#C9A961] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn More</span>
                      <ArrowRight size={18} className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A961] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A961] rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perfect Venue for Every Occasion
            </h2>
            <p className="text-xl text-gray-300">
              From intimate gatherings to grand celebrations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <Sparkles className="w-12 h-12 text-[#C9A961] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
                <p className="text-sm text-gray-400">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="text-white" size={40} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">3</h3>
              <p className="text-gray-600 text-lg">Floors of Luxury</p>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">300</h3>
              <p className="text-gray-600 text-lg">Guest Capacity</p>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Crown className="text-white" size={40} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 text-lg">Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#C9A961] to-[#B8954A] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Event?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you create unforgettable memories at Vijay Banquet Hall
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-white text-[#C9A961] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

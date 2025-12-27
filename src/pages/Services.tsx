import { ArrowRight, Check } from 'lucide-react';
import { navigateTo } from '../utils/navigation';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
            alt="Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Discover our premium facilities designed to make your celebrations extraordinary
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center group`}
              >
                <div className="lg:w-1/2 relative">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    {service.capacity && (
                      <div className="absolute top-6 right-6 bg-[#C9A961] text-white px-4 py-2 rounded-full font-semibold">
                        {service.capacity}
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#C9A961] to-[#B8954A] rounded-2xl -z-10 group-hover:scale-110 transition-transform duration-300"></div>
                </div>

                <div className="lg:w-1/2">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="mt-1 flex-shrink-0">
                            <Check className="text-[#C9A961]" size={18} />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => navigateTo('service-detail', service.id)}
                    className="group/btn inline-flex items-center space-x-2 bg-gradient-to-r from-[#C9A961] to-[#B8954A] text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <span>View Details</span>
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#C9A961] to-[#B8954A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is ready to help you select the perfect venue for your special occasion
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-white text-[#C9A961] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;

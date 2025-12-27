import { ArrowLeft, Check, Phone, Mail } from 'lucide-react';
import { navigateTo } from '../utils/navigation';
import { services, contactInfo } from '../data/services';
import { useState } from 'react';

interface ServiceDetailProps {
  serviceId: string;
}

const ServiceDetail = ({ serviceId }: ServiceDetailProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <button
            onClick={() => navigateTo('services')}
            className="text-[#C9A961] hover:underline"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigateTo('services')}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#C9A961] transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-4 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={service.images[selectedImage]}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {service.capacity && (
                  <div className="absolute top-6 right-6 bg-[#C9A961] text-white px-4 py-2 rounded-full font-semibold">
                    {service.capacity}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-4 gap-4">
                {service.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? 'ring-4 ring-[#C9A961] scale-105'
                        : 'hover:scale-105'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${service.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">{service.title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="mt-1 flex-shrink-0">
                        <div className="bg-[#C9A961]/10 p-1 rounded-full">
                          <Check className="text-[#C9A961]" size={16} />
                        </div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Book?</h3>
                <p className="mb-6">
                  Contact us today to check availability and discuss your requirements
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    <Phone size={20} />
                    <span className="font-semibold">{contactInfo.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    <Mail size={20} />
                    <span className="font-semibold">{contactInfo.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Other Services</h2>
            <p className="text-xl text-gray-600">Discover more of what we offer</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services
              .filter((s) => s.id !== serviceId)
              .map((otherService) => (
                <div
                  key={otherService.id}
                  className="group cursor-pointer"
                  onClick={() => navigateTo('service-detail', otherService.id)}
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={otherService.images[0]}
                      alt={otherService.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{otherService.title}</h3>
                      <p className="text-sm text-gray-200">{otherService.shortDesc}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

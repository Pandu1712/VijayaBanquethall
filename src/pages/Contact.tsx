import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { contactInfo, events } from '../data/services';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Let's discuss how we can make your event extraordinary
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're here to help you plan the perfect event. Whether you have questions about our facilities,
                want to schedule a visit, or are ready to book, our team is ready to assist you.
              </p>

              <div className="space-y-6 mb-12">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 text-lg">{contactInfo.phone}</p>
                    <p className="text-sm text-[#C9A961] mt-1">Click to call</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 break-all">{contactInfo.email}</p>
                    <p className="text-sm text-[#C9A961] mt-1">Click to email</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      {contactInfo.address}
                    </p>
                    <p className="text-gray-600">Pincode: {contactInfo.pincode}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Availability</h3>
                    <p className="text-gray-600">Open 24/7 for your convenience</p>
                    <p className="text-gray-600">Contact us anytime for bookings</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                <p className="mb-6">Prefer to chat? Reach us instantly on WhatsApp</p>
                <a
                  href={`https://wa.me/91${contactInfo.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white/30 transition-colors duration-300 font-semibold"
                >
                  <MessageCircle size={24} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Events We Host</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Vijaya Banquet Hall is the perfect venue for all types of celebrations and gatherings:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {events.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-[#C9A961]/10 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-[#C9A961] rounded-full"></div>
                      <span className="text-gray-700 font-medium">{event.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Why Book With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#C9A961] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Capacity for 250-300 guests</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#C9A961] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Three floors with distinct facilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#C9A961] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Premium amenities and services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#C9A961] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Professional event management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#C9A961] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Excellent food and catering options</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#C9A961] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Convenient location in Suryapet</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#C9A961] to-[#B8954A] rounded-2xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
              <p className="text-xl mb-8">
                Contact us today to check availability and start planning your perfect event
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="bg-white text-[#C9A961] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/91${contactInfo.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

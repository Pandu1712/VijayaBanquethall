import { Crown, Heart, Award, Users, Building2, Sparkles } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300">
              Creating unforgettable memories since our inception
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
                  alt="Vijaya Banquet Hall"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#C9A961] to-[#B8954A] p-8 rounded-2xl text-white shadow-xl">
                  <Crown className="w-16 h-16 mb-2" />
                  <p className="text-2xl font-bold">Premium</p>
                  <p className="text-lg">Excellence</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to Vijaya Banquet Hall
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Vijaya Banquet Hall stands as a premier destination for celebrations in Suryapet, Telangana.
                Our magnificent three-floor establishment has been designed with one goal in mind - to make
                your special occasions truly unforgettable.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From intimate family gatherings to grand celebrations, we provide the perfect backdrop
                for every milestone in your life. Our commitment to excellence, attention to detail,
                and world-class amenities make us the preferred choice for discerning hosts.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Located conveniently on VT Road near HP Gas in Suryapet, we combine accessibility
                with luxury, ensuring your guests experience comfort from the moment they arrive.
              </p>
              <button
                onClick={() => navigateTo('contact')}
                className="bg-gradient-to-r from-[#C9A961] to-[#B8954A] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Plan Your Event
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Vijaya?</h2>
            <p className="text-xl text-gray-600">
              Excellence in every detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Three Floors</h3>
              <p className="text-gray-600 leading-relaxed">
                A complete venue spread across three floors, offering rooms, dining, and a grand banquet hall
                all under one roof.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Large Capacity</h3>
              <p className="text-gray-600 leading-relaxed">
                Our banquet hall accommodates 250-300 guests comfortably, perfect for grand celebrations
                and large gatherings.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Crown className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Facilities</h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art amenities including luxury rooms, fine dining, bar facilities,
                and modern event equipment.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced team ensures flawless execution of your event, attending to every detail
                with care and precision.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Elegant Ambiance</h3>
              <p className="text-gray-600 leading-relaxed">
                Beautifully designed spaces with sophisticated decor creating the perfect atmosphere
                for your celebrations.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8954A] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Memorable Events</h3>
              <p className="text-gray-600 leading-relaxed">
                We specialize in creating unforgettable experiences for birthdays, weddings, haldi functions,
                and all celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A961] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A961] rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              To be the most trusted and preferred venue for celebrations in the region,
              known for our unwavering commitment to excellence, exceptional service,
              and the ability to transform special moments into cherished memories that last a lifetime.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#C9A961] mb-2">1000+</div>
                <p className="text-gray-300">Events Hosted</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#C9A961] mb-2">100%</div>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#C9A961] mb-2">24/7</div>
                <p className="text-gray-300">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#C9A961] to-[#B8954A] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Magic Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your celebration deserves the perfect venue. Let Vijaya Banquet Hall be part of your special day.
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-white text-[#C9A961] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;

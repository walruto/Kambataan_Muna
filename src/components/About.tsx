import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2024, Kambataan Muna began as a small group of passionate high school students who recognized the need for 
                stronger support for underserved Filipino youth. What started as informal discussions has grown into a dedicated 
                organization committed to making a real difference in young lives.
              </p>
              <p>
                Our journey has been one of continuous learning and growth, driven by the unwavering spirit of bayanihan – 
                the Filipino tradition of community cooperation. Through challenges and successes, we have remained steadfast 
                in our commitment to putting the youth first.
              </p>
              <p>
                Today, we stand as advocates for Filipino youth education and empowerment, working directly with schools 
                and communities to provide essential support and resources where they're needed most.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h4>
                <p className="text-blue-800">
                  To uplift and empower underserved Filipino youth through educational support, community partnerships, 
                  and direct action that creates lasting positive change.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-red-900 mb-3">Our Vision</h4>
                <p className="text-red-800">
                  A future where every Filipino youth has access to quality education and the support they need 
                  to reach their full potential and contribute meaningfully to their communities.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Filipino Youth Community"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gray-900 rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">1</div>
              <div className="text-gray-300">Year of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2</div>
              <div className="text-gray-300">Schools Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">600+</div>
              <div className="text-gray-300">Students Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">$600+</div>
              <div className="text-gray-300">Raised for Education</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
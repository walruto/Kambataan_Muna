import React from 'react';
import { Heart, Users, Calendar, Clock, MapPin, ExternalLink, Handshake, Award, Globe } from 'lucide-react';

const Volunteering = () => {
  const volunteerOpportunities = [
    {
      title: "Community Event Coordinator",
      description: "Help organize and manage cultural festivals, educational workshops, and community gatherings",
      commitment: "5-10 hours/month",
      skills: "Event planning, communication, organization",
      icon: Calendar,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600"
    },
    {
      title: "Youth Mentor",
      description: "Guide and support Filipino-American youth through educational and cultural programs",
      commitment: "3-5 hours/week",
      skills: "Mentoring, patience, cultural knowledge",
      icon: Users,
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600"
    },
    {
      title: "Cultural Ambassador",
      description: "Share Filipino culture and traditions through presentations and community outreach",
      commitment: "Flexible schedule",
      skills: "Public speaking, cultural knowledge, enthusiasm",
      icon: Globe,
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600"
    },
    {
      title: "Administrative Support",
      description: "Assist with office tasks, data entry, and general organizational support",
      commitment: "2-4 hours/week",
      skills: "Computer skills, attention to detail, reliability",
      icon: Award,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      title: "Community Outreach Volunteer",
      description: "Connect with Filipino families and help them access community resources and services",
      commitment: "4-6 hours/month",
      skills: "Communication, empathy, bilingual preferred",
      icon: Handshake,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600"
    },
    {
      title: "Social Media & Marketing",
      description: "Help promote our events and initiatives through digital marketing and content creation",
      commitment: "2-3 hours/week",
      skills: "Social media, graphic design, content writing",
      icon: Heart,
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600"
    }
  ];

  const benefits = [
    "Make a meaningful impact in the Filipino community",
    "Develop new skills and gain valuable experience",
    "Connect with like-minded community members",
    "Receive volunteer recognition and certificates",
    "Access to exclusive volunteer appreciation events",
    "Professional development opportunities"
  ];

  const handleVolunteerSignup = () => {
    window.open('https://forms.google.com/forms/d/e/1FAIpQLSdKjX8vQm9rN2pL4wE6tY7uI9oP3qA5sD8fG1hJ2kL6mN9oP/viewform', '_blank');
  };

  return (
    <section id="volunteering" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full text-sm font-bold mb-4 hover:scale-105 transition-transform duration-300">
            Join Our Mission
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 hover:text-blue-600 transition-colors duration-300 cursor-default">Volunteer With Us</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of something bigger. Your time and talents can make a real difference in strengthening our Filipino community and preserving our cultural heritage.
          </p>
        </div>

        {/* Volunteer Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {volunteerOpportunities.map((opportunity, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 transform border border-gray-100">
              <div className={`${opportunity.color} ${opportunity.hoverColor} rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <opportunity.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {opportunity.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {opportunity.description}
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-4 h-4 mr-3 text-blue-500" />
                  <span className="font-semibold">Time Commitment:</span>
                  <span className="ml-2">{opportunity.commitment}</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <Award className="w-4 h-4 mr-3 text-yellow-500 mt-0.5" />
                  <div>
                    <span className="font-semibold">Skills Needed:</span>
                    <span className="ml-2">{opportunity.skills}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-700 rounded-3xl p-12 mb-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-2xl animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 hover:text-yellow-300 transition-colors duration-300">Why Volunteer With Us?</h3>
              <p className="text-xl text-blue-100 hover:text-white transition-colors duration-300">
                Volunteering with FilipinOrg offers more than just giving back – it's about growing together as a community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 group">
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-400 rounded-full p-2 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-4 h-4 text-blue-900" />
                    </div>
                    <p className="text-white group-hover:text-yellow-300 transition-colors duration-300 font-medium">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full p-6 w-fit mx-auto mb-8 hover:scale-110 transition-transform duration-300 shadow-lg">
            <Users className="w-16 h-16 text-blue-900" />
          </div>
          
          <h3 className="text-4xl font-bold text-gray-900 mb-6 hover:text-blue-600 transition-colors duration-300">
            Ready to Make a Difference?
          </h3>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed hover:text-gray-700 transition-colors duration-300">
            Join our team of dedicated volunteers and help us continue building a stronger, more connected Filipino community. 
            Your journey starts with a simple click.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleVolunteerSignup}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center group shadow-lg transform hover:scale-105 hover:shadow-2xl"
            >
              Apply to Volunteer
              <ExternalLink className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <div className="text-gray-500 text-sm">
              <MapPin className="w-4 h-4 inline mr-2" />
              Application takes less than 5 minutes
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Questions about volunteering?</strong> Contact our Volunteer Coordinator at 
              <span className="text-blue-600 font-semibold"> volunteers@filipinorg.com</span> or call 
              <span className="text-blue-600 font-semibold"> (555) 123-4567</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
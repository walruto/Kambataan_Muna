import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const Programs = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const programs = [
    {
      title: "Filipino Language Classes",
      description: "Learn Tagalog and connect with your heritage through interactive lessons",
      schedule: "Every Saturday, 10:00 AM - 12:00 PM",
      location: "Community Center Room A",
      category: "Education"
    },
    {
      title: "Cultural Dance Workshop",
      description: "Traditional Filipino dance lessons for all ages and skill levels",
      schedule: "Fridays, 6:00 PM - 8:00 PM",
      location: "Main Hall",
      category: "Culture"
    },
    {
      title: "Youth Leadership Program",
      description: "Empowering young Filipino-Americans to become community leaders",
      schedule: "Monthly meetups",
      location: "Youth Center",
      category: "Youth"
    },
    {
      title: "Senior Support Group",
      description: "Community and support for Filipino seniors and their families",
      schedule: "Wednesdays, 2:00 PM - 4:00 PM",
      location: "Community Lounge",
      category: "Community"
    }
  ];

  const upcomingEvents = [
    {
      date: "Feb 15",
      title: "Barrio Fiesta Preparation",
      time: "6:00 PM"
    },
    {
      date: "Feb 20",
      title: "Cooking Workshop: Adobo & Lumpia",
      time: "5:30 PM"
    },
    {
      date: "Feb 25",
      title: "Filipino History Month Celebration",
      time: "3:00 PM"
    },
    {
      date: "Mar 1",
      title: "Scholarship Application Deadline",
      time: "All Day"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Programs</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to strengthen Filipino communities and preserve our rich cultural heritage.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programs List */}
          <div className="lg:col-span-2 space-y-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h4>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {program.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-red-600" />
                    <span>{program.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                    <div className="font-semibold text-gray-900">{event.title}</div>
                    <div className="text-sm text-gray-600">{event.date} • {event.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-600 rounded-xl p-6 text-white text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">Join Our Programs</h3>
              <p className="text-red-100 mb-4">
                Ready to get involved? Contact us to learn more about our programs.
              </p>
              <button className="bg-yellow-400 text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
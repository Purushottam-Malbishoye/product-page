import React from 'react';
import { ArrowRight, Briefcase, Users, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

interface CareerProps {
  onCareersClick?: () => void;
}

const Career = ({ onCareersClick }: CareerProps) => {
  return (
    <section id="career" className="pt-8 pb-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-300">
            We're looking for passionate individuals who want to shape the future of technology. Join us in building tomorrow's intelligent systems.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-center text-white mb-12">
          <div className="max-w-3xl mx-auto">
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-blue-100" />
            <h3 className="text-3xl font-bold mb-4">35+ Open Positions</h3>
            <p className="text-xl mb-4 text-blue-100">
              We're actively hiring across multiple departments and locations
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8 text-blue-100">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">Machine Learning & AI</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">Product & Sales</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">Engineering & Operations</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-blue-100">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Bhubaneswar</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Bangalore</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Mumbai</span>
              </div>
            </div>

            <button
              onClick={onCareersClick}
              className="inline-flex items-center bg-gray-900 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl group"
            >
              View All Open Positions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div id="contact" className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Career;

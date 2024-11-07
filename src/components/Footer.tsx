import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const Footer = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center">
          <button
            onClick={() => setShowCalendly(true)}
            className="flex items-center space-x-2 text-cyan-600 hover:text-cyan-500"
          >
            <Calendar className="h-5 w-5" />
            <span>Make a free AI consulting</span>
          </button>
        </div>

        {showCalendly && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg w-full max-w-4xl">
              <div className="calendly-inline-widget" data-url="https://calendly.com/haiphongaiagency/30min" style={{ minWidth: '320px', height: '700px' }}></div>
              <button
                onClick={() => setShowCalendly(false)}
                className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
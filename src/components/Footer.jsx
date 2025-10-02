import { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicyModal';
import TermsOfService from './TermsOfServiceModal';

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <>
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clinic Info */}
            <div className="md:col-span-2">
              <h3 className="font-serif text-xl font-bold text-white mb-4">Natural Life Acupuncture</h3>
              <address className="not-italic space-y-2">
                <p>143-26 41st Ave, Flushing NY 11355</p>
                <p className="mt-4">
                  <a href="tel:+17188889512" className="hover:text-cyan-400">
                    +1 (718) 888-9512
                  </a>
                </p>
                <p>
                  <a href="mailto:info@acuflushing.com" className="hover:text-cyan-400">
                    acupuncture41ave@gmail.com
                  </a>
                </p>
              </address>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-serif text-xl font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setShowPrivacyModal(true)}
                    className="hover:text-cyan-400 text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowTermsModal(true)}
                    className="hover:text-cyan-400 text-left"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Natural Life Acupuncture. All rights reserved.</p>
            <p className="mt-2 text-gray-500">
              This is an informational website only. No medical services are booked through this site.
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-serif text-2xl font-bold">Privacy Policy</h2>
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <PrivacyPolicy />
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-serif text-2xl font-bold">Terms of Service</h2>
                <button 
                  onClick={() => setShowTermsModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <TermsOfService />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
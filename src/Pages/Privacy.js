import React from "react";
import Accordion from "../components/Accordion";

function Privacy() {
   

    
      return (
        <section id="privacy" className="flex justify-center items-center py-12 bg-gray-50">

          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Privacy Policy
            </h2>
    
            <div className="space-y-6 text-center">
              {/* Data */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Data</h3>
                <p className="text-gray-600 text-sm">
                  Collects username, password, role, and investments under UAE laws.
                </p>
              </div>
    
              {/* Usage */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Usage</h3>
                <p className="text-gray-600 text-sm">
                  Used for services and compliance, stored securely.
                </p>
              </div>
    
              {/* Rights */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Rights</h3>
                <p className="text-gray-600 text-sm">
                  Request data changes at{" "}
                  <a
                    href="mailto:support@crowdfunding.ae"
                    className="text-yellow-600 underline"
                  >
                    support@crowdfunding.ae
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    }
    
  
    

export default Privacy;

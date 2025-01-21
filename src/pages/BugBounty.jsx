import React from 'react';
import { Bug, Shield, Award, AlertTriangle } from 'lucide-react';

const BugBounty = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Bug Bounty Program</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Help us improve our security by finding and reporting vulnerabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg">
              <Bug className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Report Vulnerabilities</h3>
              <p className="text-gray-400">
                Submit detailed reports of security vulnerabilities you discover in our systems.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <Award className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Get Rewarded</h3>
              <p className="text-gray-400">
                Earn rewards based on the severity and impact of reported vulnerabilities.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <Shield className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Improve Security</h3>
              <p className="text-gray-400">
                Help us maintain and enhance the security of our systems and protect our users.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mr-2" />
              <h3 className="text-2xl font-bold">Submission Guidelines</h3>
            </div>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Provide detailed steps to reproduce the vulnerability</li>
              <li>Include proof of concept when applicable</li>
              <li>Document potential impact and severity</li>
              <li>Follow responsible disclosure practices</li>
              <li>Do not perform testing that could harm systems or data</li>
              <li>Report findings through our secure submission platform</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BugBounty;
import { Globe, Heart, Users } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-earth text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-hope to-trust rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">End Hunger Forever</span>
            </div>
            <p className="text-gray-300 text-sm">
              The first systematic approach to permanently eliminate world hunger through 
              sustainable subscription funding.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">The Mission</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>How It Works</li>
              <li>Global Impact</li>
              <li>City Network</li>
              <li>Transparency Reports</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Subscribe</li>
              <li>Corporate Partnerships</li>
              <li>Volunteer</li>
              <li>Spread the Word</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Contact Us</li>
              <li>Press Inquiries</li>
              <li>Support</li>
              <li>Updates</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-nourish" />
                <span>Made with purpose</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-hope" />
                <span>For all humanity</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              © 2024 End Hunger Forever. Together, we can solve this.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
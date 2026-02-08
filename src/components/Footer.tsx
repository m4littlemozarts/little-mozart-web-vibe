import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import conductorBear from "@/assets/conductor-bear.png";

const Footer = () => {
  return (
    <footer className="bg-paper border-t-2 border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={conductorBear}
                alt="Conductor Bear mascot for preschool music lessons in Reno, NV."
                className="w-10 h-10 object-contain"
              />
              <span className="font-heading font-bold text-foreground">
                Music for Little Mozarts
              </span>
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Beloved early music education program taught at the Steinway Piano Gallery of Reno, NV for over 15 years.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-center">
            <h4 className="font-heading font-semibold text-foreground mb-4 pt-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-body text-muted-foreground hover:text-golden transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/program" className="font-body text-muted-foreground hover:text-golden transition-colors text-sm">
                  About the Program
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="font-body text-muted-foreground hover:text-golden transition-colors text-sm">
                  Meet Our Teachers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-body text-muted-foreground hover:text-golden transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 pt-2">
              Visit Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-golden mt-0.5 flex-shrink-0" />
                <p className="font-body text-muted-foreground text-sm">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=500+E+Moana+Ln,+Reno,+NV+89502" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline hover:text-golden transition-colors"
                  >
                    Steinway Piano Gallery of Reno, NV
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-golden flex-shrink-0" />
                <a 
                  href="mailto:m4littlemozarts@gmail.com" 
                  className="font-body text-muted-foreground hover:text-golden transition-colors text-sm"
                >
                  m4littlemozarts@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="font-body text-muted-foreground text-sm">
            Made with ♪ in Reno, Nevada.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
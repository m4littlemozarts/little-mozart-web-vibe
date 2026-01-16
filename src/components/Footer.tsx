import { Link } from "react-router-dom";
import { Music, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-paper border-t-2 border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-golden flex items-center justify-center">
                <Music className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-foreground">
                Music for Little Mozart
              </span>
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Nurturing young musicians through joyful, age-appropriate music education 
              at Steinway Gallery in Reno, Nevada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
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
                <Link to="/instructors" className="font-body text-muted-foreground hover:text-golden transition-colors text-sm">
                  Meet Our Instructors
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
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Visit Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-golden mt-0.5 flex-shrink-0" />
                <p className="font-body text-muted-foreground text-sm">
                  Steinway Gallery<br />
                  Reno, Nevada
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-golden flex-shrink-0" />
                <a 
                  href="mailto:info@littlemozart.com" 
                  className="font-body text-muted-foreground hover:text-golden transition-colors text-sm"
                >
                  info@littlemozart.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="font-body text-muted-foreground text-sm">
            © {new Date().getFullYear()} Music for Little Mozart. Made with ♪ in Reno, Nevada.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import DecorativeDivider from "@/components/DecorativeDivider";
import MusicNote from "@/components/MusicNote";
import StudioMap from "@/components/StudioMap";
import SEO from "@/components/SEO";
import { Heart, MapPin } from "lucide-react";
import mmbb from "@/assets/mmbb.png";
import groupCharacters from "@/assets/group-characters.png";

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "MusicSchool",
    "name": "Music for Little Mozarts",
    "image": "https://music4littlemozarts.com/favicon-bear.png",
    "@id": "https://music4littlemozarts.com",
    "url": "https://music4littlemozarts.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "500 E Moana Ln",
      "addressLocality": "Reno",
      "addressRegion": "NV",
      "postalCode": "89502",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.4925,
      "longitude": -119.7909
    },
    "description": "Early childhood music education and piano lessons for preschoolers aged 4-5 in Reno, Nevada.",
    "email": "m4littlemozarts@gmail.com",
    "priceRange": "$$"
  };

  return (
    <Layout>
      <SEO 
        title="Piano Lessons for Kids in Reno | Preschool Music Classes | Music for Little Mozarts"
        description="Group piano lessons for ages 4-5 in Reno, NV. Music for Little Mozarts curriculum combines singing, dancing, and piano. Located at 500 E Moana Ln. Enroll now!"
        schema={homeSchema}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="section-container text-center py-16 sm:py-24">
          {/* Floating musical notes decoration */}
          <div className="absolute top-10 left-10 opacity-10">
            <MusicNote className="w-12 h-16 text-golden animate-float" />
          </div>
          <div className="absolute top-20 right-16 opacity-10">
            <MusicNote variant="eighth" className="w-8 h-16 text-dusty-rose animate-float" style={{
            animationDelay: "1s"
          }} />
          </div>
          <div className="absolute bottom-20 left-20 opacity-10">
            <MusicNote variant="bass" className="w-10 h-10 text-sage animate-float" style={{
            animationDelay: "2s"
          }} />
          </div>

          {/* Mozart Mouse and Beethoven Bear hero image */}
          <div className="mb-8 flex justify-center">
          <img
            src={mmbb}
            alt="Beethoven Bear teaching preschoolers piano in Reno, NV."
            className="w-56 h-auto sm:w-72"
          />
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in">Music for Little Mozarts</h1>
          
          <p className="font-heading text-xl sm:text-2xl text-muted-foreground mb-8 italic animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>A Piano Course to Bring Out the Music in Every Young Child</p>

          <DecorativeDivider className="my-8" />

          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <p className="font-body text-lg text-foreground leading-relaxed">In Music for Little Mozarts Class, parents and children have the opportunity to share in the joy of making music together.</p>
            
            <p className="font-body text-foreground leading-relaxed">Each week, we sing, dance, listen and play at the piano in a class designed for preschool aged students (ages 4-5). Along the way, students intuitively learn the language of music and build a lifelong connection to the arts.</p>

            {/* Group characters image */}
            <div className="flex justify-center py-4">
              <img
                src={groupCharacters}
                alt="Music for Little Mozarts character friends for group piano lessons."
                className="w-full max-w-md h-auto"
              />
            </div>

            <p className="font-body text-foreground leading-relaxed">Starting music class early builds on the pre-school age child's sense of fantasy (learning piano with music friends Mozart Mouse and Beethoven Bear), their ear's ability to absorb musical pitches, rhythms, musical patterns, and their enthusiasm for learning new things.</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <Link to="/program" className="btn-primary inline-flex items-center justify-center gap-2">
              <Heart className="w-4 h-4" />
              Discover Our Program
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Get in Touch
            </Link>
          </div>

          {/* Map Section */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="font-body text-muted-foreground text-center mb-4">
              Classes are held at the Music for Little Mozarts Studio inside the Steinway Piano Gallery of Reno, Nevada.
            </p>
            <div className="rounded-lg overflow-hidden shadow-md max-w-xl mx-auto">
              <StudioMap />
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=500+E+Moana+Ln,+Reno,+NV+89502" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-body text-base text-muted-foreground text-center mt-2 block underline hover:text-golden hover:underline transition-colors"
            >
              500 E Moana Ln, Reno, NV 89502
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
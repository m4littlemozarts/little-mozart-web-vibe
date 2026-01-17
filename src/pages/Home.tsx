import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import DecorativeDivider from "@/components/DecorativeDivider";
import MusicNote from "@/components/MusicNote";
import { Heart, Users, MapPin, Music } from "lucide-react";
import mozartMouseBear from "@/assets/mozart-mouse-bear.png";
import groupCharacters from "@/assets/group-characters.png";

const Home = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="section-container text-center py-16 sm:py-24">
          {/* Floating musical notes decoration */}
          <div className="absolute top-10 left-10 opacity-10">
            <MusicNote className="w-12 h-16 text-golden animate-float" />
          </div>
          <div className="absolute top-20 right-16 opacity-10">
            <MusicNote variant="treble" className="w-8 h-16 text-dusty-rose animate-float" style={{
            animationDelay: "1s"
          }} />
          </div>
          <div className="absolute bottom-20 left-20 opacity-10">
            <MusicNote variant="bass" className="w-10 h-10 text-sage animate-float" style={{
            animationDelay: "2s"
          }} />
          </div>

          {/* Mozart Mouse and Bear illustration */}
          <div className="mb-8 flex justify-center">
            <img 
              src={mozartMouseBear} 
              alt="Mozart Mouse and Beethoven Bear with magical music book" 
              className="w-64 sm:w-80 h-auto"
            />
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in">Music for Little Mozarts</h1>
          
          <p className="font-heading text-xl sm:text-2xl text-muted-foreground mb-8 italic animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            Where young musicians begin their musical journey
          </p>

          <DecorativeDivider className="my-8" />

          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <p className="font-body text-lg text-foreground leading-relaxed">In Music for Little Mozarts Class, parents and children have the opportunity to share in the joy of making music together.</p>
            
            <p className="font-body text-foreground leading-relaxed">Starting music class early builds on the pre-school age child's sense of fantasy (learning piano with music friends Mozart Mouse and Beethoven Bear), their ear's ability to absorb musical pitches, rhythms, musical patterns, and their enthusiasm for learning new things. Using the <em>Music for Little Mozarts</em> curriculum, we guide 
              young learners ages 4-6 through a joyful introduction to piano, music 
              fundamentals, and creative expression. Classes are held at the beautiful 
              Steinway Gallery in Reno, Nevada.
            </p>
          </div>

          {/* Group characters illustration */}
          <div className="my-8 flex justify-center animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <img 
              src={groupCharacters} 
              alt="Music for Little Mozarts characters - the whole musical gang" 
              className="w-72 sm:w-96 h-auto"
            />
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
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-paper border-y-2 border-border">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Age Group */}
            <div className="paper-card text-center">
              <div className="w-14 h-14 rounded-full bg-dusty-rose/30 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-dusty-rose" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Ages 4-6
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                Carefully designed for the developmental needs and attention spans of preschool children.
              </p>
            </div>

            {/* Approach */}
            <div className="paper-card text-center">
              <div className="w-14 h-14 rounded-full bg-sage/30 flex items-center justify-center mx-auto mb-4">
                <Music className="w-7 h-7 text-sage" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Playful Learning
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                Songs, games, and stories bring music to life in ways young children naturally understand.
              </p>
            </div>

            {/* Location */}
            <div className="paper-card text-center">
              <div className="w-14 h-14 rounded-full bg-golden/30 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-golden" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Steinway Gallery
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                Learn in a beautiful, inspiring space surrounded by world-class instruments in Reno, Nevada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="section-heading">Ready to Begin?</h2>
          <div className="section-heading-underline mx-auto" />
          <p className="font-body text-muted-foreground mb-8">
            We'd love to welcome your little one to our music family. 
            Reach out to learn about our upcoming class schedule and enrollment.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Contact Us Today
          </Link>
        </div>
      </section>
    </Layout>;
};
export default Home;
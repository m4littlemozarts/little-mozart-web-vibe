import Layout from "@/components/Layout";
import DecorativeDivider from "@/components/DecorativeDivider";
import MusicNote from "@/components/MusicNote";
import { BookOpen, Music2, Sparkles, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Program = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-container text-center">
        <h1 className="section-heading text-4xl sm:text-5xl">About Our Program</h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mt-7">
          The Music for Little Mozarts curriculum is a carefully crafted journey 
          into the world of music, designed specifically for young children.
        </p>
      </section>

      <DecorativeDivider className="mb-4" />

      {/* Curriculum Overview */}
      <section className="section-container pt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              The Little Mozarts Curriculum
            </h2>
            <div className="space-y-4">
              <p className="font-body text-foreground leading-relaxed">
                The Music for little Mozarts Program guides students through the fundamentals of piano and music by interweaving sight reading and singing, rhythmic recall, and piano technique with play, dance and exploration. Friendly characters such as Beethoven Bear and Mozart Mouse anchor student's learning through story based adventure.
              </p>
              <p className="font-body text-foreground leading-relaxed">
                The Music for Little Mozarts curriculum was developed by Christine H. Barden, the director here at the Reno Steinway Piano Gallery. She is the composer and mastermind behind the program. First published in 1998, Music for little Mozarts classes are taught across the country and abroad. The organic longevity of the program is a testament to its effectiveness and the joy it brings students, parents and teachers.
              </p>
            </div>
          </div>
          
          {/* Placeholder for character illustration */}
          <div className="relative">
            <div className="bg-cream rounded-lg border-2 border-border p-8 text-center">
              <div className="w-full aspect-square max-w-xs mx-auto bg-paper rounded-lg border-2 border-dashed border-golden/50 flex items-center justify-center">
                <div className="text-center p-4">
                  <Music2 className="w-16 h-16 text-golden mx-auto mb-3" />
                  <p className="font-heading text-sm text-muted-foreground">
                    Little Mozart Character<br />Illustration Placeholder
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative note */}
            <div className="absolute -top-4 -right-4 opacity-20">
              <MusicNote className="w-10 h-14 text-golden" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-paper border-y-2 border-border">
        <div className="section-container">
          <h2 className="section-heading text-center">Benefits of Early Music Education</h2>
          
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="paper-card flex gap-4">
              <div className="w-12 h-12 rounded-full bg-dusty-rose/30 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-dusty-rose" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Cognitive Development
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  Music training enhances memory, attention, and problem-solving skills 
                  during critical early brain development years.
                </p>
              </div>
            </div>

            <div className="paper-card flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-sage" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Language & Literacy
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  Rhythm and melody recognition strengthens phonemic awareness, 
                  supporting reading readiness.
                </p>
              </div>
            </div>

            <div className="paper-card flex gap-4">
              <div className="w-12 h-12 rounded-full bg-golden/30 flex items-center justify-center flex-shrink-0">
                <Music2 className="w-6 h-6 text-golden" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Motor Skills
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  Piano playing develops fine motor coordination and the connection 
                  between hands, eyes, and ears.
                </p>
              </div>
            </div>

            <div className="paper-card flex gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-dusty-rose" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Confidence & Expression
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  Performing builds self-esteem while music provides a healthy 
                  outlet for emotional expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">What to Expect in Class</h2>
          <div className="section-heading-underline mx-auto" />
          
          <div className="paper-card mt-8">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-golden font-heading font-bold">♪</span>
                <span className="font-body text-foreground">
                  <strong className="font-semibold">Singing and Movement:</strong> Songs 
                  and finger plays that make learning music theory feel like play.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-golden font-heading font-bold">♪</span>
                <span className="font-body text-foreground">
                  <strong className="font-semibold">Rhythm Activities:</strong> Clapping, 
                  tapping, and moving to internalize beat and rhythm patterns.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-golden font-heading font-bold">♪</span>
                <span className="font-body text-foreground">
                  <strong className="font-semibold">Keyboard Exploration:</strong> Gentle 
                  introduction to the piano with age-appropriate technique.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-golden font-heading font-bold">♪</span>
                <span className="font-body text-foreground">
                  <strong className="font-semibold">Ear Training:</strong> Games that develop 
                  the ability to recognize pitches, dynamics, and musical patterns.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-golden font-heading font-bold">♪</span>
                <span className="font-body text-foreground">
                  <strong className="font-semibold">Story Time:</strong> Adventures with 
                  Mozart Mouse and friends that teach musical concepts through narrative.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container text-center pt-0">
        <DecorativeDivider className="mb-10" />
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Ready to enroll your little musician?
        </h2>
        <p className="font-body text-muted-foreground mb-6 max-w-lg mx-auto">
          Contact us to learn about class schedules, pricing, and availability.
        </p>
        <Link to="/contact" className="btn-primary">
          Contact Us
        </Link>
      </section>
    </Layout>
  );
};

export default Program;
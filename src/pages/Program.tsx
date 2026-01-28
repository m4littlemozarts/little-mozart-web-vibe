import Layout from "@/components/Layout";
import DecorativeDivider from "@/components/DecorativeDivider";
import { BookOpen, Brain, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import dancingHippoMouseBear from "@/assets/dancing-hippo-mouse-bear.png";
import penguinWriting from "@/assets/penguin-writing.png";
import mmPlushie from "@/assets/mm-plushie.png";
import bbPlushie from "@/assets/bb-plushie.png";

const Program = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-container text-center pb-0">
        <h1 className="section-heading text-4xl sm:text-5xl">About Our Program</h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          The Music for Little Mozarts curriculum is meticulously orchestrated to bring your child into the world of music.
        </p>
      </section>

      <DecorativeDivider className="mb-8" />

      {/* Curriculum Overview */}
      <section className="section-container pt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              The Little Mozarts Curriculum
            </h2>
            <div className="space-y-4">
              <p className="font-body text-foreground leading-relaxed">
                The Music for Little Mozarts Program guides students through the fundamentals of piano and music by interweaving sight reading and singing, rhythmic recall, and piano technique with play, dance and exploration. Friendly characters such as Beethoven Bear and Mozart Mouse anchor student's learning through story based adventure.
              </p>
              <p className="font-body text-foreground leading-relaxed">
                The Music for Little Mozarts curriculum was developed by Christine H. Barden, Gayle Kowalchyk, and E. L. Lancaster. Christine H. Barden runs the Music for Little Mozarts program here at the Reno Steinway Piano Gallery. First published in 1999, Music for little Mozarts classes are taught across the country and around the world. The organic longevity of the program is a testament to its effectiveness and the joy it brings students, parents and teachers.
              </p>
            </div>
          </div>
          
          {/* Character illustration */}
          <div className="relative flex items-center justify-center">
            <img 
              src={dancingHippoMouseBear} 
              alt="Dancing Hippo, Mouse and Bear characters" 
              className="w-full max-w-sm drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Cohort Program Section */}
      <section className="section-container pt-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Character illustration */}
          <div className="relative flex items-center justify-center">
            <img 
              src={penguinWriting} 
              alt="Penguin writing with a quill" 
              className="w-full max-w-xs drop-shadow-lg"
            />
          </div>

          {/* Text Content (now on the right for md and up) */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Cohort Program
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-body text-foreground leading-relaxed">
                Our program is looking for parents who are invested in their child's education and development. The Music for Little Mozarts program is designed for preschool aged children beginning at the ages of four to five. It lasts approximately two years, covering{" "}
                <a 
                  href="https://www.alfred.com/music-for-little-mozarts/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline hover:text-golden transition-colors"
                >
                  all four book levels
                </a>{" "}
                through weekly 40 minute classes. There are no more than eight students in a class and we progress through the book levels when the students are ready. Kids have the opportunity to make friends, learn and grow in the tight knit community of their cohort.
              </p>
            </div>
            
            {/* New Cohort Announcement */}
            <div className="paper-card text-center py-6 px-4 max-w-md mx-auto">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-golden">
                Our next Music for Little Mozarts Cohort begins March 2026!
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-paper border-y-2 border-border mt-12"> {/* Moved styling here */}
        <div className="section-container">
          <h2 className="section-heading text-center mb-8">What to Expect in Class</h2>
          
          <div className="relative flex items-center justify-center mt-8">
            {/* Mozart Mouse Plushie - Left */}
            <img 
              src={mmPlushie} 
              alt="Mozart Mouse plushie" 
              className="hidden md:block absolute -left-32 lg:-left-40 h-40 lg:h-48 w-auto drop-shadow-lg"
            />
            
            <div className="paper-card">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-golden font-heading font-bold">♪</span>
                  <span className="font-body text-foreground">
                    <strong className="font-semibold">Parental Participation:</strong> Classes are a place for students and parents to explore the joys of music together. Parents join in singing and dancing activities and help keep students on track while learning at the keyboard. No musical background needed, you'll learn everything necessary to support your child's success through the class. Student's will need a keyboard at home.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-golden font-heading font-bold">♪</span>
                  <span className="font-body text-foreground">
                    <strong className="font-semibold">Keyboard Exploration:</strong> Students learn and play fun songs together that progressively build their piano technique. The Music for Little Mozart curriculum has been developing young pianists for over 20 years.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-golden font-heading font-bold">♪</span>
                  <span className="font-body text-foreground">
                    <strong className="font-semibold">Singing, Dancing and Movement Activities:</strong> Fun and energetic musical activities keep students engaged and lay the foundation to develop a deeper understanding of music. Expect to sing, dance and play along.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-golden font-heading font-bold">♪</span>
                  <span className="font-body text-foreground">
                    <strong className="font-semibold">Work Book and Flashcards:</strong> Musical concepts are reinforced with fun coloring exercises and group flash cards. Students build confidence as they recognize and apply musical concepts.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-golden font-heading font-bold">♪</span>
                  <span className="font-body text-foreground">
                    <strong className="font-semibold">Music Friend Helpers:</strong> Classes center on the adventures of the lovable characters Beethoven Bear and Mozart Mouse as they learn about music. Every student loves the plushie music friends that help them learn and practice.
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Beethoven Bear Plushie - Right */}
            <img 
              src={bbPlushie} 
              alt="Beethoven Bear plushie" 
              className="hidden md:block absolute -right-32 lg:-right-40 h-40 lg:h-48 w-auto drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container"> {/* Removed styling from here */}
        <h2 className="section-heading text-center">Benefits of Early Music Education</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="paper-card flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-dusty-rose/30 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-dusty-rose" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Brain Development & Executive Function
              </h3>
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              "Music training has a positive effect on inhibitory control, working memory, and cognitive flexibility in preschool children aged 3–6 years. Children's music training groups showed significantly improved inhibitory control, working memory, and cognitive flexibility in comparison with control groups."
            </p>
            <a 
              href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1522962/full" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-xs text-golden hover:text-golden/80 hover:underline mt-auto"
            >
              Frontiers in Psychology, 2024
            </a>
          </div>

          <div className="paper-card flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Attention & Focus
              </h3>
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              "Rhythmic patterns drive attention focus, and musical elements such as rhythm, melody, and harmony provide multidimensional stimuli that facilitate switching attention. The results indicated significant improvement in attention control following the music intervention."
            </p>
            <a 
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7393235/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-xs text-golden hover:text-golden/80 hover:underline mt-auto"
            >
              Frontiers in Neuroscience, 2020
            </a>
          </div>

          <div className="paper-card flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-golden/30 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-golden" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Language & Reading Skills
              </h3>
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              "The fine-tuning of their auditory pathway could accelerate their development of language and reading, as well as other abilities. Within two years of the study, the neuroscientists found the auditory systems of children in the music program were maturing faster than in the other children."
            </p>
            <a 
              href="https://today.usc.edu/childrens-brains-develop-faster-with-music-training/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-xs text-golden hover:text-golden/80 hover:underline mt-auto"
            >
              USC Brain and Creativity Institute
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container text-center pt-0">
        <DecorativeDivider className="mb-10" />
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Ready to embark on a musical adventure?
        </h2>
        <p className="font-body text-muted-foreground mb-6 max-w-lg mx-auto">
          Contact us to learn more about the program and cohort openings.
        </p>
        <Link to="/contact" className="btn-primary">
          Contact Us
        </Link>
      </section>
    </Layout>
  );
};

export default Program;
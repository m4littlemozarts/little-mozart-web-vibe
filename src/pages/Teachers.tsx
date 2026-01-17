import Layout from "@/components/Layout";
import DecorativeDivider from "@/components/DecorativeDivider";
import { User } from "lucide-react";

interface TeacherProps {
  name: string;
  bio: string;
  youtubeId?: string;
  imageUrl?: string;
}

const TeacherCard = ({ name, bio, youtubeId, imageUrl }: TeacherProps) => {
  return (
    <div className="paper-card">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image and Info */}
        <div>
          {/* Photo placeholder */}
          <div className="w-full aspect-[4/3] bg-paper rounded-lg border-2 border-dashed border-golden/50 flex items-center justify-center mb-4">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={name}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="text-center p-4">
                <User className="w-16 h-16 text-golden mx-auto mb-2" />
                <p className="font-heading text-sm text-muted-foreground">
                  Teacher Photo
                </p>
              </div>
            )}
          </div>
          
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            {name}
          </h3>
          <p className="font-body text-foreground leading-relaxed">
            {bio}
          </p>
        </div>

        {/* YouTube Video Embed */}
        <div>
          {youtubeId ? (
            <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-border bg-cream">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={`${name} - Introduction Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
          ) : (
            <div className="w-full aspect-video rounded-lg bg-paper border-2 border-dashed border-golden/50 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-golden/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-golden" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="font-heading text-sm text-muted-foreground">
                  Introduction Video<br />Coming Soon
                </p>
              </div>
            </div>
          )}
          <p className="font-body text-sm text-muted-foreground mt-2 text-center">
            Watch {name.split(' ')[0]}'s introduction
          </p>
        </div>
      </div>
    </div>
  );
};

const Teachers = () => { // Renamed component
  // Placeholder teacher data - YouTube IDs and photos will be added later
  const teachers: TeacherProps[] = [ // Renamed variable
    {
      name: "Sarah Mitchell",
      bio: "Sarah has been teaching piano to young children for over 15 years. With a Master's degree in Music Education and specialized training in early childhood development, she brings warmth, patience, and creativity to every lesson. Sarah believes that every child is naturally musical—they just need the right environment to flourish.",
      youtubeId: "", // Add YouTube video ID here (e.g., "dQw4w9WgXcQ")
      imageUrl: "", // Add image URL here
    },
    {
      name: "Michael Chen",
      bio: "Michael discovered his passion for teaching while studying piano performance at the San Francisco Conservatory. His gentle approach and ability to connect with young learners has made him a favorite among families. When not teaching, Michael composes children's songs and performs with the local symphony.",
      youtubeId: "", // Add YouTube video ID here
      imageUrl: "", // Add image URL here
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-container text-center">
        <h1 className="section-heading text-4xl sm:text-5xl">Meet Our Teachers</h1> {/* Updated text */}
        <div className="section-heading-underline mx-auto" />
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          Our teachers are passionate educators with specialized training in 
          early childhood music education. They create a nurturing, joyful environment 
          where young musicians can thrive.
        </p>
      </section>

      <DecorativeDivider className="mb-12" />

      {/* Teacher Cards */}
      <section className="section-container pt-0">
        <div className="space-y-12">
          {teachers.map((teacher, index) => ( // Updated variable and component
            <TeacherCard key={index} {...teacher} /> // Updated component
          ))}
        </div>
      </section>

      {/* Note about adding more */}
      <section className="section-container pt-0">
        <div className="bg-cream rounded-lg border-2 border-border p-6 text-center max-w-2xl mx-auto">
          <p className="font-body text-muted-foreground italic">
            More teacher profiles and videos coming soon! Check back for updates 
            or <a href="/contact" className="text-golden hover:underline">contact us</a> to 
            learn more about our teaching team.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Teachers; // Renamed export
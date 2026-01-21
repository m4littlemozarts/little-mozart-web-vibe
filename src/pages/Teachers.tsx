import Layout from "@/components/Layout";
import DecorativeDivider from "@/components/DecorativeDivider";
import { User } from "lucide-react";

interface TeacherProps {
  name: string;
  bio: string;
  imageUrl?: string; // Removed youtubeId as it's no longer used
}

const TeacherCard = ({ name, bio, imageUrl }: TeacherProps) => {
  return (
    <div className="paper-card">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Photo */}
        <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
          <div className="w-full aspect-[4/3] bg-paper rounded-lg border-2 border-dashed border-golden/50 flex items-center justify-center">
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
        </div>
        
        {/* Info */}
        <div className="flex-1">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            {name}
          </h3>
          <p className="font-body text-foreground leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
};

const Teachers = () => {
  const teachers: TeacherProps[] = [
    {
      name: "Christine H. Barden",
      bio: "An internationally recognized authority on early childhood music, Christine H. Barden is the composer of _Music for Little Mozarts_ preschool piano method. As well as teaching Music for Little Mozarts classes, she is a piano teacher in Reno, Nevada, where she teaches numerous prize-winning students in piano and composition. A graduate with a degree in piano performance from San Francisco State University, Christine studied with Vladimir Brenner, piano soloist for the NBC Symphony Orchestra. In addition, she spent four years studying, performing, and teaching in Europe. Christine was one of the first teachers from the United States to study with Yamaha Music Foundation instructors in Japan. She subsequently served as a national staff member with Yamaha for 17 years. Her responsibilities included Director of Curriculum and National Chief Instructor for the Yamaha Music Education System. Christine is a pillar of the Reno music community and has been educating local students for over 15 years.",
      imageUrl: "", // Add image URL here
    },
    {
      name: "Michael Chen",
      bio: "Michael discovered his passion for teaching while studying piano performance at the San Francisco Conservatory. His gentle approach and ability to connect with young learners has made him a favorite among families. When not teaching, Michael composes children's songs and performs with the local symphony.",
      imageUrl: "", // Add image URL here
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-container text-center">
        <h1 className="section-heading text-4xl sm:text-5xl">Meet Our Teachers</h1>
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
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} {...teacher} />
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

export default Teachers;
import Layout from "@/components/Layout";
import DecorativeDivider from "@/components/DecorativeDivider";
import SEO from "@/components/SEO";
import { User } from "lucide-react";
import christineBarden from "@/assets/christine-barden.png";
import michaelBritten from "@/assets/michael-britten.png";

interface TeacherProps {
  name: string;
  bio: string;
  imageUrl?: string;
  imageAlt?: string;
}

const TeacherCard = ({ name, bio, imageUrl, imageAlt }: TeacherProps) => {
  return (
    <div className="paper-card">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Photo */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3 lg:w-1/4">
          {imageUrl ? (
            <div className="w-56 h-56 rounded-full bg-background border-2 border-border shadow-md flex items-center justify-center overflow-hidden">
              <img 
                src={imageUrl} 
                alt={imageAlt || name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-56 h-56 bg-background rounded-full border-2 border-border shadow-md flex items-center justify-center">
              <User className="w-20 h-20 text-golden" />
            </div>
          )}
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
      bio: "An internationally recognized authority on early childhood music, Christine H. Barden is the co-author of the Music for Little Mozarts preschool piano method. As well as teaching Music for Little Mozarts classes, she is a piano teacher in Reno, Nevada, where she teaches numerous prize-winning students in piano and composition. A graduate with a degree in piano performance from San Francisco State University, Christine studied with Vladimir Brenner, piano soloist for the NBC Symphony Orchestra. In addition, she spent four years studying, performing, and teaching in Europe. Christine was one of the first teachers from the United States to study with Yamaha Music Foundation instructors in Japan. She subsequently served as a national staff member with Yamaha for 17 years. Her responsibilities included Director of Curriculum and National Chief Instructor for the Yamaha Music Education System. Christine is a pillar of the Reno music community and has been educating local students here for over 15 years.",
      imageUrl: christineBarden,
      imageAlt: "Christine Barden, early childhood piano specialist at Music for Little Mozarts.",
    },
    {
      name: "Michael Britten",
      bio: "Michael Britten brings a lifelong love of music to the Little Mozarts program. His musical journey spans classical composition, jazz piano performance, and vocal work with local ensembles including the Reno Phil Choir, TOCCATA, and The AJJ Jazz Singers. A recent graduate of the Scorecraft Academy professional composition program with earlier composition training at the San Francisco Conservatory of Music Pre-College program, he combines traditional piano pedagogy with a creative, playful approach to making music. After several years working as a civil engineeer, Michael has returned to his musical roots as a teacher and composer in Reno. He is excited to inspire the next generation of young musicians through the Music for Little Mozarts program.",
      imageUrl: michaelBritten,
      imageAlt: "Michael Britten, preschool piano instructor in Reno.",
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Expert Piano Teachers for Young Children | Music for Little Mozarts Reno"
        description="Meet our piano instructors specializing in early childhood music education. Music for Little Mozarts teachers in Reno, Nevada make learning fun for preschoolers."
      />
      {/* Hero */}
      <section className="section-container text-center pb-8">
        <h1 className="section-heading text-4xl sm:text-5xl">Meet Our Teachers</h1>
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
    </Layout>
  );
};

export default Teachers;
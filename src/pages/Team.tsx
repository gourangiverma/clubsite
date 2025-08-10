import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import teamMember1 from "@/assets/Ruvaifa_image.jpg";
import teamMember2 from "@/assets/Dharani_image.jpeg";
import teamMember3 from "@/assets/Shubham.jpg";
import teamMember4 from "@/assets/Profile - Aryan Sanjot.jpg";
import teamMember5 from "@/assets/gourangi_image.jpg";
import teamMember6 from "@/assets/pranay_image.png";
import teamMember7 from "@/assets/vanshm_image.jpg";
import teamMember8 from "@/assets/anmol_image.jpg";
import teamMember9 from "@/assets/prajyot_image.png";
import teamMember10 from "@/assets/yashmeet_image.jpg";
import teamMember11 from "@/assets/nikhil_image.jpg";
import teamMember12 from "@/assets/agolika_image.png";
import teamMember13 from "@/assets/divyam_image.jpg";


const Team = () => {
  const coordinator1 = {
  name: "Mohammed Ruvaifa",
  role: "Coordinator",
  department: "Engineering Sciencess",
  year: "2nd Year",
  image: teamMember1, // Replace with coordinator image
  bio: "Compiler crashes, me too. Just a techie guy trying to make things work, emotionally if not electrically. I like building projects which has practical uses and can create an impact. Also I love F1 (cars go in circles, fastest car wins)",
  github: "https://github.com/Ruvaifa",
  linkedin: "www.linkedin.com/in/ruvaifa-mohammad-a5648a300",
  email: "mohammad24@iiserb.ac.in"
};
const coordinator2 = {
  name: "Pranay Meshram",
  role: "Coordinator",
  department: "Natural Sciences",
  year: "3rd Year",
  image: teamMember6, // Replace with coordinator image
  bio: "git pushin’ my love for tech",
  github: "https://github.com/praymesh/",
  linkedin: "https://www.linkedin.com/in/pranay-meshramiiserb/",
  email: "pranay23@iiserb.ac.in"
};
const coordinators = [coordinator1, coordinator2];

  const teamMembers = [
    {
      name: "Gourangi Verma",
      role: "Core Committee Member",
      department: "Engineering Sciences",
      year: "2nd Year",
      image: teamMember5,
      bio: "I like math and computer science, and solving problems which require a bit of both. Most of the time, you might find me staring at the screen, trying to make sense of what just happened.",
      github: "https://github.com/gourangiverma",
      linkedin: "https://www.linkedin.com/in/gourangi-verma-b2629b311/",
      email: "gourangi24@iiserb.ac.in"
    },
    {
      name: "Dharani Thota",
      role: "Core Committee Member",
      department: "Engineering Sciences",
      year: "2nd Year",
      image: teamMember2,
      bio: "I'm a tech enthusiast, space freak. Exploring the world is my jam. I never back down from a challenge. Avid anime watcher.",
      github: "https://github.com/idharanithota",
      linkedin: "https://www.linkedin.com/in/dharanithota/",
      email: "thota24@iiserb.ac.in"
    },
    {
      name: "Shubham",
      role: "Core Committee Member",
      department: "Natural Sciences",
      year: "2nd Year",
      image: teamMember3,
      bio: "I'm Shubham, a robotics enthusiast who loves building RC cars with Arduino—next up, a battle-ready robot car.When I'm not wiring circuits, I'm capturing moments through my smartphone.",
      github: "rahulgupta",
      linkedin: "https://www.linkedin.com/in/shubham-b8b3422b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "shubh24@iiserb.ac.in"
    },
    {
      name: "Aryan Sanjot",
      role: "Core Committee Member",
      department: "Engineering Sciences",
      year: "2nd Year",
      image: teamMember4,
      bio: "Hi! I'm Aryan, a curious mind in the domain of technology and physics. I love to mix tech and creativity and always up for learning .",
      github: "https://github.com/iaryan4",
      linkedin: "https://www.linkedin.com/in/aryan-sanjot-81826032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "aryans24@iiserb.ac.in"
    },
    {
      name: "Vansh Mangal",
      role: "Core Committee Member",
      department: "Natural Sciences",
      year: "2nd Year",
      image: teamMember7,
      bio: "I’ve always been curious about science, especially astronomy and philosophy, and I find tech fascinating for how seamlessly it integrates into everything around us.",
      github: "rahulgupta",
      linkedin: "linkedin.com/in/vanshmangal",
      email: "vanshm24@iiserb.ac.in"
    },
    {
      name: "Prajyot Nula",
      role: "Core Committee Member",
      department: "Engineering Sciences",
      year: "2nd Year",
      image: teamMember9,
      bio: "Hey this is Prajyot Nula, a robotics enthusiast who also enjoys machine learning and computer vision.",
      github: "https://github.com/thymeprn",
      linkedin: "linkedin.com/in/prajyot-nula",
      email: "prajyot24@iiserb.ac.in"
    },
    {
      name: "Nikhil Vashisht",
      role: "Core Committee Member",
      department: "Engineering Sciencess",
      year: "2nd Year",
      image: teamMember11,
      bio: "Hey everyone! I'm fascinated by the big picture – from the fundamental laws of physics to the elegant logic of mathematics. My passion lies in connecting those worlds to the practical magic of computer science and AI",
      github: "https://github.com/nikhilcodes777",
      linkedin: "https://www.linkedin.com/in/nikhil-vashisht-9b4415337",
      email: "nikhilv24@iiserb.ac.in"
    },
    {
      name: "Agolika",
      role: "Core Committee Member",
      department: "Engineering Sciences",
      year: "3rd Year",
      image: teamMember12,
      bio: "ECE by degree, chaos and foodie. I like building stuff, fixing things, and occasionally pretending I know nothing about what’s going on.",
      github: "rahulgupta",
      linkedin: "rahulgupta",
      email: "agolika23@iiserb.ac.in"
    },
    {
      name: "Anmol Agarwal",
      role: "Core Committee Member",
      department: "Engineering Sciences",
      year: "3rd Year",
      image: teamMember8,
      bio: "neural nets make my brain go brr.",
      github: "https://github.com/anm-ol",
      linkedin: "https://www.linkedin.com/in/anmol-agrawal-2a4892250/",
      email: "anmol23@iiserb.ac.in"
    },
    {
      name: "Divyam Sood",
      role: "Core Committee Member",
      department: "Engineering Sciences",
      year: "3rd Year",
      image: teamMember13,
      bio: "A third year EECS major. Likes tinkering with stuff, making grand plans, reading, and watching anime in his free time. Also believes all time is free if you ignore responsibilities well enough.",
      github: "rahulgupta",
      linkedin: "linkedin.com/in/divyam-sood",
      email: "divyam23@iiserb.ac.in"
    },
    {
      name: "Yashmeet",
      role: "Core Committee Member",
      department: "Engineering Sciences",
      year: "2nd Year",
      image: teamMember10,
      bio: "I’m into tech that messes with audio—both the digital and hardware. I love how twisting electrical signals totally changes or shapes the sound, and how analog or digital systems create those wild, unique textures that hit different. and also, i like gaming too.",
      github: "rahulgupta",
      linkedin: "linkedin.com/in/divyam-sood",
      email: "yashmeet24@iiserb.ac.in"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate individuals behind EECS Club who make everything possible.
          </p>
        </div>

        {/* Team Grid */}
        {/* Coordinators Section */}
      <h2 className="text-3xl font-bold text-center mb-8 mt-12 text-foreground">Coordinators</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {coordinators.map((member, index) => (
          <Card key={index} className="bg-card/80 backdrop-blur-sm border-border card-hover group">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="relative mx-auto w-32 h-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-2 border-primary/20 group-hover:border-primary/60 transition-colors"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.department} • {member.year}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <a
                    href={member.github.startsWith('http') ? member.github : `https://${member.github.includes('github.com') ? member.github : `github.com/${member.github}`}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="ghost" className="p-2 h-auto">
                      <Github className="w-4 h-4" />
                    </Button>
                  </a>
                  <a
                    href={member.linkedin.startsWith('http') ? member.linkedin : `https://linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="ghost" className="p-2 h-auto">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </a>
                  <a href={`mailto:${member.email}`}>
                    <Button size="sm" variant="ghost" className="p-2 h-auto">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Core Committee Section */}
      <h2 className="text-3xl font-bold text-center mb-8 mt-12 text-foreground">Core Committee Members</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-card/80 backdrop-blur-sm border-border card-hover group">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Profile Image */}
                <div className="relative mx-auto w-32 h-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-2 border-primary/20 group-hover:border-primary/60 transition-colors"
                  />
                </div>
                {/* Member Info */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.department} • {member.year}
                  </p>
                </div>
                {/* Bio */}
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {member.bio}
                </p>
                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-2">
                  {/* GitHub */}
                  <a
                    href={member.github.startsWith('http') ? member.github : `https://${member.github.includes('github.com') ? member.github : `github.com/${member.github}`}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="ghost" className="p-2 h-auto">
                      <Github className="w-4 h-4" />
                    </Button>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href={member.linkedin.startsWith('http') ? member.linkedin : `https://linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="ghost" className="p-2 h-auto">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </a>
                  {/* Email */}
                  <a href={`mailto:${member.email}`}>
                    <Button size="sm" variant="ghost" className="p-2 h-auto">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-card/80 backdrop-blur-sm border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Want to Join Our Team?
              </h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate individuals who want to contribute 
                to our mission of fostering innovation in technology.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
                <a href="/join">View All Team Members →</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import teamMember1 from "@/assets/Ruvaifa_image.jpg";
import teamMember2 from "@/assets/Dharani_image.jpeg";
import teamMember3 from "@/assets/Shubham.jpg";
import teamMember4 from "@/assets/Profile - Aryan Sanjot.jpg";

const Team = () => {
  const coordinator1 = {
  name: "Mohammed Ruvaifa",
  role: "Coordinator",
  department: "Engineering Science",
  year: "2nd Year",
  image: teamMember1, // Replace with coordinator image
  bio: "Compiler crashes, me too. Just a techie guy trying to make things work, emotionally if not electrically. I like building projects which has practical uses and can create an impact. Also I love F1 (cars go in circles, fastest car wins)",
  github: "https://github.com/Ruvaifa",
  linkedin: "www.linkedin.com/in/ruvaifa-mohammad-a5648a300",
  email: "mohammad24@iiserb.ac.in"
};
const coordinator2 = {
  name: "B. Coordinator",
  role: "Coordinator",
  department: "Natural Sciences",
  year: "3rd Year",
  image: teamMember2, // Replace with coordinator image
  bio: "Co-lead of the EECS Club. Loves organizing and mentoring.",
  github: "https://github.com/coordinator2",
  linkedin: "https://linkedin.com/in/coordinator2",
  email: "coordinator2@iiserb.ac.in"
};
const coordinators = [coordinator1, coordinator2];

  const teamMembers = [
    {
      name: "Gourangi Verma",
      role: "Core Committee Member",
      department: "Engineering Science",
      year: "2th Year",
      image: teamMember1,
      bio: "I like math and computer science, and solving problems which require a bit of both. Most of the time, you might find me staring at the screen, trying to make sense of what just happened. When I'm not struggling with a problem, I'm probably watching anime or playing videogames.",
      github: "github.com/gourangiverma",
      linkedin: "https://www.linkedin.com/in/gourangi-verma-b2629b311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "gourangi24@iiserb.ac.in"
    },
    {
      name: "Dharani Thota",
      role: "Core Committee Member",
      department: "Engineering Science",
      year: "2nd Year",
      image: teamMember2,
      bio: "I'm a tech enthusiast, space freak. Exploring the world is my jam. I never back down from a challenge. Avid anime watcher.",
      github: "https://github.com/idharanithota",
      linkedin: "https://www.linkedin.com/in/dharanithota/",
      email: "thota24@iiserb.ac.in"
    },
    {
      name: "Shubham ",
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
      department: "Engineering Science",
      year: "2nd Year",
      image: teamMember4,
      bio: "Hi! I'm Aryan, a curious mind in the domain of technology and physics. I love to mix tech and creativity and always up for learning .",
      github: "https://github.com/iaryan4",
      linkedin: "https://www.linkedin.com/in/aryan-sanjot-81826032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "aryans24@iiserb.ac.in"
    },
    {
      name: "Aryan Sanjot",
      role: "Core Committee Member",
      department: "Engineering Science",
      year: "2nd Year",
      image: teamMember4,
      bio: "Hi! I'm Aryan, a curious mind in the domain of technology and physics. I love to mix tech and creativity and always up for learning .",
      github: "https://github.com/iaryan4",
      linkedin: "https://www.linkedin.com/in/aryan-sanjot-81826032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "aryans24@iiserb.ac.in"
    },
    {
      name: "Aryan Sanjot",
      role: "Core Committee Member",
      department: "Engineering Science",
      year: "2nd Year",
      image: teamMember4,
      bio: "Hi! I'm Aryan, a curious mind in the domain of technology and physics. I love to mix tech and creativity and always up for learning .",
      github: "https://github.com/iaryan4",
      linkedin: "https://www.linkedin.com/in/aryan-sanjot-81826032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "aryans24@iiserb.ac.in"
    },
    {
      name: "Aryan Sanjot",
      role: "Core Committee Member",
      department: "Engineering Science",
      year: "2nd Year",
      image: teamMember4,
      bio: "Hi! I'm Aryan, a curious mind in the domain of technology and physics. I love to mix tech and creativity and always up for learning .",
      github: "https://github.com/iaryan4",
      linkedin: "https://www.linkedin.com/in/aryan-sanjot-81826032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "aryans24@iiserb.ac.in"
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
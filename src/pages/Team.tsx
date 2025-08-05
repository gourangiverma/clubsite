import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "President",
      department: "Computer Science",
      year: "4th Year",
      image: teamMember1,
      bio: "Passionate about AI and machine learning. Leading initiatives in deep learning research.",
      github: "arjunsharma",
      linkedin: "arjun-sharma-cs",
      email: "arjun@iiserbhopal.ac.in"
    },
    {
      name: "Priya Patel",
      role: "Vice President",
      department: "Electrical Engineering",
      year: "3rd Year",
      image: teamMember2,
      bio: "Specializes in robotics and IoT systems. Organizes workshops on hardware-software integration.",
      github: "priyapatel",
      linkedin: "priya-patel-ee",
      email: "priya@iiserbhopal.ac.in"
    },
    {
      name: "Rahul Gupta",
      role: "Technical Lead",
      department: "Computer Science",
      year: "3rd Year",
      image: teamMember3,
      bio: "Full-stack developer with expertise in web technologies and cloud computing.",
      github: "rahulgupta",
      linkedin: "rahul-gupta-dev",
      email: "rahul@iiserbhopal.ac.in"
    },
    {
      name: "Sneha Singh",
      role: "Events Coordinator",
      department: "Computer Science",
      year: "2nd Year",
      image: teamMember4,
      bio: "Enthusiastic about competitive programming and organizing hackathons.",
      github: "snehasingh",
      linkedin: "sneha-singh-cp",
      email: "sneha@iiserbhopal.ac.in"
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
                    <Button size="sm" variant="ghost" className="p-2 h-auto">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 h-auto">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 h-auto">
                      <Mail className="w-4 h-4" />
                    </Button>
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
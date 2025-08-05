import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code, Users, Target, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We encourage creative thinking and problem-solving through hands-on projects and collaborative workshops."
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Develop expertise in programming, electronics, machine learning, and other cutting-edge technologies."
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded peers, mentors, and industry professionals in a supportive learning environment."
    }
  ];

  const activities = [
    "Organize workshops and training sessions",
    "Host hackathons and coding competitions",
    "Develop collaborative projects",
    "Connect with industry experts",
    "Provide mentorship and resources"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">EECS Club</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fostering innovation and technical excellence at IISER Bhopal since 2020.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create a vibrant community of tech enthusiasts who collaborate, learn, and build 
                  innovative solutions to real-world problems.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">What We Do</h3>
                  <div className="space-y-3">
                    {activities.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image placeholder - using a tech workspace concept */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Students collaborating on tech projects"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
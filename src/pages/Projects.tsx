import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  
  const filters = ["All Projects", "AI & ML", "Web Development", "IoT & Hardware", "Robotics"];
  
  const projects = [
    {
      title: "Neural Style Transfer",
      description: "An implementation of neural style transfer algorithm that applies the style of one image to the content of another using convolutional neural networks.",
      category: "AI & ML",
      technologies: ["AI", "Python", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      links: {
        code: "#",
        demo: "#"
      }
    },
    {
      title: "Smart Home Automation",
      description: "A comprehensive IoT solution for home automation using Arduino, sensors, and a mobile app for remote control of lights, temperature, and security systems.",
      category: "IoT & Hardware", 
      technologies: ["IoT", "Arduino", "MQTT"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13",
      links: {
        code: "#",
        documentation: "#"
      }
    },
    {
      title: "Campus Resource Tracker",
      description: "A web application that helps students track and book campus resources like labs, equipment, and study rooms in real-time with user authentication.",
      category: "Web Development",
      technologies: ["Web", "React", "Firebase"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      links: {
        code: "#",
        demo: "#"
      }
    },
    {
      title: "Autonomous Line Following Robot",
      description: "A robotics project featuring computer vision-based navigation using cameras and sensors for autonomous movement and obstacle detection.",
      category: "Robotics",
      technologies: ["Robotics", "ROS", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      links: {
        code: "#"
      }
    },
    {
      title: "Natural Language Processing Tool",
      description: "An advanced NLP toolkit for text analysis including sentiment analysis, entity recognition, and language translation capabilities.",
      category: "AI & ML",
      technologies: ["AI", "NLP", "Python"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      links: {
        code: "#",
        documentation: "#"
      }
    },
    {
      title: "Real-time Chat Application",
      description: "A modern web-based chat application with real-time messaging, file sharing, and video calling features using WebSocket technology.",
      category: "Web Development",
      technologies: ["Web", "Node.js", "WebSockets"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      links: {
        code: "#",
        demo: "#"
      }
    }
  ];

  const filteredProjects = activeFilter === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the innovative projects developed by our club members.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter 
                ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                : "border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/60"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border card-hover overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Project Info */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    {project.links.code && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.links.documentation && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <FileText className="w-4 h-4 mr-2" />
                        Documentation
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
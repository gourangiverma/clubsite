import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Electrical</span><br />
                  <span className="text-foreground">Engineering</span><br />
                  <span className="gradient-text">Club</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Power the Future. Design Circuits. Engineer Tomorrow.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                >
                  <Link to="/join">Join the Club</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link to="/projects">View Projects</Link>
                </Button>
              </div>
            </div>

            {/* Next Event Card */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-border card-hover">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Next Event</h3>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-foreground">
                        PCB Design Workshop
                      </h4>
                      <p className="text-muted-foreground">
                        Learn circuit design principles and create your first printed circuit board from scratch!
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>July 5, 2025 • 4:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>Computer Lab 3, IISER Bhopal</span>
                        </div>
                      </div>
                      
                      <Button 
                        size="sm" 
                        className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      >
                        Register Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
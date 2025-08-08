import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Calendar, MapPin } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Join = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    rollNumber: "",
    department: "",
    yearOfStudy: "",
    reason: "",
    githubProfile: "",
    linkedinProfile: ""
  });

  const benefits = [
    "Access to workshops, training sessions, and hackathons",
    "Opportunity to work on real-world projects",
    "Mentorship from senior students and faculty",
    "Networking with industry professionals",
    "Certificate of participation for active members"
  ];

  const departments = [
    "Engineering Science",
    "BSMS Natural Sciences"
  ];

  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.rollNumber || !formData.department || !formData.yearOfStudy) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('applications')
        .insert({
          full_name: formData.fullName,
          roll_number: formData.rollNumber,
          department: formData.department,
          year_of_study: formData.yearOfStudy,
          reason: formData.reason || null,
          github_profile: formData.githubProfile || null,
          linkedin_profile: formData.linkedinProfile || null
        });

      if (error) {
        console.error('Error submitting application:', error);
        toast.error("Failed to submit application. Please try again.");
        return;
      }

      toast.success("Application submitted successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        fullName: "",
        rollNumber: "",
        department: "",
        yearOfStudy: "", 
        reason: "",
        githubProfile: "",
        linkedinProfile: ""
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error("Failed to submit application. Please try again.");
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Join <span className="gradient-text">EECS Club</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Become a part of our community and explore the exciting world of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div className="space-y-8">
            {/* Who Can Join */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Who Can Join?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We welcome all IISER Bhopal students who are passionate about technology, 
                  regardless of their department or prior experience.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Benefits of Joining</h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-2">Machine Learning Workshop</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>July 5, 2025 • 4:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Computer Lab 3, IISER Bhopal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Application Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rollNumber">Roll Number *</Label>
                    <Input
                      id="rollNumber"
                      placeholder="e.g., 21MS101"
                      value={formData.rollNumber}
                      onChange={(e) => handleInputChange("rollNumber", e.target.value)}
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Select value={formData.department} onValueChange={(value) => handleInputChange("department", value)}>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select your department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearOfStudy">Year of Study *</Label>
                    <Select value={formData.yearOfStudy} onValueChange={(value) => handleInputChange("yearOfStudy", value)}>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Why do you want to join EECS Club?</Label>
                  <Textarea
                    id="reason"
                    placeholder="Tell us about your interest in technology and what you hope to gain from the club..."
                    value={formData.reason}
                    onChange={(e) => handleInputChange("reason", e.target.value)}
                    className="bg-input border-border min-h-[100px]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="githubProfile">GitHub Profile (Optional)</Label>
                    <Input
                      id="githubProfile"
                      placeholder="https://github.com/username"
                      value={formData.githubProfile}
                      onChange={(e) => handleInputChange("githubProfile", e.target.value)}
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedinProfile">LinkedIn Profile (Optional)</Label>
                    <Input
                      id="linkedinProfile"
                      placeholder="https://linkedin.com/in/username"
                      value={formData.linkedinProfile}
                      onChange={(e) => handleInputChange("linkedinProfile", e.target.value)}
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                  size="lg"
                >
                  Submit Application
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                I agree to receive communications from EECS Club and understand that my data will be used for 
                club membership purposes only.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Join;
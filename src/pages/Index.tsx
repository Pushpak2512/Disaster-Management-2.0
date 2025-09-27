import { Shield, GraduationCap, Activity, Users, Award, BookOpen, Phone, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { DisasterAlert } from "@/components/DisasterAlert";
import { EmergencyChatbot } from "@/components/EmergencyChatbot";
import heroImage from "@/assets/hero-disaster-management.jpg";

const Index = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Interactive Education Modules",
      description: "Learn disaster preparedness through gamified experiences, quizzes, and interactive simulations for earthquakes, floods, and more.",
      color: "bg-primary"
    },
    {
      icon: Activity,
      title: "Virtual Reality Drills",
      description: "Experience realistic disaster scenarios through AR drills and 3D simulations to build muscle memory for emergencies.",
      color: "bg-success"
    },
    {
      icon: Phone,
      title: "Emergency Contact Directory",
      description: "Access essential emergency contacts instantly, even offline. One-tap calling for immediate assistance during disasters.",
      color: "bg-emergency"
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Connect with classmates and administrators during emergencies with live communication tools and evacuation guidance.",
      color: "bg-warning"
    }
  ];

  const achievements = [
    { title: "Flood Response Hero", icon: "🌊", progress: 85 },
    { title: "Earthquake Safety Expert", icon: "🏢", progress: 92 },
    { title: "Fire Safety Champion", icon: "🔥", progress: 78 },
    { title: "Evacuation Leader", icon: "🚶", progress: 95 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Disaster preparedness education" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-emergency text-emergency-foreground px-4 py-2">
                🚨 Emergency Preparedness Platform
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-success to-emergency bg-clip-text text-transparent">
                  EduSafe
                </span>
                <br />
                <span className="text-foreground">Disaster Preparedness Education</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Empowering schools and colleges with interactive disaster education, 
                real-time alerts, and emergency response tools to build a safer, 
                more prepared community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/education">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-success hover:scale-105 transition-transform">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Start Learning
                  </Button>
                </Link>
                <Link to="/emergency-contacts">
                  <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency Contacts
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <DisasterAlert 
                location="Your Area"
                disaster="Cyclone Alert"
                intensity="high"
                distance="12km away"
              />
              <DisasterAlert 
                location="Mumbai, Maharashtra"
                disaster="Heavy Rainfall Warning"
                intensity="moderate"
                distance="5km away"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Why EduSafe Matters</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In India, schools and colleges are often unprepared for natural disasters. 
              Manual drills are infrequent and poorly coordinated, leading to panic and chaos during emergencies. 
              EduSafe bridges this gap with digital tools and structured education to save lives.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">Comprehensive Safety Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From interactive learning to real-time emergency response, 
              EduSafe provides everything needed for disaster preparedness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-l-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold">My Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Track your progress and earn achievements as you master disaster preparedness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">
                      {achievement.progress}%
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-success h-2 rounded-full transition-all duration-300"
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-success/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build a Safer Tomorrow?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students and educators who are making their institutions 
            disaster-ready with EduSafe's comprehensive preparedness platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-success hover:scale-105 transition-transform">
              <Shield className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Chatbot */}
      <EmergencyChatbot />
    </div>
  );
};

export default Index;

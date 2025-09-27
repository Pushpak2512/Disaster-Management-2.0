import { Navigation } from "@/components/Navigation";
import { Search, GraduationCap, Zap, Waves, Wind, Mountain, Flame, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const EducationModules = () => {
  const modules = [
    {
      title: "Earthquake Safety",
      icon: Mountain,
      description: "Learn about earthquake preparedness, safety measures, and response protocols",
      progress: 85,
      difficulty: "Intermediate",
      duration: "45 min",
      color: "bg-primary"
    },
    {
      title: "Flood Management",
      icon: Waves,
      description: "Understanding flood risks, evacuation procedures, and water safety",
      progress: 92,
      difficulty: "Beginner",
      duration: "35 min",
      color: "bg-success"
    },
    {
      title: "Cyclone Preparedness",
      icon: Wind,
      description: "Cyclone tracking, preparation strategies, and shelter protocols",
      progress: 68,
      difficulty: "Advanced",
      duration: "60 min",
      color: "bg-warning"
    },
    {
      title: "Fire Safety",
      icon: Flame,
      description: "Fire prevention, evacuation routes, and emergency response",
      progress: 78,
      difficulty: "Intermediate",
      duration: "40 min",
      color: "bg-emergency"
    },
    {
      title: "Tsunami Awareness",
      icon: Waves,
      description: "Tsunami warnings, evacuation zones, and safety protocols",
      progress: 45,
      difficulty: "Advanced",
      duration: "50 min",
      color: "bg-primary"
    },
    {
      title: "Landslide Safety",
      icon: Mountain,
      description: "Understanding landslide risks and prevention measures",
      progress: 30,
      difficulty: "Intermediate",
      duration: "30 min",
      color: "bg-success"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-4 mb-8">
          <Badge className="bg-primary text-primary-foreground px-4 py-2">
            📚 INTERACTIVE LEARNING
          </Badge>
          <h1 className="text-4xl font-bold">Education Modules</h1>
          <p className="text-lg text-muted-foreground">
            Master disaster preparedness through gamified learning experiences
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for specific disaster modules..." 
                className="pl-10"
                onChange={(e) => {
                  const searchTerm = e.target.value.toLowerCase();
                  // Filter modules based on search term
                  console.log('Searching modules for:', searchTerm);
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-primary">6</CardTitle>
              <CardDescription>Total Modules</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-success">4</CardTitle>
              <CardDescription>Completed</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-warning">2</CardTitle>
              <CardDescription>In Progress</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-emergency">850</CardTitle>
              <CardDescription>Points Earned</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card key={index} className="border-l-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${module.color}`}>
                    <module.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="outline">{module.difficulty}</Badge>
                </div>
                <CardTitle className="text-xl">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>⏱️ {module.duration}</span>
                  <span>🎯 {module.progress > 80 ? 'Mastered' : 'Learning'}</span>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Continue
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trophy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gamified Features */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5" />
                <span>Quiz Challenges</span>
              </CardTitle>
              <CardDescription>
                Test your knowledge with interactive quizzes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-primary to-success">
                Take Quiz Now
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Interactive Simulations</span>
              </CardTitle>
              <CardDescription>
                Practice disaster response in safe virtual environments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Start Simulation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EducationModules;
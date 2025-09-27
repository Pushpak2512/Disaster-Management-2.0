import { Navigation } from "@/components/Navigation";
import { Search, Activity, Eye, Box, Trophy, Users, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VirtualDrills = () => {
  const drills = [
    {
      title: "Earthquake Evacuation Drill",
      type: "AR Drill",
      duration: "15 min",
      difficulty: "Intermediate",
      participants: 1250,
      rating: 4.8,
      icon: Activity,
      color: "bg-primary"
    },
    {
      title: "Fire Emergency Response",
      type: "3D Simulation",
      duration: "20 min",
      difficulty: "Advanced",
      participants: 890,
      rating: 4.9,
      icon: Box,
      color: "bg-emergency"
    },
    {
      title: "Flood Evacuation Training",
      type: "AR Drill",
      duration: "18 min",
      difficulty: "Beginner",
      participants: 2100,
      rating: 4.7,
      icon: Activity,
      color: "bg-success"
    },
    {
      title: "Cyclone Shelter Protocol",
      type: "3D Simulation",
      duration: "25 min",
      difficulty: "Advanced",
      participants: 675,
      rating: 4.6,
      icon: Box,
      color: "bg-warning"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah Johnson", school: "Mumbai Public School", score: 2850, avatar: "👩" },
    { rank: 2, name: "Raj Patel", school: "Delhi Technical College", score: 2720, avatar: "👨" },
    { rank: 3, name: "Priya Sharma", school: "Bangalore University", score: 2680, avatar: "👩" },
    { rank: 4, name: "Alex Kumar", school: "Chennai Institute", score: 2590, avatar: "👨" },
    { rank: 5, name: "Maya Singh", school: "Pune Engineering College", score: 2540, avatar: "👩" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-4 mb-8">
          <Badge className="bg-success text-success-foreground px-4 py-2">
            🥽 VIRTUAL REALITY TRAINING
          </Badge>
          <h1 className="text-4xl font-bold">Virtual Drills</h1>
          <p className="text-lg text-muted-foreground">
            Practice emergency procedures with AR drills and 3D simulations
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search virtual drills by disaster type..." 
                className="pl-10"
                onChange={(e) => {
                  const searchTerm = e.target.value.toLowerCase();
                  // Filter drills based on search term
                  console.log('Searching drills for:', searchTerm);
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="drills" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="drills">Virtual Drills</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>

          <TabsContent value="drills" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-primary">12</CardTitle>
                  <CardDescription>Drills Completed</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-success">4.8</CardTitle>
                  <CardDescription>Average Rating</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-warning">285</CardTitle>
                  <CardDescription>Minutes Practiced</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-emergency">#15</CardTitle>
                  <CardDescription>Global Rank</CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Drills Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {drills.map((drill, index) => (
                <Card key={index} className="border-l-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${drill.color}`}>
                        <drill.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline">{drill.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">{drill.title}</CardTitle>
                    <CardDescription>
                      Difficulty: {drill.difficulty} • {drill.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{drill.participants.toLocaleString()} participants</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        <span>{drill.rating}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1">
                        <Eye className="mr-2 h-4 w-4" />
                        Start Drill
                      </Button>
                      <Button variant="outline" size="icon">
                        <Trophy className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Drill Types */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5" />
                    <span>AR Drills</span>
                  </CardTitle>
                  <CardDescription>
                    Augmented reality drills using your device camera
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-primary to-success">
                    <Eye className="mr-2 h-4 w-4" />
                    Start AR Experience
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Box className="h-5 w-5" />
                    <span>3D Simulations</span>
                  </CardTitle>
                  <CardDescription>
                    Immersive 3D environments for comprehensive training
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Box className="mr-2 h-4 w-4" />
                    Launch Simulation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span>Global Leaderboard</span>
                </CardTitle>
                <CardDescription>
                  Top performers in virtual drill competitions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div key={user.rank} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="text-2xl font-bold text-primary min-w-[3rem]">
                        #{user.rank}
                      </div>
                      <div className="text-2xl">{user.avatar}</div>
                      <div className="flex-1">
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.school}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{user.score.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VirtualDrills;
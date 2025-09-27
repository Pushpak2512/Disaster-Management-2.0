import { Navigation } from "@/components/Navigation";
import { Calendar, TrendingUp, Award, Clock, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const upcomingDrills = [
    {
      title: "Fire Safety Drill",
      date: "Today, 2:00 PM",
      type: "Mandatory",
      participants: 45,
      status: "confirmed"
    },
    {
      title: "Earthquake Response",
      date: "Tomorrow, 10:00 AM", 
      type: "Practice",
      participants: 32,
      status: "pending"
    },
    {
      title: "Evacuation Exercise",
      date: "Dec 15, 9:00 AM",
      type: "Assessment",
      participants: 78,
      status: "upcoming"
    }
  ];

  const achievements = [
    { name: "Flood Response Hero", icon: "🌊", earned: true },
    { name: "Fire Safety Expert", icon: "🔥", earned: true },
    { name: "Earthquake Survivor", icon: "🏢", earned: false },
    { name: "First Aid Champion", icon: "🏥", earned: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-4 mb-8">
          <Badge className="bg-primary text-primary-foreground px-4 py-2">
            📊 STUDENT DASHBOARD
          </Badge>
          <h1 className="text-4xl font-bold">My Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Track your disaster preparedness progress and upcoming activities
          </p>
        </div>

        <div className="space-y-6">
            {/* Preparedness Score */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Disaster Preparedness Score</span>
                </CardTitle>
                <CardDescription>
                  Your overall readiness based on learning progress and drill attendance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">87%</span>
                    <Badge className="bg-success text-success-foreground">Excellent</Badge>
                  </div>
                  <Progress value={87} className="h-3" />
                  <p className="text-sm text-muted-foreground">
                    You're well-prepared! Complete 2 more modules to reach 90%
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-primary">12/15</CardTitle>
                  <CardDescription>Modules Completed</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-success">95%</CardTitle>
                  <CardDescription>Drill Attendance</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-warning">1,250</CardTitle>
                  <CardDescription>Points Earned</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-emergency">#8</CardTitle>
                  <CardDescription>Class Rank</CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Upcoming Drills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Mock Drills</span>
                </CardTitle>
                <CardDescription>
                  Scheduled drills and exercises for your institution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDrills.map((drill, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div className="space-y-1">
                        <p className="font-semibold">{drill.title}</p>
                        <p className="text-sm text-muted-foreground">{drill.date}</p>
                        <Badge variant="outline" className="text-xs">
                          {drill.type}
                        </Badge>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-sm font-medium">{drill.participants} participants</p>
                        <Button size="sm" variant="outline">
                          {drill.status === "confirmed" ? "Confirmed" : "Register"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>My Achievements</span>
                </CardTitle>
                <CardDescription>
                  Badges earned through learning and participation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`text-center p-4 rounded-lg border-2 ${
                        achievement.earned 
                          ? "border-success bg-success/10" 
                          : "border-muted bg-muted/30 opacity-50"
                      }`}
                    >
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <p className="text-sm font-medium">{achievement.name}</p>
                      {achievement.earned && (
                        <Badge className="mt-2 bg-success text-success-foreground text-xs">
                          Earned
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
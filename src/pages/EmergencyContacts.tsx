import { Navigation } from "@/components/Navigation";
import { Phone, MapPin, Heart, Shield, Flame, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const EmergencyContacts = () => {
  const emergencyServices = [
    { name: "Emergency Services", number: "112", icon: Shield, color: "bg-emergency" },
    { name: "Fire Department", number: "101", icon: Flame, color: "bg-destructive" },
    { name: "Police", number: "100", icon: Shield, color: "bg-primary" },
    { name: "Medical Emergency", number: "108", icon: Heart, color: "bg-success" },
    { name: "Disaster Management", number: "1077", icon: Wrench, color: "bg-warning" },
  ];

  const handleCall = (number: string) => {
    if (typeof window !== 'undefined' && window.location.href.includes('mobile')) {
      window.open(`tel:${number}`, '_self');
    } else {
      // For web, show the number
      alert(`Emergency Number: ${number}\nClick OK to copy to clipboard`);
      navigator.clipboard.writeText(number);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-4 mb-8">
          <Badge className="bg-emergency text-emergency-foreground px-4 py-2">
            🚨 EMERGENCY ACCESS
          </Badge>
          <h1 className="text-4xl font-bold">Emergency Contacts</h1>
          <p className="text-lg text-muted-foreground">
            Quick access to essential emergency numbers. Available offline.
          </p>
        </div>

        {/* Emergency Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {emergencyServices.map((service, index) => (
            <Card key={index} className="border-l-4 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${service.color}`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-primary">
                      {service.number}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleCall(service.number)}
                  className="w-full bg-gradient-to-r from-primary to-success hover:scale-105 transition-transform"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Emergency Contacts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Personal Emergency Contacts</CardTitle>
            <CardDescription>
              Add your personal emergency contacts for quick access
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Contact Name" />
              <Input placeholder="Phone Number" />
            </div>
            <Button variant="outline" className="w-full">
              Add Contact
            </Button>
          </CardContent>
        </Card>

        {/* Live Evacuation Guidance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Live Evacuation Guidance</span>
            </CardTitle>
            <CardDescription>
              Real-time evacuation routes and safety instructions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                No active evacuation alerts in your area
              </p>
              <Button variant="outline" className="mt-4">
                Check Current Location
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmergencyContacts;
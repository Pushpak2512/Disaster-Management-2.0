import { Navigation } from "@/components/Navigation";
import { Phone, MapPin, Heart, Shield, Flame, Wrench, Radio, Satellite, MessageSquare, Navigation as CompassIcon, Flashlight, Activity, AlertTriangle, Smartphone } from "lucide-react";
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

  const communicationSystems = [
    { 
      name: "Mass SMS System", 
      description: "Send emergency notifications to large groups", 
      icon: MessageSquare, 
      color: "bg-primary", 
      status: "Ready",
      statusColor: "text-success"
    },
    { 
      name: "Two-Way Radio", 
      description: "Communicate with emergency response teams", 
      icon: Radio, 
      color: "bg-primary", 
      status: "Ready",
      statusColor: "text-success"
    },
    { 
      name: "Satellite Communication", 
      description: "Backup communication when cellular networks fail", 
      icon: Satellite, 
      color: "bg-success", 
      status: "Standby",
      statusColor: "text-warning"
    }
  ];

  const emergencyUtilities = [
    { 
      name: "Emergency Location Beacon", 
      description: "Share your precise location with rescue teams", 
      icon: MapPin, 
      color: "bg-primary",
      action: "Activate Beacon"
    },
    { 
      name: "Digital Compass", 
      description: "Navigate when GPS systems are unavailable", 
      icon: CompassIcon, 
      color: "bg-primary",
      action: "Open Compass"
    },
    { 
      name: "Emergency Flashlight", 
      description: "High-intensity LED flashlight with SOS mode", 
      icon: Flashlight, 
      color: "bg-primary",
      action: "Turn On Light"
    },
    { 
      name: "Medical Alert System", 
      description: "Quick access to medical information and alerts", 
      icon: Activity, 
      color: "bg-primary",
      action: "Open Medical Info"
    },
    { 
      name: "Panic Button", 
      description: "Instantly alert authorities and emergency contacts", 
      icon: AlertTriangle, 
      color: "bg-emergency",
      action: "Emergency Alert",
      critical: true
    },
    { 
      name: "Device Status Monitor", 
      description: "Check battery, connectivity, and system status", 
      icon: Smartphone, 
      color: "bg-primary",
      action: "Check Status"
    }
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
          <h1 className="text-4xl font-bold">Emergency Communication & Tools</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive emergency communication systems and tools. Available offline.
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

        {/* Communication Systems */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Radio className="h-5 w-5" />
              <span>Communication Systems</span>
            </CardTitle>
            <CardDescription>
              Multi-channel emergency communication infrastructure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-1 gap-4">
              {communicationSystems.map((system, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-lg ${system.color}`}>
                          <system.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{system.name}</h3>
                          <p className="text-sm text-muted-foreground">{system.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className={`flex items-center space-x-1 ${system.statusColor}`}>
                          <div className={`w-2 h-2 rounded-full ${system.status === 'Ready' ? 'bg-success' : 'bg-warning'}`} />
                          <span className="text-sm font-medium">{system.status}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          {system.status === 'Ready' ? 'Manage' : 'Activate'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Utilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Flashlight className="h-5 w-5" />
              <span>Emergency Utilities</span>
            </CardTitle>
            <CardDescription>
              Essential tools and utilities for emergency situations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyUtilities.map((utility, index) => (
                <Card key={index} className={`border transition-all duration-300 hover:shadow-lg ${utility.critical ? 'border-emergency bg-emergency/5' : 'border-border'}`}>
                  <CardContent className="p-4 text-center">
                    <div className={`p-4 rounded-full mx-auto mb-3 w-16 h-16 flex items-center justify-center ${utility.color}`}>
                      <utility.icon className={`h-6 w-6 ${utility.critical ? 'text-white' : 'text-white'}`} />
                    </div>
                    <h3 className="font-semibold mb-2">{utility.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{utility.description}</p>
                    <Button 
                      variant={utility.critical ? "destructive" : "default"} 
                      size="sm" 
                      className="w-full"
                    >
                      {utility.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

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
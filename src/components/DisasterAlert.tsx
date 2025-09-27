import { AlertTriangle, MapPin } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface DisasterAlertProps {
  location?: string;
  disaster?: string;
  intensity?: "high" | "moderate" | "low";
  distance?: string;
}

export function DisasterAlert({ 
  location = "Mumbai, Maharashtra", 
  disaster = "Heavy Rainfall Alert", 
  intensity = "moderate",
  distance = "5km away"
}: DisasterAlertProps) {
  const getIntensityColor = () => {
    switch (intensity) {
      case "high":
        return "bg-emergency text-emergency-foreground border-emergency";
      case "moderate":
        return "bg-warning text-warning-foreground border-warning";
      case "low":
        return "bg-success text-success-foreground border-success";
      default:
        return "bg-warning text-warning-foreground border-warning";
    }
  };

  const getAlertVariant = () => {
    switch (intensity) {
      case "high":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <Alert variant={getAlertVariant()} className="border-l-4 animate-pulse">
      <AlertTriangle className="h-5 w-5" />
      <AlertDescription>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">{disaster}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className={getIntensityColor()}>
              {intensity.toUpperCase()}
            </Badge>
            <span className="text-sm text-muted-foreground">{distance}</span>
          </div>
        </div>
        <p className="text-sm mt-1 text-muted-foreground">
          Location: {location}
        </p>
      </AlertDescription>
    </Alert>
  );
}
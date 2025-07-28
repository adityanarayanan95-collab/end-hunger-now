import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapContainer } from "@/components/MapContainer";

const MealsServed = () => {
  const [mapboxToken, setMapboxToken] = useState("");
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    if (mapboxToken.trim()) {
      setShowMap(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Meals Served
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Global meals served by country - click on markers to see details
          </p>

          {!showMap ? (
            <Card className="max-w-md mx-auto mb-8">
              <CardHeader>
                <CardTitle>Enter Mapbox Token</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  To display the interactive map, please enter your Mapbox public token. 
                  You can get one at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                </p>
                <Input
                  type="text"
                  placeholder="pk.eyJ1..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                />
                <Button onClick={handleShowMap} className="w-full">
                  Show Meals Served Map
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="mb-12">
              <MapContainer 
                mapboxToken={mapboxToken} 
                type="meals"
                title="Global Meals Served by Country"
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MealsServed;
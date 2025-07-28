import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapContainer } from "@/components/MapContainer";

const WheresTheHunger = () => {
  const [mapboxToken, setMapboxToken] = useState("");
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    if (mapboxToken.trim()) {
      setShowMap(true);
    }
  };

  const hungerData = [
    { country: "Yemen", population: 17.4, percentage: 58 },
    { country: "Madagascar", population: 1.14, percentage: 42 },
    { country: "Afghanistan", population: 18.9, percentage: 47 },
    { country: "Somalia", population: 4.1, percentage: 25 },
    { country: "Syria", population: 12.4, percentage: 60 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Where's the Hunger
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Visualizing global hunger patterns to understand where action is needed most
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
                  Show Hunger Map
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="mb-12">
              <MapContainer 
                mapboxToken={mapboxToken} 
                type="hunger"
                title="Global Hunger Heatmap"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hungerData.map((item, index) => (
              <Card key={index} className="border-destructive/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.country}</h3>
                  <p className="text-2xl font-bold text-destructive mb-1">
                    {item.population}M people
                  </p>
                  <p className="text-muted-foreground">
                    {item.percentage}% of population facing hunger
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WheresTheHunger;
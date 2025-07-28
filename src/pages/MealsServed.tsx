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

  const mealImages = [
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=300&fit=crop",
      alt: "Community meal at religious institution",
      caption: "Daily meal service at local mosque"
    },
    {
      src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=500&h=300&fit=crop",
      alt: "Volunteers serving food",
      caption: "Church volunteers distributing fresh meals"
    },
    {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop",
      alt: "Children receiving meals",
      caption: "Temple community feeding program"
    },
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0c9cb5f9b6b?w=500&h=300&fit=crop",
      alt: "Community kitchen",
      caption: "Synagogue community kitchen in action"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Meals Served
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Track our global impact and see the communities we're serving
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
                title="Global Meals Served"
              />
            </div>
          )}

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Meals in Action
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              See how our city-by-city approach brings fresh meals to religious institutions worldwide
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mealImages.map((image, index) => (
                <Card key={index} className="overflow-hidden border-hope/20">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-lg font-medium text-foreground text-center">
                      {image.caption}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MealsServed;
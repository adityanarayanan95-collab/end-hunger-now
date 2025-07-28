import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapContainer } from "@/components/MapContainer";

const MealsServed = () => {
  const mealsData = [
    { country: "Brazil", meals: 15.4, population: 215 },
    { country: "India", meals: 28.9, population: 1400 },
    { country: "Nigeria", meals: 8.2, population: 218 },
    { country: "Kenya", meals: 4.8, population: 54 },
    { country: "Philippines", meals: 6.1, population: 109 },
    { country: "Indonesia", meals: 12.5, population: 273 },
    { country: "Mexico", meals: 9.2, population: 128 },
    { country: "United States", meals: 18.7, population: 331 },
    { country: "Turkey", meals: 7.3, population: 84 },
    { country: "Ethiopia", meals: 5.6, population: 117 },
    { country: "Egypt", meals: 4.2, population: 104 },
    { country: "South Africa", meals: 3.8, population: 60 },
    { country: "Thailand", meals: 2.9, population: 70 },
    { country: "Bangladesh", meals: 6.7, population: 165 },
    { country: "Pakistan", meals: 5.1, population: 225 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Meals Served
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Global meals served showing millions of meals delivered by country
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mealsData.map((item, index) => (
              <Card key={index} className="border-hope/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.country}</h3>
                  <p className="text-3xl font-bold text-hope mb-2">
                    {item.meals}M
                  </p>
                  <p className="text-muted-foreground text-sm mb-1">
                    meals served annually
                  </p>
                  <p className="text-hope font-semibold">
                    {Math.round((item.meals / item.population) * 100)} meals per 100 people
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

export default MealsServed;
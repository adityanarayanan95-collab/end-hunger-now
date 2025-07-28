import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapContainer } from "@/components/MapContainer";

const WheresTheHunger = () => {
  const hungerData = [
    { country: "Yemen", population: 17.4, percentage: 58 },
    { country: "Afghanistan", population: 18.9, percentage: 47 },
    { country: "Somalia", population: 4.1, percentage: 25 },
    { country: "Syria", population: 12.4, percentage: 60 },
    { country: "Madagascar", population: 1.14, percentage: 42 },
    { country: "South Sudan", population: 7.74, percentage: 63 },
    { country: "Haiti", population: 4.5, percentage: 40 },
    { country: "Chad", population: 5.4, percentage: 33 },
    { country: "Central African Republic", population: 2.8, percentage: 58 },
    { country: "Democratic Republic of Congo", population: 27.3, percentage: 31 },
    { country: "Ethiopia", population: 20.4, percentage: 18 },
    { country: "Sudan", population: 11.7, percentage: 26 },
    { country: "Nigeria", population: 25.0, percentage: 12 },
    { country: "Pakistan", population: 43.0, percentage: 19 },
    { country: "Bangladesh", population: 21.0, percentage: 13 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Where's the Hunger
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Global hunger data showing millions of people facing food insecurity by country
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hungerData.map((item, index) => (
              <Card key={index} className="border-destructive/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.country}</h3>
                  <p className="text-3xl font-bold text-destructive mb-2">
                    {item.population}M
                  </p>
                  <p className="text-muted-foreground text-sm mb-1">
                    people facing hunger
                  </p>
                  <p className="text-destructive font-semibold">
                    {item.percentage}% of population
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
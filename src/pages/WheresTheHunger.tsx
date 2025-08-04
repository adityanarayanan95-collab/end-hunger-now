import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapContainer } from "@/components/MapContainer";

const WheresTheHunger = () => {
  const hungerData = [
    { country: "South Sudan", population: 7.74, percentage: 63 },
    { country: "Syria", population: 12.4, percentage: 60 },
    { country: "Yemen", population: 17.4, percentage: 58 },
    { country: "Central African Republic", population: 2.8, percentage: 58 },
    { country: "Afghanistan", population: 18.9, percentage: 47 },
    { country: "Madagascar", population: 1.14, percentage: 42 },
    { country: "Haiti", population: 4.5, percentage: 40 },
    { country: "Zambia", population: 5.8, percentage: 35 },
    { country: "Chad", population: 5.4, percentage: 33 },
    { country: "Democratic Republic of Congo", population: 27.3, percentage: 31 },
    { country: "Mozambique", population: 8.2, percentage: 28 },
    { country: "Sudan", population: 11.7, percentage: 26 },
    { country: "Somalia", population: 4.1, percentage: 25 },
    { country: "Mali", population: 4.9, percentage: 24 },
    { country: "Zimbabwe", population: 3.5, percentage: 23 },
    { country: "Niger", population: 5.2, percentage: 22 },
    { country: "Guatemala", population: 3.7, percentage: 21 },
    { country: "Lesotho", population: 0.48, percentage: 20 },
    { country: "Pakistan", population: 43.0, percentage: 19 },
    { country: "Ethiopia", population: 20.4, percentage: 18 },
    { country: "Burkina Faso", population: 3.8, percentage: 17 },
    { country: "India", population: 224.3, percentage: 16 },
    { country: "Malawi", population: 2.8, percentage: 15 },
    { country: "Uganda", population: 6.6, percentage: 14 },
    { country: "Bangladesh", population: 21.0, percentage: 13 },
    { country: "Nigeria", population: 25.0, percentage: 12 },
    { country: "Kenya", population: 6.1, percentage: 11 },
    { country: "Tanzania", population: 6.4, percentage: 10 },
    { country: "Rwanda", population: 1.3, percentage: 9 },
    { country: "Cambodia", population: 1.5, percentage: 8 },
    { country: "Myanmar", population: 4.3, percentage: 7 },
    { country: "Philippines", population: 7.6, percentage: 6 },
    { country: "Ecuador", population: 1.0, percentage: 5 },
    { country: "Bolivia", population: 0.58, percentage: 4 },
    { country: "Peru", population: 1.3, percentage: 3 },
    { country: "Nepal", population: 0.87, percentage: 2 },
    { country: "Indonesia", population: 5.4, percentage: 1 },
    { country: "Angola", population: 3.2, percentage: 9 },
    { country: "Senegal", population: 1.5, percentage: 8 },
    { country: "Ghana", population: 2.4, percentage: 7 },
    { country: "Cameroon", population: 1.8, percentage: 6 },
    { country: "Ivory Coast", population: 1.6, percentage: 5 },
    { country: "Benin", population: 0.6, percentage: 4 },
    { country: "Togo", population: 0.3, percentage: 3 },
    { country: "Guinea", population: 0.4, percentage: 2 },
    { country: "Sierra Leone", population: 0.16, percentage: 1 },
    { country: "Liberia", population: 0.05, percentage: 0.5 },
    { country: "Eritrea", population: 0.18, percentage: 3 },
    { country: "Djibouti", population: 0.03, percentage: 2 },
    { country: "Comoros", population: 0.02, percentage: 1 },
    { country: "Mauritania", population: 0.12, percentage: 2 },
    { country: "Gambia", population: 0.06, percentage: 1 },
    { country: "Guinea-Bissau", population: 0.05, percentage: 2 },
    { country: "Burundi", population: 1.2, percentage: 9 },
    { country: "Eswatini", population: 0.12, percentage: 8 },
    { country: "Botswana", population: 0.18, percentage: 7 },
    { country: "Namibia", population: 0.16, percentage: 6 },
    { country: "Gabon", population: 0.11, percentage: 5 },
    { country: "Equatorial Guinea", population: 0.07, percentage: 4 },
    { country: "Cape Verde", population: 0.02, percentage: 3 }
  ].sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Where's the Hunger
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Global hunger data showing millions of people left behind by Capitalism by country
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
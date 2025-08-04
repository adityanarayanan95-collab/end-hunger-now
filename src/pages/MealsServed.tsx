import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapContainer } from "@/components/MapContainer";

const MealsServed = () => {
  const mealsData = [
    { country: "South Sudan", meals: 7.74, population: 12.4 },
    { country: "Syria", meals: 12.4, population: 20.7 },
    { country: "Yemen", meals: 17.4, population: 30.0 },
    { country: "Central African Republic", meals: 2.8, population: 4.8 },
    { country: "Afghanistan", meals: 18.9, population: 40.1 },
    { country: "Madagascar", meals: 1.14, population: 2.7 },
    { country: "Haiti", meals: 4.5, population: 11.3 },
    { country: "Zambia", meals: 5.8, population: 18.4 },
    { country: "Chad", meals: 5.4, population: 16.4 },
    { country: "Democratic Republic of Congo", meals: 27.3, population: 95.9 },
    { country: "Mozambique", meals: 8.2, population: 31.3 },
    { country: "Sudan", meals: 11.7, population: 44.9 },
    { country: "Somalia", meals: 4.1, population: 16.4 },
    { country: "Mali", meals: 4.9, population: 20.8 },
    { country: "Zimbabwe", meals: 3.5, population: 15.0 },
    { country: "Niger", meals: 5.2, population: 24.2 },
    { country: "Guatemala", meals: 3.7, population: 17.9 },
    { country: "Lesotho", meals: 0.48, population: 2.1 },
    { country: "Pakistan", meals: 43.0, population: 225.2 },
    { country: "Ethiopia", meals: 20.4, population: 117.9 },
    { country: "Burkina Faso", meals: 3.8, population: 21.5 },
    { country: "India", meals: 224.3, population: 1400.0 },
    { country: "Malawi", meals: 2.8, population: 19.1 },
    { country: "Uganda", meals: 6.6, population: 45.7 },
    { country: "Bangladesh", meals: 21.0, population: 165.2 },
    { country: "Nigeria", meals: 25.0, population: 218.5 },
    { country: "Kenya", meals: 6.1, population: 54.0 },
    { country: "Tanzania", meals: 6.4, population: 61.5 },
    { country: "Rwanda", meals: 1.3, population: 13.3 },
    { country: "Cambodia", meals: 1.5, population: 16.7 },
    { country: "Myanmar", meals: 4.3, population: 54.4 },
    { country: "Philippines", meals: 7.6, population: 109.0 },
    { country: "Ecuador", meals: 1.0, population: 17.6 },
    { country: "Bolivia", meals: 0.58, population: 11.8 },
    { country: "Peru", meals: 1.3, population: 33.0 },
    { country: "Nepal", meals: 0.87, population: 29.1 },
    { country: "Indonesia", meals: 5.4, population: 273.5 },
    { country: "Angola", meals: 3.2, population: 33.9 },
    { country: "Senegal", meals: 1.5, population: 17.2 },
    { country: "Ghana", meals: 2.4, population: 31.7 },
    { country: "Cameroon", meals: 1.8, population: 27.2 },
    { country: "Ivory Coast", meals: 1.6, population: 26.4 },
    { country: "Benin", meals: 0.6, population: 12.1 },
    { country: "Togo", meals: 0.3, population: 8.3 },
    { country: "Guinea", meals: 0.4, population: 13.1 },
    { country: "Sierra Leone", meals: 0.16, population: 8.0 },
    { country: "Liberia", meals: 0.05, population: 5.1 },
    { country: "Eritrea", meals: 0.18, population: 3.5 },
    { country: "Djibouti", meals: 0.03, population: 1.0 },
    { country: "Comoros", meals: 0.02, population: 0.9 },
    { country: "Mauritania", meals: 0.12, population: 4.6 },
    { country: "Gambia", meals: 0.06, population: 2.4 },
    { country: "Guinea-Bissau", meals: 0.05, population: 2.0 },
    { country: "Burundi", meals: 1.2, population: 12.0 },
    { country: "Eswatini", meals: 0.12, population: 1.2 },
    { country: "Botswana", meals: 0.18, population: 2.4 },
    { country: "Namibia", meals: 0.16, population: 2.5 },
    { country: "Gabon", meals: 0.11, population: 2.2 },
    { country: "Equatorial Guinea", meals: 0.07, population: 1.4 },
    { country: "Cape Verde", meals: 0.02, population: 0.6 }
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
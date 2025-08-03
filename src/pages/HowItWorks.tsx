import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-center">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Our innovative meal delivery service powered by food rescue and drone technology
          </p>

          <div className="space-y-8">
            <Card className="border-hope/20">
              <CardHeader>
                <CardTitle className="text-2xl text-hope">Food Rescue Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We partner with grocery stores to rescue high-quality food that's approaching its expiration date. 
                  Instead of letting this perfectly good food go to waste, we redirect it into our meal preparation network. 
                  This sustainable approach reduces food waste while providing fresh ingredients for our meal service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-trust/20">
              <CardHeader>
                <CardTitle className="text-2xl text-trust">Religious Institution Kitchens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our rescued food is delivered to religious institutions equipped with commercial kitchens. 
                  These community partners prepare fresh, nutritious meals using the rescued ingredients. 
                  This creates jobs, strengthens community bonds, and ensures every meal is made with care and attention to quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-hope/20">
              <CardHeader>
                <CardTitle className="text-2xl text-hope">Drone Delivery Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  For our premium subscribers ($1000/month for 100 meals), we use cutting-edge drone technology 
                  to deliver fresh, hot meals directly to your location. This ensures fast, convenient delivery 
                  while minimizing our carbon footprint. Non-subscribers can still access meals by visiting 
                  our partner religious institutions directly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-trust/20">
              <CardHeader>
                <CardTitle className="text-2xl text-trust">Membership Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Premium Members ($1000/month)</h4>
                    <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                      <li>100 freshly prepared meals delivered monthly</li>
                      <li>Drone delivery to your exact location</li>
                      <li>Priority support and meal customization</li>
                      <li>Direct contribution to our philanthropic mission</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Community Access (Free)</h4>
                    <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Access to meals at partner religious institutions</li>
                      <li>Same high-quality, fresh prepared food</li>
                      <li>Community dining experience</li>
                      <li>Part of our mission to ensure no one goes hungry</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-hope/20">
              <CardHeader>
                <CardTitle className="text-2xl text-hope">Sustainable Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our model creates a virtuous cycle: premium memberships fund the infrastructure that serves 
                  both paying customers and those in need. By rescuing food waste, supporting community kitchens, 
                  and utilizing efficient delivery methods, we're building a sustainable system that can scale 
                  to serve millions while addressing food insecurity at its core.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
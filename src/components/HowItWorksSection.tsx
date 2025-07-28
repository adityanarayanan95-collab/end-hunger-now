import { Button } from "@/components/ui/button";
import cityNetworkIcon from "@/assets/city-network-icon.jpg";

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We End Hunger
            <span className="block text-hope">City by City</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our revolutionary approach manages the problem systematically, creating a sustainable 
            solution that works within existing infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-hope text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Collect Subscriptions</h3>
                <p className="text-muted-foreground">
                  People worldwide pay monthly for the luxury of living in a world without hunger.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-nourish text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Purchase Surplus Food</h3>
                <p className="text-muted-foreground">
                  Buy about-to-expire groceries from all stores in each city at discounted rates.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-trust text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Distribute & Prepare</h3>
                <p className="text-muted-foreground">
                  Ship food to religious institutions and pay them to cook and serve meals.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-earth text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Feed Everyone</h3>
                <p className="text-muted-foreground">
                  Ensure every person in the city has access to nutritious meals daily.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={cityNetworkIcon} 
              alt="City-by-city food distribution network"
              className="w-80 h-80 object-cover rounded-2xl shadow-warm"
            />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-hope mb-2">$3B/month</div>
              <div className="text-sm text-muted-foreground">Global cost to end hunger</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-nourish mb-2">0% Waste</div>
              <div className="text-sm text-muted-foreground">Food that would expire</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-trust mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Coverage in each city</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="warm" 
            size="lg"
            onClick={() => document.getElementById('subscription-plans')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join the Solution
          </Button>
        </div>
      </div>
    </section>
  );
};
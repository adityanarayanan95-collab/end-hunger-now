import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Individual Impact",
      price: "$5",
      period: "per month",
      description: "Feed 50 people monthly",
      features: [
        "Monthly impact report",
        "Digital certificate",
        "Community access",
        "Email updates"
      ],
      popular: false,
      buttonVariant: "default" as const
    },
    {
      name: "Family Champion",
      price: "$15",
      period: "per month", 
      description: "Feed 150 people monthly",
      features: [
        "Everything in Individual",
        "Family impact dashboard",
        "City selection preference",
        "Quarterly video calls",
        "Priority support"
      ],
      popular: true,
      buttonVariant: "hero" as const
    },
    {
      name: "Community Leader",
      price: "$50",
      period: "per month",
      description: "Feed 500 people monthly",
      features: [
        "Everything in Family",
        "Corporate recognition",
        "Annual impact visit option",
        "Dedicated account manager",
        "Custom impact reporting"
      ],
      popular: false,
      buttonVariant: "impact" as const
    }
  ];

  const handleSubscribe = (planName: string) => {
    // This will be connected to Stripe later
    console.log(`Subscribing to ${planName}`);
    alert(`Stripe integration coming soon! You selected: ${planName}`);
  };

  return (
    <section id="subscription-plans" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Impact Level
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every subscription helps us systematically eliminate hunger in cities worldwide. 
            Choose the level of impact that feels right for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'border-hope shadow-hope scale-105' 
                  : 'border-border hover:border-hope/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-hope text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-hope">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="text-nourish font-semibold">
                    {plan.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-hope flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant}
                  className="w-full"
                  size="lg"
                  onClick={() => handleSubscribe(plan.name)}
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 p-6 bg-white rounded-lg border border-border">
          <p className="text-muted-foreground">
            <strong>100% Transparency:</strong> Every dollar goes directly to purchasing food and 
            funding distribution. Monthly reports show exactly how your contribution feeds people.
          </p>
        </div>
      </div>
    </section>
  );
};
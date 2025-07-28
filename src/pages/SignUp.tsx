import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";

const SignUp = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fcfbf8' }}>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            End World Hunger Forever
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join the subscription service that will solve world hunger city by city, 
            for the luxury of living in a world where nobody starves to death.
          </p>
        </div>
        
        <SubscriptionPlans />
        
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            The UN estimates world hunger costs $3 billion per month to solve. 
            Together, we can make this a reality through subscription-based action.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
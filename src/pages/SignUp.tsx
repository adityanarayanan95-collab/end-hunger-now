import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WaitlistForm } from "@/components/WaitlistForm";

const SignUp = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fcfbf8' }}>
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Join the Club
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Get 100 fresh, cooked meals delivered monthly for $1000. 
            Support sustainable food rescue while enjoying convenient, quality dining.
          </p>
        </div>
        
        <WaitlistForm />
        
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            We'll only charge your card once we have enough subscribers to launch operations in your area.
            Your membership supports both premium meal delivery service and our philanthropic mission to feed the hungry.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
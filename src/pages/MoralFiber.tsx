import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const MoralFiber = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Moral Fiber
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Our philanthropic mission to end hunger alongside our business operations
          </p>
          
          <div className="space-y-8">
            <Card className="border-hope/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-hope mb-4">The Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hunger affects millions worldwide, yet countless meals go to waste daily. We believe there's 
                  enough food to feed everyone - it's just not reaching the right places. Our mission is to 
                  bridge this gap by creating a sustainable system that connects excess food with those who need it most.
                </p>
              </CardContent>
            </Card>

            <Card className="border-nourish/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-nourish mb-4">Our Approach</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We take all of the extra meals and we donate them to religious institutions within the city, 
                  to serve to the hungry. These community partners have the infrastructure, trust, and dedication 
                  needed to ensure meals reach those who need them most. By working with established religious 
                  institutions, we can efficiently distribute food while strengthening community bonds.
                </p>
              </CardContent>
            </Card>

            <Card className="border-trust/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-trust mb-4">The Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When this company gets big enough, there will be enough extra meals for us to eradicate hunger 
                  forever. As we scale across cities and regions, the volume of rescued meals will grow exponentially. 
                  What starts as helping local communities will eventually become a global network capable of 
                  ending hunger permanently through systematic food rescue and distribution.
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

export default MoralFiber;
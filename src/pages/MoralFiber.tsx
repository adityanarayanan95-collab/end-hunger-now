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
                <h2 className="text-2xl font-bold text-hope mb-4">The Problem</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The United Nations proposes that world hunger will cost about $3 billion per month to solve. 
                  This is important because currently it's a problem that'll never go away. That's because, 
                  in Capitalism, as everyone sells to everyone else for profit the guy at the bottom gets screwed, 
                  so no matter how big and great Capitalism gets for the majority of us the people at the bottom 
                  will forever be screwed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-nourish/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-nourish mb-4">Why Current Solutions Don't Work</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong>1. Government Limitations:</strong> The government is incapable of managing the wealth 
                    inequality we have and doing anything about world hunger because the private sector is too big 
                    in comparison and is driving the wealth inequality.
                  </p>
                  <p>
                    <strong>2. Non-profit Limitations:</strong> Non-profits currently aim to solve this problem by 
                    selling "100 meals for $20", however as they can't take care of all world hunger, they will 
                    never be able to handle the problem in its entirety.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-trust/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-trust mb-4">Our Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe the answer lies in creating a sustainable business model that serves both paying customers 
                  and those in need, for the luxury of living in a world where nobody starves to death, us included.
                </p>
                
                <h3 className="text-xl font-semibold text-trust mb-4">Operational Framework</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our philanthropic wing operates alongside our premium meal delivery service. While premium members 
                  ($1000/month for 100 meals) receive drone delivery to their homes, we simultaneously ensure that 
                  anyone in need can access the same high-quality meals at our partner religious institutions for free. 
                  The company manages this city by city, taking rescued about-to-expire groceries from grocery stores, 
                  shipping the food to religious institutions throughout each city, and paying these institutions to 
                  cook and serve meals for everyone - both premium subscribers and those experiencing hunger. This dual 
                  approach creates a sustainable model where business success directly funds our mission to end hunger forever.
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
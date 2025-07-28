import subscriptionImpactIcon from "@/assets/subscription-impact-icon.jpg";

export const ImpactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-hope/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={subscriptionImpactIcon} 
              alt="Global subscription impact model"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Subscriptions Work
              <span className="block text-hope">Where Others Fail</span>
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">The Problem with Current Approaches</h3>
                <p className="text-muted-foreground text-sm">
                  Governments can't match private sector scale. Non-profits can only help some people. 
                  Capitalism inherently creates inequality.
                </p>
              </div>
              
              <div className="p-4 bg-hope/10 rounded-lg border border-hope/20">
                <h3 className="font-semibold text-hope mb-2">The Subscription Solution</h3>
                <p className="text-muted-foreground text-sm">
                  Consistent monthly funding enables systematic, city-by-city elimination of hunger. 
                  Sustainable, scalable, and permanent.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-lg border border-border">
                <div className="text-2xl font-bold text-nourish">828M</div>
                <div className="text-xs text-muted-foreground">People currently hungry</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-border">
                <div className="text-2xl font-bold text-hope">$3B</div>
                <div className="text-xs text-muted-foreground">Monthly to end it all</div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              For the first time in history, we have a systematic approach that can permanently 
              solve world hunger. It just requires collective action through sustainable funding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
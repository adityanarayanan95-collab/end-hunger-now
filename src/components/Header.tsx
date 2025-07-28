import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-hope to-trust rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">End Hunger Forever</h1>
              <p className="text-xs text-muted-foreground">Subscription to solve world hunger</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#how-it-works" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#subscription-plans" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Plans
            </a>
            <Button variant="default" size="sm">
              Sign In
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button variant="default" size="sm">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
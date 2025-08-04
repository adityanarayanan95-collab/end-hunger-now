import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-hope to-trust rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">End Your Hunger</h1>
              <p className="text-xs text-muted-foreground">For Forever</p>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/how-it-works" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a 
              href="/moral-fiber" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Moral Fiber
            </a>
            <a 
              href="/wheres-the-hunger" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Where's the Hunger
            </a>
            <a 
              href="/meals-served" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Meals Served
            </a>
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
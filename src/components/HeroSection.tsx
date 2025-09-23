import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTractor from "@/assets/hero-tractor.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTractor})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="heading-xl text-foreground">
                Reliable Machines for 
                <span className="text-primary block">Every Farmer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Premium tractors, tillers, sprayers, and harvesters with expert service across Tamil Nadu. 
                Built for Indian farms, backed by local support.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>10,000+ Happy Farmers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>24/7 Service Support</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-cta text-lg px-8 py-6">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-quote text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Book Demo
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-2">Quick Contact:</p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <a href="tel:+919894377407" className="flex items-center gap-2 text-primary hover:underline">
                  📞 +91 98943 77407
                </a>
                <a href="https://wa.me/919894377407" className="flex items-center gap-2 text-primary hover:underline">
                  💬 WhatsApp Now
                </a>
              </div>
            </div>
          </div>

          {/* Hero Stats/Features - Mobile visible */}
          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/80 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Machines Sold</div>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
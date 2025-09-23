import { ArrowRight, Wrench, Truck, Zap, Scissors, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import tillerImage from "@/assets/tiller-product.jpg";
import sprayerImage from "@/assets/sprayer-product.jpg";
import harvesterImage from "@/assets/harvester-product.jpg";
import ploughImage from "@/assets/plough-product.jpg";

const categories = [
  {
    title: "Tractors",
    description: "Powerful tractors for all farming needs",
    icon: Truck,
    image: tillerImage,
    color: "from-primary/10 to-primary/5",
    cta: "Request Quote",
    type: "machinery"
  },
  {
    title: "Tillers",
    description: "Efficient soil preparation equipment",
    icon: Settings,
    image: tillerImage,
    color: "from-accent/10 to-accent/5",
    cta: "Request Quote",
    type: "machinery"
  },
  {
    title: "Sprayers",
    description: "Professional crop protection systems",
    icon: Zap,
    image: sprayerImage,
    color: "from-cta/10 to-cta/5",
    cta: "Request Quote",
    type: "machinery"
  },
  {
    title: "Harvesters",
    description: "Advanced harvesting solutions",
    icon: Scissors,
    image: harvesterImage,
    color: "from-primary/10 to-accent/5",
    cta: "Request Quote",
    type: "machinery"
  },
  {
    title: "Ploughs",
    description: "Heavy-duty ploughing equipment",
    icon: Wrench,
    image: ploughImage,
    color: "from-accent/10 to-primary/5",
    cta: "Request Quote",
    type: "machinery"
  },
  {
    title: "Spare Parts",
    description: "Genuine parts for all machinery",
    icon: Settings,
    image: sprayerImage,
    color: "from-cta/10 to-accent/5",
    cta: "Shop Now",
    type: "parts"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From powerful tractors to precision tillers, we provide complete agricultural solutions 
            with genuine spare parts and expert service support.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.title}
                className="category-card group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`} />
                  
                  {/* Category Icon */}
                  <div className="absolute top-4 right-4 p-3 bg-background/90 rounded-full">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Category Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-md text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  {/* Category CTA */}
                  <Button 
                    className={
                      category.type === "parts" 
                        ? "btn-cta w-full" 
                        : "btn-quote w-full"
                    }
                  >
                    {category.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-quote px-8 py-3">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
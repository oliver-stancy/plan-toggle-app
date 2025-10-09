import { useState } from "react";
import { Wifi, CheckCircle, Signal, Shield, Zap, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import PricingCard from "@/components/PricingCard";
import PaymentDialog from "@/components/PaymentDialog";
import LoginDialog from "@/components/LoginDialog";

const Index = () => {
  const [isUnlimited, setIsUnlimited] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    price: number;
  } | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const unlimitedPackages = [
    { duration: "1 Hour", price: 10, description: "1 Hrs Unlimited" },
    { duration: "2 Hours", price: 15, description: "2 Hrs Unlimited" },
    { duration: "3 Hours", price: 20, description: "3 Hrs Unlimited" },
    { duration: "5 Hours", price: 25, description: "5 Hrs Unlimited" },
    { duration: "12 Hours", price: 30, description: "12 Hrs Unlimited" },
    { duration: "24 Hours", price: 40, description: "1 Day Unlimited" },
    { duration: "2 Days", price: 70, description: "2 Days Unlimited" },
    { duration: "3 Days", price: 100, description: "3 Days Unlimited" },
    { duration: "1 Week", price: 180, description: "7 Days Unlimited" },
    { duration: "2 Weeks", price: 300, description: "14 Days Unlimited" },
    { duration: "3 Weeks", price: 400, description: "21 Days Unlimited" },
    { duration: "1 Month", price: 500, description: "30 Days Unlimited" },
  ];

  const limitedPackages = [
    { duration: "1 Hour", price: 5, description: "100 MB", data: "100 MB" },
    { duration: "1 Hour", price: 8, description: "200 MB", data: "200 MB" },
    { duration: "2 Hours", price: 8, description: "150 MB", data: "150 MB" },
    { duration: "2 Hours", price: 12, description: "300 MB", data: "300 MB" },
    { duration: "3 Hours", price: 10, description: "200 MB", data: "200 MB" },
    { duration: "3 Hours", price: 15, description: "400 MB", data: "400 MB" },
    { duration: "12 Hours", price: 20, description: "500 MB", data: "500 MB" },
    { duration: "12 Hours", price: 25, description: "1 GB", data: "1 GB" },
    { duration: "24 Hours", price: 30, description: "750 MB", data: "750 MB" },
    { duration: "24 Hours", price: 30, description: "1.5 GB", data: "1.5 GB" },
    { duration: "2 Days", price: 40, description: "1.5 GB", data: "1.5 GB" },
    { duration: "2 Days", price: 60, description: "3 GB", data: "3 GB" },
  ];

  const currentPackages = isUnlimited ? unlimitedPackages : limitedPackages;

  const handleConnect = (pkg: any) => {
    setSelectedPackage({
      name: `${pkg.duration} ${isUnlimited ? "Unlimited" : `- ${pkg.data}`}`,
      price: pkg.price,
    });
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Wifi className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Silver</span>
          </div>
          
          <Button variant="outline" className="gap-2" onClick={() => setIsLoginOpen(true)}>
            <CheckCircle className="h-4 w-4" />
            <span>Already have a package?</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 animate-pulse">
            <Signal className="h-24 w-24 text-primary" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}>
            <Signal className="h-32 w-32 text-primary" />
          </div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in">
            Fast & Reliable WiFi On-Demand
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-lg text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Connect instantly with flexible plans starting from KSH 5. No contracts, just seamless internet.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToPricing}
            className="animate-scale-in shadow-lg hover:shadow-xl transition-all"
            style={{ animationDelay: '0.4s' }}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why Choose Silver?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Lightning-fast speeds up to 200 MB for smooth browsing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Secure and reliable connectivity anywhere.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CreditCard className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Easy payments via M-Pesa with instant activation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">No hidden fees—pay only for what you use.</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-3xl" />
                <div className="relative flex items-center justify-center h-full">
                  <Wifi className="h-48 w-48 text-primary animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Choose Your WiFi Plan
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Fast, reliable internet connectivity with flexible pricing options
            </p>
          </div>

          {/* Package Toggle */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex items-center gap-4 rounded-full border border-border bg-card px-6 py-3 shadow-card">
              <Label
                htmlFor="package-toggle"
                className={`cursor-pointer text-sm font-medium transition-colors ${
                  !isUnlimited ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Limited Data
              </Label>
              <Switch
                id="package-toggle"
                checked={isUnlimited}
                onCheckedChange={setIsUnlimited}
                className="data-[state=checked]:bg-primary"
              />
              <Label
                htmlFor="package-toggle"
                className={`cursor-pointer text-sm font-medium transition-colors ${
                  isUnlimited ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Unlimited Data {!isUnlimited && <span className="text-xs">(Coming Soon)</span>}
              </Label>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentPackages.map((pkg, index) => (
              <PricingCard
                key={`${pkg.duration}-${pkg.price}-${index}`}
                duration={pkg.duration}
                price={pkg.price}
                description={pkg.description}
                isUnlimited={isUnlimited}
                onConnect={() => handleConnect(pkg)}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-8">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Silver WiFi. All rights reserved. 
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-primary transition-colors hover:underline">Privacy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-primary transition-colors hover:underline">Terms</a>
          </p>
        </div>
      </footer>

      {/* Payment Dialog */}
      <PaymentDialog
        open={selectedPackage !== null}
        onOpenChange={(open) => !open && setSelectedPackage(null)}
        packageName={selectedPackage?.name || ""}
        price={selectedPackage?.price || 0}
      />

      {/* Login Dialog */}
      <LoginDialog
        open={isLoginOpen}
        onOpenChange={setIsLoginOpen}
      />
    </div>
  );
};

export default Index;

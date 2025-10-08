import { useState } from "react";
import { Wifi, LogOut, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import PricingCard from "@/components/PricingCard";
import PaymentDialog from "@/components/PaymentDialog";

const Index = () => {
  const [isUnlimited, setIsUnlimited] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    price: number;
  } | null>(null);

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Wifi className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Neton</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <CheckCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Already have a package</span>
              <span className="sm:hidden">My Package</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-8 md:px-6 md:py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Choose Your WiFi Plan
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
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
              Unlimited Data
            </Label>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </main>

      {/* Payment Dialog */}
      <PaymentDialog
        open={selectedPackage !== null}
        onOpenChange={(open) => !open && setSelectedPackage(null)}
        packageName={selectedPackage?.name || ""}
        price={selectedPackage?.price || 0}
      />
    </div>
  );
};

export default Index;

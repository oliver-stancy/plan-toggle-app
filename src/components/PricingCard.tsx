import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
  duration: string;
  price: number;
  description: string;
  isUnlimited: boolean;
  onConnect: () => void;
  delay?: number;
}

const PricingCard = ({
  duration,
  price,
  description,
  isUnlimited,
  onConnect,
  delay = 0,
}: PricingCardProps) => {
  return (
    <Card
      className="group relative overflow-hidden border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-card opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10 flex h-full flex-col">
        {/* Badge */}
        <Badge className="mb-4 w-fit bg-secondary text-secondary-foreground">
          {duration.toUpperCase()} {isUnlimited ? "UNLIMITED" : "LIMITED"}
        </Badge>

        {/* Price */}
        <div className="mb-2 flex items-baseline gap-1">
          <span className="text-sm font-medium text-muted-foreground">ksh</span>
          <span className="text-4xl font-bold text-foreground">{price}</span>
        </div>

        {/* Description */}
        <p className="mb-6 text-sm text-muted-foreground">{description}</p>

        {/* Connect Button */}
        <Button
          onClick={onConnect}
          className="mt-auto w-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          Click Here To Connect
        </Button>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-lg border-2 border-primary/0 transition-colors duration-300 group-hover:border-primary/20" />
    </Card>
  );
};

export default PricingCard;

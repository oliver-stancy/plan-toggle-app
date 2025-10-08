import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone } from "lucide-react";
import { toast } from "sonner";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packageName: string;
  price: number;
}

const PaymentDialog = ({
  open,
  onOpenChange,
  packageName,
  price,
}: PaymentDialogProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast.success("Payment request sent! Please check your phone to complete the payment.");
      setIsProcessing(false);
      setPhoneNumber("");
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Complete Payment</DialogTitle>
          <DialogDescription>
            Enter your M-Pesa phone number to complete the purchase
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6 py-4">
            {/* Package Details */}
            <div className="rounded-lg border border-border bg-gradient-card p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Package</p>
                  <p className="text-lg font-semibold text-foreground">{packageName}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Amount</p>
                  <p className="text-2xl font-bold text-primary">ksh {price}</p>
                </div>
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0712345678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground">
                A payment prompt will be sent to this number
              </p>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isProcessing}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isProcessing ? "Processing..." : "Submit Payment"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;

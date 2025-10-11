import { useState } from "react";
import { Mail, Phone, MessageCircle, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    problemType: "",
    issue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      problemType: "",
      issue: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Wifi className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Silver</span>
          </Link>
          
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Need <span className="text-primary">Help?</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our support team is here to assist you. Tell us about your issue and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center shadow-card transition-all hover:shadow-card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Email Us</h3>
              <p className="text-sm text-muted-foreground">support@wifibilling.com</p>
            </div>

            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center shadow-card transition-all hover:shadow-card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Call Us</h3>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            </div>

            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center shadow-card transition-all hover:shadow-card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Available 24/7</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6 shadow-card md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Problem Type */}
              <div className="space-y-2">
                <Label htmlFor="problemType">
                  Problem Type <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.problemType}
                  onValueChange={(value) => setFormData({ ...formData, problemType: value })}
                  required
                >
                  <SelectTrigger id="problemType">
                    <SelectValue placeholder="Select a problem type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="connection">Connection Issues</SelectItem>
                    <SelectItem value="payment">Payment Problems</SelectItem>
                    <SelectItem value="speed">Speed Issues</SelectItem>
                    <SelectItem value="account">Account Management</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Describe Your Issue */}
            <div className="mt-6 space-y-2">
              <Label htmlFor="issue">
                Describe Your Issue <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="issue"
                placeholder="Please provide details about your issue..."
                value={formData.issue}
                onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                className="min-h-[150px]"
                required
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="mt-6 w-full" size="lg">
              Send Message
            </Button>
          </form>
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
    </div>
  );
};

export default Contact;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  cardNumber: z.string().min(16, "Card number must be at least 16 digits").max(19, "Card number is too long"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Please enter MM/YY format"),
  cvv: z.string().min(3, "CVV must be at least 3 digits").max(4, "CVV is too long"),
  cardName: z.string().min(1, "Please enter the name on the card"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export const WaitlistForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      // Simulate API call to save waitlist entry
      console.log("Waitlist submission:", data);
      
      // Show success message
      toast({
        title: "Welcome to the waitlist!",
        description: "Welcome to the club! We'll notify you when we're ready to launch.",
      });
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substr(0, 5);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-earth mb-4">You're in the club!</h3>
        <p className="text-muted-foreground mb-6">
          We'll email you when we have enough club members to launch and start ending world hunger together.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          Add Another Subscriber
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-earth mb-2">Join the Club</h2>
        <p className="text-muted-foreground">
          100 meals delivered to wherever you are, whenever you like
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-earth">Payment Information</h3>
          
          <div className="space-y-2">
            <Label htmlFor="cardName">Name on Card</Label>
            <Input
              id="cardName"
              placeholder="John Doe"
              {...register("cardName")}
            />
            {errors.cardName && (
              <p className="text-sm text-destructive">{errors.cardName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              {...register("cardNumber", {
                onChange: (e) => {
                  e.target.value = formatCardNumber(e.target.value);
                }
              })}
            />
            {errors.cardNumber && (
              <p className="text-sm text-destructive">{errors.cardNumber.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                placeholder="MM/YY"
                {...register("expiryDate", {
                  onChange: (e) => {
                    e.target.value = formatExpiryDate(e.target.value);
                  }
                })}
              />
              {errors.expiryDate && (
                <p className="text-sm text-destructive">{errors.expiryDate.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                placeholder="123"
                type="password"
                {...register("cvv")}
              />
              {errors.cvv && (
                <p className="text-sm text-destructive">{errors.cvv.message}</p>
              )}
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
          variant="hero"
        >
          {isSubmitting ? "Joining the Club..." : "Join the Club"}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>Your card will only be charged once we launch</p>
        <p className="mt-1">We need enough subscribers to make this work</p>
      </div>
    </div>
  );
};
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <section className="border-y bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Get the latest posts and updates delivered straight to your inbox.
            No spam, unsubscribe at any time.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex w-full max-w-md gap-2"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
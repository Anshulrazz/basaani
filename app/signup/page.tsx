'use client';

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/navbar";

export default function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-6 min-h-svh md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <div className={cn("flex flex-col gap-6 ", className)} {...props}>
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="grid p-0 md:grid-cols-2">
                <form className="p-6 md:p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">Create an Account</h1>
                      <p className="text-muted-foreground text-balance">Sign up to start your journey with Basaani Limited</p>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" type="text" placeholder="John Doe" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="••••••••" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" placeholder="••••••••" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Sign Up
                    </Button>
                    <div className="text-sm text-center">
                      Already have an account?{" "}
                      <a href="/login" className="underline underline-offset-4">
                        Log in
                      </a>
                    </div>
                  </div>
                </form>
                <div className="relative hidden bg-muted md:block">
                  <img
                    src="/placeholder.svg"
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                  />
                </div>
              </CardContent>
            </Card>
            <div className="text-xs text-center text-muted-foreground text-balance [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
              By clicking sign up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      toast({
        variant: "destructive",
        title: "Enter email to subscribe.",
      });
    } else {
      toast({
        title: "Email added successfully",
        description: "You will be sent updates about the platform",
      });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center rest-height w-full">
      <div className="w-[300px] md:w-[400px]">
        <Card>
          <CardHeader>
            <CardTitle>
              {" "}
              <div className="flex gap-2">
                <Mail />
                Newsletter{" "}
              </div>
            </CardTitle>
            <CardDescription>
              Get Updated to all the news and updates about this platform.
            </CardDescription>
          </CardHeader>
          <form>
            <CardContent className="space-y-2">
              {/* <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div> */}
              {/* <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div> */}
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button onClick={handleSubmit}>Submit</Button>
              </div>
            </CardContent>
            <CardFooter>
              {/* <Button type="submit" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
              </Button> */}
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Newsletter;

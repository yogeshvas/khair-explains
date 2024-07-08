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
import { NavLink } from "react-router-dom";
import useLogin from "@/hooks/UseLogin";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const { mutate: login, isLoading, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(
      { email, password },
      {
        onSuccess: () => {
          toast({
            title: "Logged in successfully",
            description: "Welcome back buddy!",
          });
        },
      }
    );
  };

  return (
    <div className="flex flex-col justify-center items-center rest-height w-full">
      <div className="w-[300px] md:w-[400px]">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Welcome back developer, you will do wonders here just stick to it.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
      <div className="mt-4">
        <p>
          Don't have an account ?{" "}
          <NavLink className="font-bold" to="/signup">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;

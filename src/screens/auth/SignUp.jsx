import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

// Adjust the import according to your toast implementation
import useSignUp from "@/hooks/UseSignUp";
import { useToast } from "@/components/ui/use-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [tab, setTab] = useState("account");
  const { mutate: signUp, isLoading, isPending } = useSignUp();
  const { toast } = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tab === "account") {
      handleNext();
    } else if (tab === "password") {
      signUp(
        { name, email, password },
        {
          onSuccess: () => {
            toast({
              title: "SignUp successfully",
              description: "Welcome buddy!",
            });
          },
        }
      );
    }
  };

  const handleNext = () => {
    if (tab === "account") {
      setTab("password");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center rest-height w-full">
      <Tabs
        value={tab}
        onValueChange={setTab}
        className="w-[300px] md:w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Details</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click next when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="w-full flex justify-end">
              <Button onClick={handleNext}>Next</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Set your password here. Click save when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input
                    id="new"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirm">Confirm password</Label>
                  <Input
                    id="confirm"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="w-full flex justify-center">
                <Button type="submit" disabled={isLoading || isPending}>
                  Save password
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
      </Tabs>
      <div className="mt-4">
        <p>
          Already have an Account?{" "}
          <NavLink className="font-bold" to="/login">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { login, signup } from "@/service/khair";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ name, email, password }) => signup(name, email, password),
    onSuccess: (data) => {
      try {
        console.log("Registered Successfully", data);

        // Create user object
        const user = {
          _id: data._id,
          name: data.name,
          avatar: data.avatar,
          email: data.email,
          token: data.token,
        };

        // Store the user object in local storage
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", data.token);
        // Update the auth context with user details
        setUser(user);
        toast({
          title: "Registered successfully",
          description: "Welcome to the team.",
        });
        // Redirect to /courses after successful login
        navigate("/courses");
      } catch (error) {
        console.log("Error in onSuccess handler:", error);
      }
    },
    onError: (error) => {
      console.log("Regisration failed:", error.response.data.error);
      toast({
        variant: "destructive",
        title: "Regisration failed",
        description: error.response.data.error,
      });
    },
  });
};

export default useSignUp;

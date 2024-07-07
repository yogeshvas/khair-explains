import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { login } from "@/service/khair";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for navigation

const useLogin = () => {
  const navigate = useNavigate();

  const { user } = useAuth;
  return useMutation({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: (data) => {
      try {
        console.log("Login successful:", data);
        // Redirect to /courses after successful login

        navigate("/courses");
        window.location.reload();
      } catch (error) {
        console.log("Error in onSuccess handler:", error);
      }
    },
    onError: (error) => {
      console.log("Login failed:", error.response.data.error);
      toast({
        variant: "destructive",
        title: "Logged in failed",
        description: error.response.data.error,
      });
    },
  });
};

export default useLogin;

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useToast } from "./use-toast";

// Utility function to capitalize the first letter of a string
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const ProfileButton = () => {
  const [userName, setUserName] = useState("User");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.name) {
      setUserName(capitalizeFirstLetter(storedUser.name));
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast({
      title: "Logged Out Successfully",
      description: "",
    });
    // Redirect to login page
    navigate("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="/img/shadcn.jpg" />
          <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{userName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
        {/* <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem> */}
        <DropdownMenuItem className="cursor-pointer">
          Subscription
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {userName !== "User" ? (
          <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
            Log Out
          </DropdownMenuItem>
        ) : (
          <NavLink to={"/login"}>
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
              Log In
            </DropdownMenuItem>
          </NavLink>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;

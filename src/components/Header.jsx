import React from "react";
import Container from "./ui/container";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, Moon, ShoppingCartIcon, Sun } from "lucide-react";
import ProfileButton from "./ui/ProfileButton";
import { useTheme } from "@/components/theme-provider";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import NavLinks from "./NavLinks";

const routes = [
  {
    href: "/",
    label: "Courses",
  },
  {
    href: "/code",
    label: "Resources",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <NavLink to={route.href}>
                      <div className={"block px-2 py-1 text-lg"}>
                        {route.label}
                      </div>
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <NavLink
              to={"/"}
              className={"ml-4 lg:ml-0 flex items-center gap-2"}
            >
              <img className="w-8 h-8" src="/img/logo.png" />
              <h1 className="text-xl font-bold">Khair Explains</h1>
            </NavLink>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button asChild variant="ghost" key={i}>
                <NavLink to={route.href}>
                  <div className={"text-sm font-medium transition-colors"}>
                    {route.label}
                  </div>
                </NavLink>
              </Button>
            ))}
          </nav>

          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={toggleTheme}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuContent, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary text-glow">GlowyViews</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <NavigationMenuList className="flex gap-4">
            {/* YouTube Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="group h-10 w-max px-4 py-2 hover:bg-red-500/20 hover:text-red-500 data-[state=open]:bg-red-500/20 data-[state=open]:text-red-500 transition-all duration-300">
                <Youtube className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                YouTube
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-6 rounded-lg border border-border bg-background/80 backdrop-blur-sm shadow-md">
                  <li>
                    <NavigationMenuLink
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-500/20 hover:text-red-500 focus:bg-red-500/20 focus:text-red-500"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none">Visualizzazioni Youtube</div>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-500/20 hover:text-red-500 focus:bg-red-500/20 focus:text-red-500"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none">Iscritti Youtube</div>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Instagram Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="group h-10 w-max px-4 py-2 hover:bg-pink-500/20 hover:text-pink-500 data-[state=open]:bg-pink-500/20 data-[state=open]:text-pink-500 transition-all duration-300">
                <Instagram className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Instagram
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-6 rounded-lg border border-border bg-background/80 backdrop-blur-sm shadow-md">
                  <li>
                    <NavigationMenuLink
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-500/20 hover:text-pink-500 focus:bg-pink-500/20 focus:text-pink-500"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none">Follower Instagram</div>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-500/20 hover:text-pink-500 focus:bg-pink-500/20 focus:text-pink-500"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none">Like Instagram</div>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons and Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">
              Log In
            </Button>
            <Button className="glow">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center p-6 border-b border-border">
                  <span className="text-lg font-semibold">Menu</span>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <div className="flex flex-col gap-1 p-6">
                    <a 
                      href="#features" 
                      className="px-4 py-3 text-sm font-medium transition-colors hover:bg-accent rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Features
                    </a>
                    <a 
                      href="#faq" 
                      className="px-4 py-3 text-sm font-medium transition-colors hover:bg-accent rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      FAQ
                    </a>
                  </div>
                </div>
                <div className="border-t border-border p-6 space-y-4">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => setIsOpen(false)}
                  >
                    Log In
                  </Button>
                  <Button 
                    className="w-full glow"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
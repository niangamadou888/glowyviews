import { Button } from "@/youtube-views-components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuContent, NavigationMenuTrigger } from "@/youtube-views-components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/youtube-views-components/ui/sheet";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Player } from "@lordicon/react";
import { Menu } from "lucide-react";
import "lord-icon-element";
import youtubeIcon from "../assets/icons/wired-flat-2547-logo-youtube-hover-pinch.json";
import instagramIcon from "../assets/icons/wired-flat-2542-logo-instagram-hover-pinch.json";
import twitterIcon from "../assets/icons/wired-flat-2714-logo-x-hover-pinch.json";
import tiktokIcon from "../assets/icons/wired-flat-2546-logo-tiktok-hover-pinch.json";

const YoutubeMenu = ({ isActive, onActivate }: { isActive: boolean; onActivate: () => void }) => {
  const youtubeIconRef = useRef<Player | null>(null);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={`group relative h-10 w-max px-4 py-2 hover:bg-red-500/30 hover:text-red-500 data-[state=open]:bg-red-500/30 data-[state=open]:text-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] data-[state=open]:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md rounded-full border border-transparent hover:border-red-500/50 hover:scale-105 active:scale-95 ${isActive ? 'animate-glow' : ''}`}
            onMouseEnter={() => youtubeIconRef.current?.playFromBeginning()}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/10 via-red-500/50 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            <div className="mr-2">
              <Player
                ref={youtubeIconRef}
                icon={youtubeIcon}
                size={24}
                state="morph"
              />
            </div>
            YouTube
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="relative flex flex-col w-[300px] gap-2 p-4 rounded-lg border bg-background/95 backdrop-blur-sm shadow-lg">
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-500/20 hover:text-red-500 focus:bg-red-500/20 focus:text-red-500"
                  href="https://app.glowlikes.it/comprare-visualizzazioni-youtube/"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/10 via-red-500/50 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Visualizzazioni YouTube</div>
                </NavigationMenuLink>
              </li>
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-500/20 hover:text-red-500 focus:bg-red-500/20 focus:text-red-500"
                  href="https://app.glowlikes.it/comprare-like-youtube/"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/10 via-red-500/50 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Like YouTube</div>
                </NavigationMenuLink>
              </li>
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-500/20 hover:text-red-500 focus:bg-red-500/20 focus:text-red-500"
                  href="https://app.glowlikes.it/comprare-iscritti-youtube/"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/10 via-red-500/50 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Iscritti YouTube</div>
                </NavigationMenuLink>
              </li>
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-500/20 hover:text-red-500 focus:bg-red-500/20 focus:text-red-500"
                  href="https://app.glowlikes.it/comprare-commenti-youtube/"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/10 via-red-500/50 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Commenti YouTube</div>
                </NavigationMenuLink>
              </li>
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-500/20 hover:text-red-500 focus:bg-red-500/20 focus:text-red-500"
                  href="https://app.glowlikes.it/comprare-ore-di-visualizzazione-youtube/"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/10 via-red-500/50 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Ore YouTube (yes, ore not commenti)</div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const InstagramMenu = ({ isActive, onActivate }: { isActive: boolean; onActivate: () => void }) => {
  const instagramIconRef = useRef<Player | null>(null);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={`group relative h-10 w-max px-4 py-2 hover:bg-pink-500/30 hover:text-pink-500 data-[state=open]:bg-pink-500/30 data-[state=open]:text-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] data-[state=open]:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md rounded-full border border-transparent hover:border-pink-500/50 hover:scale-105 active:scale-95 ${isActive ? 'animate-glow' : ''}`}
            onMouseEnter={() => instagramIconRef.current?.playFromBeginning()}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500/10 via-pink-500/50 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            <div className="mr-2">
              <Player
                ref={instagramIconRef}
                icon={instagramIcon}
                size={24}
                state="morph"
              />
            </div>
            Instagram
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="relative flex flex-col w-[300px] gap-2 p-4 rounded-lg border bg-background/95 backdrop-blur-sm shadow-lg">
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-500/20 hover:text-pink-500 focus:bg-pink-500/20 focus:text-pink-500"
                  href="#"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500/10 via-pink-500/50 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Follower Instagram</div>
                </NavigationMenuLink>
              </li>
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-500/20 hover:text-pink-500 focus:bg-pink-500/20 focus:text-pink-500"
                  href="#"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500/10 via-pink-500/50 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Like Instagram</div>
                </NavigationMenuLink>
              </li>
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-500/20 hover:text-pink-500 focus:bg-pink-500/20 focus:text-pink-500"
                  href="#"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500/10 via-pink-500/50 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Visualizzazioni Instagram</div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const TwitterMenu = ({ isActive, onActivate }: { isActive: boolean; onActivate: () => void }) => {
  const twitterIconRef = useRef<Player | null>(null);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={`group relative h-10 w-max px-4 py-2 hover:bg-blue-500/30 hover:text-blue-500 data-[state=open]:bg-blue-500/30 data-[state=open]:text-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] data-[state=open]:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md rounded-full border border-transparent hover:border-blue-500/50 hover:scale-105 active:scale-95 ${isActive ? 'animate-glow' : ''}`}
            onMouseEnter={() => twitterIconRef.current?.playFromBeginning()}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-blue-500/50 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            <div className="mr-2">
              <Player
                ref={twitterIconRef}
                icon={twitterIcon}
                size={24}
                state="morph"
              />
            </div>
            X
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="relative flex flex-col w-[300px] gap-2 p-4 rounded-lg border bg-background/95 backdrop-blur-sm shadow-lg">
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-500/20 hover:text-blue-500 focus:bg-blue-500/20 focus:text-blue-500"
                  href="#"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-blue-500/50 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Follower X</div>
                </NavigationMenuLink>
              </li>
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-500/20 hover:text-blue-500 focus:bg-blue-500/20 focus:text-blue-500"
                  href="#"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-blue-500/50 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Like X</div>
                </NavigationMenuLink>
              </li>
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-500/20 hover:text-blue-500 focus:bg-blue-500/20 focus:text-blue-500"
                  href="#"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-blue-500/50 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Visualizzazioni X</div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const TikTokMenu = ({ isActive, onActivate }: { isActive: boolean; onActivate: () => void }) => {
  const tiktokIconRef = useRef<Player | null>(null);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={`group relative h-10 w-max px-4 py-2 hover:bg-purple-500/30 hover:text-purple-500 data-[state=open]:bg-purple-500/30 data-[state=open]:text-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] data-[state=open]:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md rounded-full border border-transparent hover:border-purple-500/50 hover:scale-105 active:scale-95 ${isActive ? 'animate-glow' : ''}`}
            onMouseEnter={() => tiktokIconRef.current?.playFromBeginning()}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-purple-500/50 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            <div className="mr-2">
              <Player
                ref={tiktokIconRef}
                icon={tiktokIcon}
                size={24}
                state="morph"
              />
            </div>
            TikTok
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="relative flex flex-col w-[300px] gap-2 p-4 rounded-lg border bg-background/95 backdrop-blur-sm shadow-lg">
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-500/20 hover:text-purple-500 focus:bg-purple-500/20 focus:text-purple-500"
                  href="#"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-purple-500/50 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Follower TikTok
                  </div>
                </NavigationMenuLink>
              </li>
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-500/20 hover:text-purple-500 focus:bg-purple-500/20 focus:text-purple-500"
                  href="#"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-purple-500/50 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Like TikTok
                  </div>
                </NavigationMenuLink>
              </li>
              <li className="group">
                <NavigationMenuLink
                  className="relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-500/20 hover:text-purple-500 focus:bg-purple-500/20 focus:text-purple-500"
                  href="#"
                  onClick={onActivate}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-purple-500/50 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="text-sm font-medium leading-none">Visualizzazioni TikTok
                  </div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary text-glow"><span className="text-white">Glow</span>Likes</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 space-x-6">
          <YoutubeMenu isActive={activeMenu === 'youtube'} onActivate={() => setActiveMenu('youtube')} />
          <InstagramMenu isActive={activeMenu === 'instagram'} onActivate={() => setActiveMenu('instagram')} />
          <TwitterMenu isActive={activeMenu === 'twitter'} onActivate={() => setActiveMenu('twitter')} />
          <TikTokMenu isActive={activeMenu === 'tiktok'} onActivate={() => setActiveMenu('tiktok')} />
        </div>

        {/* Auth Buttons and Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
          <Link to="https://app.glowlikes.it/">
            <Button variant="ghost">
            Accedi
            </Button>
            </Link>
            <Link to="https://app.glowlikes.it/registrati">
            <Button className="glow">
            Registrati
            </Button>
            </Link>
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
                    {/* YouTube Section */}
                    <div className="mb-4">
                      <div className="flex items-center px-4 py-2 text-sm font-semibold text-red-500">
                        <div className="mr-2">
                          <Player
                            icon={youtubeIcon}
                            size={25}
                          />
                        </div>
                        YouTube
                      </div>
                      <div className="ml-6 flex flex-col gap-1">
                        <a 
                          href="https://app.glowlikes.it/comprare-visualizzazioni-youtube/" 
                          className="px-4 py-3 text-sm font-medium transition-colors hover:bg-red-500/20 hover:text-red-500 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          Visualizzazioni YouTube

                        </a>
                        <a 
                          href="https://app.glowlikes.it/comprare-like-youtube/" 
                          className="px-4 py-3 text-sm font-medium transition-colors hover:bg-red-500/20 hover:text-red-500 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          Like YouTube

                        </a>
                        <a 
                          href="https://app.glowlikes.it/comprare-iscritti-youtube/" 
                          className="px-4 py-3 text-sm font-medium transition-colors hover:bg-red-500/20 hover:text-red-500 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                         Iscritti YouTube


                        </a>
                        <a 
                          href="https://app.glowlikes.it/comprare-commenti-youtube/" 
                          className="px-4 py-3 text-sm font-medium transition-colors hover:bg-red-500/20 hover:text-red-500 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                         Commenti YouTube


                        </a>
                        <a 
                          href="https://app.glowlikes.it/comprare-ore-di-visualizzazione-youtube/" 
                          className="px-4 py-3 text-sm font-medium transition-colors hover:bg-red-500/20 hover:text-red-500 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                         Ore YouTube (yes, ore not commenti)

                        </a>
                      </div>
                    </div>

                    {/* Instagram Section */}
                    <div className="mb-4">
                      <div className="flex items-center px-4 py-2 text-sm font-semibold text-pink-500">
                        <div className="mr-2">
                          <Player
                            icon={instagramIcon}
                            size={25}
                          />
                        </div>
                        Instagram
                      </div>
                      <div className="ml-6 flex flex-col gap-1">
                        <a 
                          href="#" 
                          className="px-4 py-3 text-sm font-medium transition-colors hover:bg-pink-500/20 hover:text-pink-500 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          Follower Instagram
                        </a>
                        <a 
                          href="#" 
                          className="px-4 py-3 text-sm font-medium transition-colors hover:bg-pink-500/20 hover:text-pink-500 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          Like Instagram
                        </a>
                        <a 
                          href="#" 
                          className="px-4 py-3 text-sm font-medium transition-colors hover:bg-pink-500/20 hover:text-pink-500 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          Visualizzazioni Instagram

                        </a>
                      </div>
                    </div>

                    {/* X Section */}
                    <div className="mb-4">
                      <div className="flex items-center px-4 py-2 text-sm font-semibold text-neutral-500">
                        <div className="mr-2">
                          <Player
                            icon={twitterIcon}
                            size={25}
                          />
                        </div>
                        X
                      </div>
                      <div className="ml-6 flex flex-col gap-1">
                        <Link
                          to="#"
                          className="px-4 py-2 text-sm hover:bg-neutral-500/20 rounded-md transition-colors"
                        >
                          Follower X

                        </Link>
                        <Link
                          to="#"
                          className="px-4 py-2 text-sm hover:bg-neutral-500/20 rounded-md transition-colors"
                        >
                          Like X
                        </Link>
                        <Link
                          to="#"
                          className="px-4 py-2 text-sm hover:bg-neutral-500/20 rounded-md transition-colors"
                        >
                          Visualizzazioni X

                        </Link>
                      </div>
                    </div>

                    {/* TikTok Section */}
                    <div className="mb-4">
                      <div className="flex items-center px-4 py-2 text-sm font-semibold text-purple-500">
                        <div className="mr-2">
                          <Player
                            icon={tiktokIcon}
                            size={25}
                          />
                        </div>
                        TikTok
                      </div>
                      <div className="ml-6 flex flex-col gap-1">
                        <Link
                          to="#"
                          className="px-4 py-2 text-sm hover:bg-purple-500/20 rounded-md transition-colors"
                        >
                          Follower TikTok

                        </Link>
                        <Link
                          to="#"
                          className="px-4 py-2 text-sm hover:bg-purple-500/20 rounded-md transition-colors"
                        >
                         Like TikTok

                        </Link>
                        <Link
                          to="#"
                          className="px-4 py-2 text-sm hover:bg-purple-500/20 rounded-md transition-colors"
                        >
                         Visualizzazioni TikTok

                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border p-6 space-y-4">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => setIsOpen(false)}
                  >
                    Accedi
                  </Button>
                  <Button 
                    className="w-full glow"
                    onClick={() => setIsOpen(false)}
                  >
                    Registrati
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
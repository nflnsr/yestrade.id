import "@/styles/details.module.css";
import LogoImg from "@/assets/img/logo.png";
import { Email, Phone, Wechat, Whatsapp } from "@/components/icons";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useHeaderVisibilityOnScroll } from "@/hooks/useHeaderVisibilityOnScroll";
import { useIsLargerScreen } from "@/hooks/useIsLargerScreen";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const path: string = pathname.replace("/", "");
    console.log(typeof path);
    const activeState: HTMLElement = document.getElementById(
      `${path}-navlink`,
    ) as HTMLElement;
    if (!activeState) return;
    activeState.classList.add("border-red-700", "text-red-800", "border-b-2");

    return () => {
      activeState.classList.remove(
        "border-red-700",
        "text-red-800",
        "border-b-2",
      );
    };
  }, [pathname]);

  useHeaderVisibilityOnScroll("header");
  useIsLargerScreen();

  return (
    <>
      <header
        id="header"
        className="fixed top-0 z-50 block w-full transition-all duration-500"
      >
        <div className="hidden w-full bg-[#f9f9f9] px-28 py-3 lg:flex">
          <div className=" flex w-full gap-6 text-sm font-bold tracking-widest text-slate-500">
            <h5>
              <Link
                to="https://api.whatsapp.com/send/?phone=6282293105626"
                className="hover:text-red-800"
              >
                WECHAT: 15122791009
              </Link>
            </h5>
            <h5>
              <Link
                to="mailto:naufaln176@gmail.com"
                className="hover:text-red-800"
              >
                E-MAIL: YESTRADE.ID@GMAIL.COM
              </Link>
            </h5>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="flex gap-[0.98rem]"
              data-icon-size="custom"
              data-color="custom"
              data-icons-type="simple"
            >
              <Link to="/whatsapp">
                <span>
                  <Whatsapp className="fill-[#4d5d6d]" />
                </span>

                <span hidden={true}>WhatsApp</span>
              </Link>

              <Link to="/wechat">
                <span>
                  <Wechat className="fill-[#4d5d6d]" />
                </span>
                <span hidden={true}>WeChat</span>
              </Link>

              <Link to="/email">
                <span>
                  <Email className="fill-[#4d5d6d]" />
                </span>

                <span hidden={true}>Email</span>
              </Link>

              <Link to="/phone">
                <span>
                  <Phone className="fill-[#4d5d6d]" />
                </span>

                <span hidden={true}>Phone</span>
              </Link>
            </div>
          </div>
        </div>
        <nav className="flex min-h-16 w-full justify-between bg-[#fff]/90 shadow-lg shadow-zinc-200 backdrop-blur-[10px]">
          <div className="flex w-[80%] items-center gap-4 py-1 pl-6 max-[300px]:pl-3 lg:py-3.5 lg:pl-28">
            <div className="flex w-full items-center gap-4 max-[300px]:gap-1.5">
              <Link to="/" className="w-fit">
                <img
                  src={LogoImg}
                  alt="logo"
                  className="w-full max-w-[4.4rem]"
                />
              </Link>
              <div className="block w-[80%]">
                <h1 className="text-2xl font-bold text-red-950 sm:text-4xl">
                  <Link to="/" className="hover:text-red-800">Yestrade</Link>
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex lg:pr-28">
            <ul className="flex h-full items-center text-gray-500">
              <li
                id="home-navlink"
                className={`flex h-full items-center px-3.5 hover:border-red-700 ${
                  pathname === "/" && "border-red-700 text-red-800 border-b-2"
                }`}
              >
                <Link
                  to="/"
                  className="text-sm font-semibold hover:text-red-800"
                >
                  HOME
                </Link>
              </li>
              <li
                id="impor-navlink"
                className="flex h-full items-center px-3.5 hover:border-red-700"
              >
                <NavigationMenu className="px-0">
                  <NavigationMenuItem className="px-0">
                    <NavigationMenuTrigger className="bg-transparent px-0 hover:bg-transparent hover:text-red-800 focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-red-800">
                      <Link to="/impor" className="text-sm font-semibold">
                        IMPOR
                      </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full">
                      <NavigationMenuLink>
                        <Link to="/pembelian">
                          <NavigationMenuLink
                            className={`w-40 text-left text-red-950 hover:text-red-800
                              ${navigationMenuTriggerStyle()}`}
                          >
                            Jasa Pembelian
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/pengiriman">
                          <NavigationMenuLink
                            className={`w-40 text-left text-red-950 hover:text-red-800
                              ${navigationMenuTriggerStyle()}`}
                          >
                            Jasa Pengiriman
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/pembayaran">
                          <NavigationMenuLink
                            className={`w-40 text-left text-red-950 hover:text-red-800
                              ${navigationMenuTriggerStyle()}`}
                          >
                            Jasa Pembayaran
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenu>
              </li>
              <li
                id="blog-navlink"
                className="flex h-full items-center px-3.5 hover:border-red-700"
              >
                <Link
                  to="/blog"
                  className="text-sm font-semibold hover:text-red-800"
                >
                  BLOG
                </Link>
              </li>
              <li
                id="faq-navlink"
                className="flex h-full items-center px-3.5 hover:border-red-700"
              >
                <Link
                  to="/faq"
                  className="text-sm font-semibold hover:text-red-800"
                >
                  FAQ
                </Link>
              </li>
              <li className="flex h-full items-center pl-4">
                <Link
                  to="/login"
                  className="group text-sm font-semibold hover:text-red-800"
                >
                  <Button className="bg-[#c62828] px-8 py-6 text-[1rem] hover:shadow-xl group-hover:-translate-y-0.5 group-hover:bg-red-900">
                    Login
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <Sheet>
            <div className="flex w-[20%] items-center justify-end pr-6 max-[300px]:pr-3 lg:hidden">
              <SheetTrigger
                id="menuButton"
                // className={`absolute right-6 top-[48%] block -translate-y-1/2 md:hidden`}
                aria-label="Menu"
                className="block h-fit bg-transparent p-0 hover:bg-transparent"
                onClick={() => setShowMenu(!showMenu)}
              >
                <span className="menu__line origin-top-left transition duration-500"></span>
                <span className="menu__line my-[0.3rem] transition duration-700 ease-in-out"></span>
                <span className="menu__line origin-bottom-left transition duration-500"></span>
              </SheetTrigger>
            </div>
            <SheetContent className="w-3/5 bg-black bg-opacity-95 max-[365px]:w-full lg:hidden">
              <SheetHeader className="my-14">
                <menu className="pl-0.5 pr-3">
                  <ul className="text-left text-xl font-semibold text-white [&>li]:mb-4">
                    <li className="">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="flex justify-between">
                      <Link to="/">Import</Link>
                      <div className="flex items-center justify-center ring-1 ring-white">
                        <button
                          className={`m-auto h-7 w-7 leading-none transition-all duration-1000 ease-in-out ${
                            showSubMenu && "rotate-180"
                          }`}
                          onClick={() => setShowSubMenu(!showSubMenu)}
                        >
                          <span className="text-sm">▼</span>
                        </button>
                      </div>
                      {/* <details className="">
                      <summary className=""></summary>
                      <ul>
                        <li>Import</li>
                        <li>Export</li>
                      </ul>
                      </details> */}
                      {/* <DropdownMenu>
                        <DropdownMenuTrigger>▼</DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Profile</DropdownMenuItem>
                          <DropdownMenuItem>Billing</DropdownMenuItem>
                          <DropdownMenuItem>Team</DropdownMenuItem>
                          <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu> */}
                    </li>
                    <div
                      className={`overflow-hidden text-base font-normal transition-all duration-700 ease-in-out ${
                        showSubMenu ? "mb-4 h-[5.15rem]" : "h-0"
                      }`}
                    >
                      {/* <p
                      className={` ${
                        showSubMenu
                          ? "animate-in slide-in-from-top-0 h-6 duration-700"
                          : "animate-out slide-out-to-top-0 h-0 duration-700"
                      }`}
                      >
                        Jasa Pembelian
                      </p> */}
                      <ul className="list-none space-y-3 text-sm font-bold">
                        <li>
                          <span className="px-3">•</span>
                          <Link to="/">Jasa Pembelian</Link>
                        </li>
                        <li>
                          <span className="px-3">•</span>
                          <Link to="/">Jasa Pengiriman</Link>
                        </li>
                        <li>
                          <span className="px-3">•</span>
                          <Link to="/">Jasa Pembayaran</Link>
                        </li>
                      </ul>
                    </div>
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">FAQ</Link>
                    </li>
                    <li>
                      <button className="mt-2.5 rounded-lg bg-red-600 px-8 py-3 text-base font-normal">
                        Login
                      </button>
                    </li>
                  </ul>
                </menu>
                <div className="mt-10 flex gap-5">
                  <Link to="/">
                    <Whatsapp className="fill-white" />
                  </Link>
                  <Link to="/">
                    <Wechat className="fill-white" />
                  </Link>
                  <Link to="/">
                    <Email className="fill-white" />
                  </Link>
                  <Link to="/">
                    <Phone className="fill-white" />
                  </Link>
                </div>
              </SheetHeader>
              <SheetClose
                className="hidden"
                onClick={() => setShowMenu(!showMenu)}
              />
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </>
  );
}

import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { CalculatorIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { navigation as NavigationMenu } from "../constants/navItems";
import { RoughNotation } from "react-rough-notation";
import { SearchIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [navigation, setNavigation] = useState(NavigationMenu);

  const [currentMenu, setCurrentMenu] = useState("Home");

  const [navBg, setNavBg] = useState("bg-gradient");
  const [isQuotationToolPage, setIsQuotationToolPage] = useState(false);

  useEffect(() => {
    if (
      window.location.href.split("/")[3] &&
      window.location.href.split("/")[3] === "QuotationTool"
    ) {
      setIsQuotationToolPage(true);
    }

    // const scrollEvent = () => {
    //   // console.log(window.scrollY);
    //   if (window.scrollY > 60) {
    //     setNavBg(""); /* set no color to navbar id > 60 */
    //   } else {
    //     setNavBg(""); /* set grdient color to navbar id < 60 */
    //   }
    // }

    // window.addEventListener("scroll", scrollEvent);

    // return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <Disclosure as="nav" className={`bg-white z-50 sticky  top-0 `}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-3 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="navbar md:flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* Logo without text */}
                  <img
                    className="block  h-8 w-auto rounded-full"
                    src="/images/logo.jpeg"
                    alt="semper-blinds"
                  />
                </div>
                <div className="hidden md:block sm:ml-5 text-black">
                  <div className="flex items-center space-x-2 lg:space-x-4 origin-top  duration-300 ">
                    {navigation.map((item) =>
                      isQuotationToolPage && item.name === "Home" ? (
                        <Link
                          to={item.href}
                          key={item.name}
                          className={classNames(
                            currentMenu === item.name
                              ? "navitem text-lime-600  font-semibold  hover:text-green"
                              : "navitem text-black hover:text-lime-600  ",
                            "pt-2 rounded-md text-base font-semibold"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          onClick={() => {
                            console.log(item.name);
                            setCurrentMenu(item.name);
                          }}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          key={item.name}
                          className={classNames(
                            currentMenu === item.name
                              ? "navitem text-lime-600  font-semibold  hover:text-green"
                              : "navitem text-black hover:text-lime-600  ",
                            "pt-2 rounded-md text-base font-semibold"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          onClick={() => {
                            console.log(item.name);
                            setCurrentMenu(item.name);
                          }}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>

              {!isQuotationToolPage && (
                <div className="absolute right-10 md:right-3 flex items-center sm:ml-6 sm:pr-0">
                  <Link to={"/login"}>
                    <button
                      type="button"
                      className="button-box-shadow flex text-white bg-lime-600  hover:bg-lime-600  focus:ring-4 focus:ring-lime-600 rounded-lg text-base px-3 py-2 font-semibold  text-center mr-3 md:mr-0 "
                    >
                      <CalculatorIcon className=" top-4 text-gray-600 h-6 w-6 mr-1 stroke-2 stroke-white k" />
                      Get Quotation
                    </button>
                  </Link>
                </div>
              )}

              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-lime-600  bg-lime-50 hover:text-lime-600  hover:bg-lime-50 focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-lime-600 "
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-opacity-60 backdrop-filter backdrop-blur-lg">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-lime-600"
                      : "text-gray-900  hover:text-lime-600",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

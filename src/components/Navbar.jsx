import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { CalculatorIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { navigation as NavigationMenu } from "../constants/navItems";
import { RoughNotation } from 'react-rough-notation';
import { SearchIcon } from "@heroicons/react/outline";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const [navigation, setNavigation] = useState(NavigationMenu);

    const [currentMenu, setCurrentMenu] = useState("Home");

    const [navBg, setNavBg] = useState('bg-gradient');

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            console.log(window.scrollY);
            if(window.scrollY > 60){
                setNavBg('') /* set no color to navbar id > 60 */
            }else{
                setNavBg('bg-gradient') /* set grdient color to navbar id < 60 */
            }
        })
    
        return () => window.removeEventListener('scroll')
       }, [])

    return (
        <Disclosure
            as="nav"
            className={`${navBg} z-50 bg-opacity-60 backdrop-filter backdrop-blur-lg sticky top-0 ease-in-out duration-500 transition-all`}
        >
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
                                    <div className="flex space-x-2 lg:space-x-4 origin-top  duration-300 ">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    currentMenu === item.name
                                                        ? "navitem text-green-500 font-semibold  hover:text-green"
                                                        : "navitem mx-9  text-white hover:text-green-500 ",
                                                    "lg:px-1  pt-2 rounded-md text-base font-medium"
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                                onClick={() => {
                                                    console.log(item.name);
                                                    setCurrentMenu(item.name);
                                                }}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute right-10 md:right-3 flex items-center sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    class="flex text-white bg-green-500 hover:bg-green-600  focus:ring-4 focus:ring-blue-300 rounded-lg text-base px-3 py-2 font-semibold  text-center mr-3 md:mr-0 "
                                >
                                    <CalculatorIcon className=" top-4 text-gray-600 h-6 w-6 mr-1 stroke-2 stroke-white k" />
                                    Get Quotation
                                </button>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-green-500 bg-emerald-50 hover:text-green-500 hover:bg-emerald-50 focus:outline-none ">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6 text-green-500" aria-hidden="true" />
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
                                            ? "text-emerald-500"
                                            : "text-gray-300  hover:text-emerald-500",
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

import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "inicio", target: "inicio" },
        { name: "sobre mi", target: "sobremi" },
        { name: "tegnologias", target: "tegnologias" },
        { name: "contacto", target: "contacto" },
    ];

    const handleScroll = (id) => {
        setIsOpen(false);
        gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: `#${id}`, offsetY: 80 },
            ease: "power3.inOut"
        });
    };

    return (
        <nav className="sticky md:px-70 top-0 z-50 w-full h-20 border-b border-line bg-principal px-6">
            <div className="max-w-7xl mx-auto h-full flex justify-between items-center">

                <div className="py-5">
                    <h2
                        onClick={() => handleScroll("inicio")}
                        className="text-md font-mono hover:cursor-pointer tracking-wider"
                    >
                        luca.dev
                    </h2>
                </div>

                <div className="text-ink">
                    {!isOpen && (
                        <button className="md:hidden" onClick={() => setIsOpen(true)}>
                            <IoIosMenu className="size-8 hover:cursor-pointer" />
                        </button>
                    )}
                    <div className={`z-50 fixed top-0 flex flex-col md:flex-row md:items-center pl-10 pt-10 md:p-0 h-screen md:h-auto w-70 md:w-auto bg-principal md:bg-transparent transition-all duration-300 ${isOpen ? "right-0" : "-right-full"} md:static`}>
                        <ul className="flex flex-col gap-5 md:flex-row md:gap-8">
                            {navLinks.map((link) => (
                                <li
                                    key={link.target}
                                    className="text-muted text-sm py-2 px-3 hover:text-muted hover:scale-105 rounded-2xl hover:cursor-pointer tracking-wider transition-colors"
                                    onClick={() => handleScroll(link.target)}
                                >
                                    {link.name}
                                </li>
                            ))}
                        </ul>

                        <button className="md:hidden self-end mr-5" onClick={() => setIsOpen(false)}>
                            <IoClose className="text-dorado size-10" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
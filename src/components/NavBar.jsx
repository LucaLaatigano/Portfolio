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
            scrollTo: {
                y: `#${id}`,
                offsetY: 80
            },
            ease: "power3.inOut"
        });
    };

    return (
        <nav className="sticky xl:px-80 top-0 z-50 flex w-full h-20 justify-between items-center border-b border-line bg-principal px-6">
            <div className="py-5">
                <h2
                    onClick={() => handleScroll("incio")}
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

                <div className={`z-50 fixed top-0 flex flex-col md:flex-row gap-5 pl-10 pt-10 md:p-0 h-screen md:h-auto w-60 md:w-full bg-principal md:bg-transparent transition-all duration-300 ${isOpen ? "right-0" : "-right-full"} md:static`}>
                    <ul className="flex flex-col gap-5 md:flex-row">
                        {navLinks.map((link) => (
                            <li
                                key={link.target}
                                className="text-muted text-sm py-2 px-3 mr-5 md:mr-0 hover:bg-muted/10 rounded-2xl hover:cursor-pointer tracking-wider transition-colors"
                                onClick={() => handleScroll(link.target)}
                            >
                                {link.name}
                            </li>
                        ))}
                    </ul>
                    <button className="md:hidden self-end mr-5 " onClick={() => setIsOpen(false)}>
                        <IoClose className="text-dorado size-8" />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-overlay/80 backdrop-blur-sm md:hidden" onClick={() => setIsOpen(false)} />
            )}
        </nav>
    );
}
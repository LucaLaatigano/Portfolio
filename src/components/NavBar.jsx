import { useState } from "react"
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const handToScroll = (id) => {
        setIsOpen(false)
        gsap.to(window, {
            duration: 1.2,
            scrollTo: {
                y: `#${id}`,
                offsetY: 80,
            },
            ease: "power3.inOut"
        })
    }

    return (
        <div className="w-full h-20 border-b border-line flex justify-between py-5 md:px-80 px-5">
            <div>
                <h2 className="text-xl text-ink tracking-wider">luca.dev</h2>
            </div>
            <div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoCloseOutline className="size-8 text-muted" /> : <IoMenuOutline className="size-8 text-muted" />}
                </button>
                <div className="hidden md:flex gap-5 items-center">
                    <button onClick={() => handToScroll("sobremi")} className="text-sm my-2 text-muted">sobre mi</button>
                    <button onClick={() => handToScroll("tegnologias")} className="text-sm my-2 text-muted">tegnologias</button>
                    <button onClick={() => handToScroll("proyectos")} className="text-sm my-2 text-muted">proyectos</button>
                    <button onClick={() => handToScroll("contacto")} className="text-sm my-2 text-muted">contacto</button>
                </div>
            </div>
            <div className={`
                fixed left-0 w-full border-b border-line transition-all duration-300 ease-in-out z-105
                ${isOpen ? "top-20 opacity-100" : "-top-full opacity-0"}
                md:hidden
            `}>
                <div className="flex flex-col p-3 gap-2">
                    <button onClick={() => handToScroll("hero")} className="text-left text-sm text-muted rounded-2xl p-3 transition-colors">sobre mi</button>
                    <button onClick={() => handToScroll("nosotros")} className="text-left text-sm text-muted rounded-2xl p-3 transition-colors">tegnologias</button>
                    <button onClick={() => handToScroll("membresias")} className="text-left text-sm text-muted rounded-2xl p-3 transition-colors">proyectos</button>
                    <button onClick={() => handToScroll("clases")} className="text-left text-sm text-muted rounded-2xl p-3 transition-colors">conta</button>
                </div>
            </div>
        </div>
    )
} 
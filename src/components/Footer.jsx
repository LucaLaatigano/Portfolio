import { FaInstagram, FaGithub, FaTiktok } from "react-icons/fa"
import { TbBrandFiverr } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="w-full bg-principal flex flex-col px-5 md:px-10 xl:px-20 pt-10 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-10">

                <div className="flex flex-col gap-3">
                    <span className="font-mono text-xs tracking-[0.25em] uppercase text-ink">
                        LUCA LATIGANO
                    </span>
                    <p className="text-muted text-xs md:text-sm tracking-wider leading-relaxed">
                        Desarrollador frontend especializado en interfaces{" "}
                        <span className="hidden md:inline">
                            modernas, accesibles y con atención al detalle visual
                        </span>{" "}
                        desde Salta, Argentina.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="https://www.instagram.com/luca.latigano/" className="text-hint hover:text-ink transition-colors duration-200">
                            <FaInstagram className="size-4" />
                        </a>
                        <a href="https://github.com/LucaLaatigano" className="text-hint hover:text-ink transition-colors duration-200">
                            <FaGithub className="size-4" />
                        </a>
                        <a href="https://www.fiverr.com/lucalatigano/buying?source=avatar_menu_profile" className="text-hint hover:text-ink transition-colors duration-200">
                            <TbBrandFiverr className="size-4" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="font-mono text-xs tracking-[0.25em] uppercase text-ink">
                        Contacto
                    </span>
                    <ul className="flex flex-col gap-1">
                        <li className="text-muted text-xs md:text-sm tracking-wider">Salta, Argentina</li>
                        <li className="text-muted text-xs md:text-sm tracking-wider">+54 9 387 566-1422</li>
                        <li className="text-muted text-xs md:text-sm tracking-wider">lucalatigano@gmail.com</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="font-mono text-xs tracking-[0.25em] uppercase text-ink">
                        Stack
                    </span>
                    <ul className="flex flex-col gap-1">
                        <li className="text-muted text-xs md:text-sm tracking-wider">React · Tailwind CSS v4</li>
                        <li className="text-muted text-xs md:text-sm tracking-wider">GSAP · React-Router</li>
                        <li className="text-muted text-xs md:text-sm tracking-wider">Node.js · ExpressJS</li>
                        <li className="text-muted text-xs md:text-sm tracking-wider">Python · Java</li>
                    </ul>
                </div>

            </div>

            <hr className="border-t border-line" />

            <p className="text-center text-hint text-xs font-mono tracking-wider mt-5">
                © 2025 Luca Latigano · Todos los derechos reservados
            </p>
        </footer>
    )
}
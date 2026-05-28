import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useRef } from "react"


gsap.registerPlugin(ScrollTrigger, SplitText)
export default function Projects({ id }) {
    const projects = [
        { name: "La Mesa", about: "Sitio web para restaurante de cocina regional argentina. SPA con animaciones GSAP, menú interactivo y sistema de reservas.", technologies: ["React", "TailwindCSS", "Gsap", "Vite"], link: "https://restaurant-template-one-roan.vercel.app/", code: "https://github.com/LucaLaatigano/Restaurante" },
        { name: "Gym-Template", about: "Plantillas diseñada para un gimnasio, donde podes seleccionar planes y inscribirte via whatsapp", technologies: ["React", "TailwindCSS", "Gsap", "Vite"], link: "https://gym-template-ebon.vercel.app/", code: "https://github.com/LucaLaatigano/Gym-Template" },
        { name: "DashBoard", about: "Plantilla para un DashBoard, adaptable para todos los usos y lista para ser implementada con un Backend", technologies: ["React", "TailwindCSS", "Gsap", "Vite", "Recharts"], link: "https://dash-board-orcin-rho.vercel.app/", code: "https://github.com/LucaLaatigano/DashBoard" },
        { name: "Ecommerce", about: "Plantilla para un Ecommerce, adaptable para todos los usos y lista para ser implementada con un Backend", technologies: ["react", "TailwindCSS", "FakeStoreAPI", "ReactRouter", "Vite"], link: "https://e-commerce-pink-rho-83.vercel.app/", code: "github.com/LucaLaatigano/Ecommerce" },
        { name: "Movies App", about: "Sitio web de peliculas, donde podes buscar cualquier pelicula y ponerlas en favoritos", technologies: ["React", "TailwindCSS", "TheMovieDbAPI", "Vite"], link: "https://movie-app-three-neon.vercel.app/", code: "https://github.com/LucaLaatigano/Movie-App" },
        { name: "MovieAPI", about: "CRUD API para peliculas, realizada utilizando la arquitectura MVC", technologies: ["NodeJS", "ExpressJS", "Mysql", "JSON"], link: "https://github.com/LucaLaatigano/Movie-Rest-Api" },
    ]
    const container = useRef()
    useGSAP(() => {
        const title = container.current.querySelector(".title")
        const splitPara = new SplitText(".para", { type: "lines" })
        const allCards = gsap.utils.toArray(".card", container.current)
        const startItems = [title, ...splitPara.lines]
        gsap.from(startItems, {
            x: -100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.16,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        })
        allCards.forEach(card =>
            gsap.from(card, {
                x: -100,
                opacity: 0,
                duration: 0.8,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }))
    }, { scope: container })
    return (
        <section id={id} className="component">
            <div ref={container} className="flex flex-col gap-10">
                <div className="title flex w-full h-auto justify-start gap-3 mt-10">
                    <span className="font-mono text-md text-hint">03</span>
                    <span className="text-md font-mono text-ink">PROYECTOS</span>
                </div>

                <div className="flex justify-center w-full h-auto py-5 items-stretch">
                    <p className="para text-lg text-muted w-full">
                        A lo largo de todo mi camino he construido muchos proyectos con distintas tecnologías,para ver todos mis proeyectos entra a mi <a href="https://github.com/LucaLaatigano" target="_blank" className="text-ink border-b hover:text-muted">GitHub</a>.
                        Algunos de estos son los siguientes:
                    </p>
                </div>

                <div className="flex flex-col gap-5 w-full">
                    {projects.map((project, index) => (
                        <div key={index} className="card flex flex-col gap-3 w-full h-auto border border-hint/30 bg-hint/7 rounded-lg p-3">
                            <h3 className="text-ink text-lg font-light tracking-wider">{project.name}</h3>
                            <p className="text-muted tracking-tighter text-md">{project.about}</p>
                            <div className="flex gap-3">
                                <a href={project.link} target="_blank" rel="noreferrer" className="text-hint text-md tracking-tight hover:text-ink">
                                    {project.name === "MovieAPI" ? "Codigo" : "Visitar Web"}
                                </a>
                                {project.code && (<a href={project.code} target="_blank" rel="noreferrer" className="text-hint text-md tracking-tight hover:text-ink">Codigo</a>)}
                            </div>
                            <div className="flex gap-2 justify-start">
                                {project.technologies.map((tech, indexTech) => (
                                    <span key={indexTech} className="text-hint text-sm tracking-tight">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
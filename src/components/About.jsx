import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger, SplitText)
export default function About({ id }) {
    const dataABout = [
        { type: "carrera", data: "Ingeniería en Sistemas" },
        { type: "año", data: "Tercer Año" },
        { type: "foco", data: "Frontend · Interfaces" },
        { type: "ubicación", data: "Salta, Argentina" },
    ]
    const container = useRef()
    const cardContainer = useRef()
    useGSAP(() => {
        const paraSplit = new SplitText(".para", { type: "lines" })
        const allCards = gsap.utils.toArray(".card", cardContainer.current)
        const title = container.current.querySelector(".title")

        const handleResize = () => {
            paraSplit.revert()
            paraSplit.split({ type: "lines" })
        }

        window.addEventListener("resize", handleResize)

        const startItems = [title, ...paraSplit.lines]

        gsap.from(startItems, {
            opacity: 0,
            duration: 0.8,
            stagger: 0.16,
            x: -100,
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
                toggleActions: "play none none none",
            },
            ease: "power2.inOut"
        })

        allCards.forEach(card => {
            gsap.from(card, {
                opacity: 0,
                duration: 0.8,
                x: -100,
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                ease: "power2.inOut"
            })
        })
        return () => window.removeEventListener("resize", handleResize)

    }, { scope: container })

    return (
        <section id={id} className="component">
            <div ref={container} className="inside-div">
                <div className="title flex w-full h-auto justify-start gap-3">
                    <span className="font-mono text-md text-hint">01</span>
                    <span className="text-md font-mono text-ink">SOBRE MI</span>
                </div>
                <div className="flex justify-center w-full h-auto py-5 items-stretch">
                    <p className="para text-lg text-muted mt-5 w-full">
                        Soy estudiante de tercer año de Ingeniería en Informática y, sobre todo, alguien que disfruta de entender cómo funcionan las cosas desde la raíz. Mi día a día hoy pasa por el desarrollo web, donde desarrollo interfaces con un código sólido; pero mi curiosidad no se queda solo en la superficie.
                        Últimamente estoy aprendiendo desarrollo backend para tener una visión completa de los productos que construyo. Además, mi paso por la facultad me despertó un interés particular por la arquitectura de computadoras: me fascina entender qué pasa por debajo del software que escribimos.
                    </p>
                </div>
                <div ref={cardContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    {dataABout.map((item, index) => (
                        <div key={index} className="card flex flex-col gap-2 p-4 border border-hint/30 rounded-lg bg-hint/5">
                            <span className="font-mono text-xs uppercase tracking-widest text-hint">{item.type}</span>
                            <span className="font-light text-md text-ink tracking-tighter">{item.data}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
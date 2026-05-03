import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"

gsap.registerPlugin(SplitText)

export default function Hero({ id }) {
    const container = useRef()
    const infoArr = [
        { cant: "3°", info: "año · ing. informática" },
        { cant: "5+", info: "proyectos" },
        { cant: "10+", info: "tecnologías" },
    ]

    useGSAP(() => {
        const items = gsap.utils.toArray(".item", container.current)
        const availableItems = container.current.querySelector(".available")
        const listItems = gsap.utils.toArray(".list", container.current)
        const titleSplit = gsap.utils.toArray(".title", container.current)
        const img = container.current.querySelector(".img")
        const paraSplit = new SplitText(".para", { type: "lines" })
        const allItems = [availableItems, ...titleSplit, ...paraSplit.lines, ...items, ...listItems]

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%", // Ajustado para que dispare un poco antes
                toggleActions: "play none none none"
            },
            ease: "power2.out"
        })

        tl
            .from(allItems, {
                x: -30, // Reducido para evitar scroll horizontal accidental
                opacity: 0,
                duration: 0.8,
                stagger: 0.1, // Un poco más rápido el stagger para mejor UX
            })
            .from(img, {
                opacity: 0,
                scale: 0.9, // Menos agresivo para que no se note el salto de caja
                duration: 1
            }, "-=0.5")
    }, { scope: container }) // Scope para mejor limpieza de memoria

    return (
        <section id={id} className="w-full flex justify-center py-10 md:py-20 lg:py-32">
            {/* Contenedor principal con max-width para evitar que se estire infinito en monitores grandes */}
            <div ref={container} className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">

                {/* Lado Izquierdo: Textos */}
                <div className="w-full flex-1 order-2 md:order-1">
                    <div className="available flex items-center gap-2 mb-6 text-zinc-500 font-mono text-sm tracking-tight">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>disponible</span>
                        <span className="opacity-50">·</span>
                        <span>Salta, Argentina</span>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <h1 className="title relative text-ink leading-[1.1] inline-block text-5xl md:text-6xl lg:text-8xl font-bold">
                                Luca
                                <div className="title absolute -bottom-2 left-0 w-20 md:w-32 h-1.5 bg-emerald-500"></div>
                            </h1>
                            <span className="title mt-4 text-body font-light tracking-tight text-4xl md:text-5xl lg:text-7xl opacity-80">
                                desarrollador web
                            </span>
                        </div>

                        <p className="para text-lg md:text-xl text-muted mt-4 max-w-xl leading-relaxed">
                            Estudiante de Ingeniería en Informática, tercer año.
                            Construyo interfaces modernas con atención al detalle.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
                            {infoArr.map((item, index) => (
                                <div key={index} className="list flex flex-col gap-1 justify-center border-l border-zinc-200 pl-4">
                                    <h2 className="text-2xl text-ink font-mono font-bold">{item.cant}</h2>
                                    <span className="text-xs md:text-sm text-hint font-sans uppercase tracking-wider">{item.info}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Lado Derecho: Imagen */}
                <div className="w-full flex-1 order-1 md:order-2">
                    <div className="relative aspect-square md:aspect-auto">
                        <img
                            className="img w-full h-full max-h-[500px] md:max-h-none object-cover rounded-2xl shadow-2xl"
                            src="/lucalatigano.png"
                            alt="Luca Latigano estudiante de ingeniería informática y desarrollador web"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}
import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
gsap.registerPlugin(SplitText)
export default function Hero({ id }) {
    const container = useRef()
    const infoArr = [
        { cant: "3°", info: "año · ing. informatica" },
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
                start: "top bottom",
                toggleActions: "play none none none"
            },
            ease: "power2.inOut"
        })
        tl
            .from(allItems, {
                x: -100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
            })
            .from(img, {
                opacity: 0,
                scale: 0.70,
            })
    }, { scope: container })
    return (
        <section id={id} className="w-full xl:px-80 px-5 h-auto pb-10 border-b border-line-dark">
            <div ref={container} className="flex justify-between flex-col md:flex-row md:items-stretch mt-10 md:min-h-150">
                <div className="w-full flex-1 px-5">
                    <div className="available flex items-center gap-2 mb-8 text-zinc-500 font-mono text-sm tracking-tight">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="ml-">disponible</span>
                        <span className="mx-1">·</span>
                        <span>Salta, Argentina</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <span className="title relative text-ink leading-tight inline-block text-5xl md:text-7xl">
                                Luca
                                <div className="title absolute text-ink leading-tight -bottom-1 left-0 w-26 md:w-40 h-0.75 bg-ink"></div>
                            </span>
                            <br />
                            <span className="title mt-2 text-body font-thin tracking-tighter text-5xl md:text-7xl">
                                desarrollador web
                            </span>
                        </div>
                        <p className="para text-md text-muted mt-5 w-full">
                            Estudiante de Ingeniería en Informatica, tercer año.
                            Construyo interfaces modernas con atención al detalle.
                        </p>
                        <div className="grid grid-cols-3 gap-3 mt-10">
                            {infoArr.map((item, index) => (
                                <div key={index} className="list flex flex-col gap-3 max-w-125 justify-center w-full">
                                    <h1 className="text-xl text-left text-ink font-mono">{item.cant}</h1>
                                    <span className="text-sm text-left uppercase text-hint font-sans">{item.info}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full flex-1 md:ml-10 flex px-1 mt-10 md:mt-0">
                    <img className="img w-full h-100 md:h-full object-cover rounded-xl" src="/lucalatigano.png" alt="Luca Latigano estudiante de ingeniria informatica y desarrollador web" />
                </div>
            </div>
        </section>
    )
}
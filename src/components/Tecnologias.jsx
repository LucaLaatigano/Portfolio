import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useRef } from "react"


gsap.registerPlugin(ScrollTrigger, SplitText)
export default function Tecnologias({ id }) {
    const listOfFrontTegnologies = [
        { type: "html", name: "HTML" },
        { type: "css", name: "CSS" },
        { type: "js", name: "JavaScript" },
        { type: "react", name: "React" },
        { type: "tailwind", name: "TailwindCSS" },
    ]
    const listOfBackTegnologies = [
        { type: "nodejs", name: "NodeJS" },
        { type: "express", name: "ExpressJS" },
        { type: "py", name: "Python" },
        { type: "java", name: "Java" },
    ]
    const listOfLearningTegnologies = [
        { type: "postgres", name: "PostgresSQL" },
        { type: "mongodb", name: "MongoDB" },
        { type: "ts", name: "TypeScript" },
        { type: "linux", name: "Linux" },
        { type: "docker", name: "Docker" },
    ]
    const listOfToolsTegnologies = [
        { type: "git", name: "Git" },
        { type: "github", name: "GitHub" },
        { type: "npm", name: "npm" },
        { type: "bash", name: "Bash" },
        { type: "vscode", name: "VSCode" },
    ]
    const container = useRef()
    useGSAP(() => {
        const allCards = gsap.utils.toArray(".cards", container.current)
        const splitText = new SplitText(".para", container.current)
        const title = container.current.querySelector(".title")
        const allStartElements = [title, ...splitText.lines]
        gsap.from(allStartElements, {
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
            <div ref={container} className="inside-div">
                <div className="title flex w-full h-auto justify-start gap-3">
                    <span className="font-mono text-md text-hint">02</span>
                    <span className="text-md font-mono text-ink">TECNOLOGIAS</span>
                </div>
                <div className="flex justify-center w-full h-auto py-5 items-stretch">
                    <p className="para text-lg text-muted mt-5 w-full">
                        En mi viaje por el mundo del desarrolo web, he cultivado experiencia y habilidades en
                        variedad de tecnologias. Mi stack Tegnologico incluye:
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto gap-5">
                    {[
                        { title: "FRONTEND", list: listOfFrontTegnologies },
                        { title: "BACKEND", list: listOfBackTegnologies },
                        { title: "APRENDIENDO", list: listOfLearningTegnologies },
                        { title: "HERRAMIENTAS", list: listOfToolsTegnologies },
                    ].map(({ title, list }, index) => (
                        <div key={index} className="cards flex flex-col gap-2 p-5 border border-hint/30 rounded-lg bg-hint/7 w-full">
                            <h2 className="text-center text-2xl text-ink font-mono tracking-wider">{title}</h2>
                            <div className="flex flex-wrap gap-4 mt-4 justify-center">
                                {list.map((tech, indexI) => (
                                    <div key={indexI} className="flex flex-col items-center gap-2 w-14">
                                        <img src={`https://skillicons.dev/icons?i=${tech.type}&size=38`} className="w-9 h-9" />
                                        <span className="text-xs text-muted font-light text-center leading-tight">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
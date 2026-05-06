import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

export default function Contacto({ id }) {
    const [metodo, setMetodo] = useState("email");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [msg, setMsg] = useState("");

    const container = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        if (!name || !asunto || !msg) return
        const templateParams = {
            name: name,
            email: email,
            asunto: asunto,
            msg: msg
        };

        emailjs.send(
            'service_4qtetln',
            'template_i5p2uwc',
            templateParams,
            'I2_HcnKspAlhl6kuZ'
        )
            .then((response) => {
                alert("¡Mensaje enviado con éxito!");
                setName("");
                setEmail("");
                setAsunto("");
                setMsg("");
            })
            .catch((err) => {
                console.log("Error al enviar:", err);
                alert("Hubo un error al enviar el mensaje.");
            });
    };
    const sendWapp = (e) => {
        e.preventDefault()
        const phone = "5493875661422"
        if (!name || !asunto || !msg) return
        let texto = `Hola! Soy ${name}, he visitado tu portfolio y quiero hablar de *${asunto}*. Se trata de lo siguiente ${msg} `
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(texto)}`, "_blank")
        setName("")
        setAsunto("")
        setMsg("")
        setEmail("")
        return
    }
    useGSAP(() => {
        const title = container.current.querySelector(".title")
        const splitPara = new SplitText(".para", { type: "lines" })
        const allInps = gsap.utils.toArray(".inp", container.current)
        const btns = gsap.utils.toArray(".btn", container.current)

        gsap.set(btns, { y: 50, opacity: 0 })

        gsap.from([title, ...splitPara.lines], {
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

        gsap.to(btns, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                toggleActions: "play none none none"
            }
        })

        allInps.forEach(inp =>
            gsap.from(inp, {
                x: -100,
                opacity: 0,
                duration: 0.8,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: inp,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            })
        )
    }, { scope: container })
    return (
        <section id={id} className="component">
            <div ref={container} className="flex flex-col gap-10">
                <div className="title flex w-full h-auto justify-start gap-3 mt-10">
                    <span className="font-mono text-md text-hint">04</span>
                    <span className="text-md font-mono text-ink">CONTACTO</span>
                </div>

                <div className="flex justify-center w-full h-auto py-5 items-stretch">
                    <p className="para text-lg text-muted w-full">
                        ¿Quieres trabajar conmigo? Excelente, contáctame vía WhatsApp o por email.
                        Responderé lo antes posible.
                    </p>
                </div>

                <div className="flex gap-3 w-auto justify-start">
                    <button
                        type="button"
                        onClick={() => setMetodo("email")}
                        className={`btn flex gap-2 justify-center py-2 px-5 w-35 h-10 border border-hint/30 ${metodo === "email" ? "bg-hint/20" : ""} text-muted text-center rounded-xl transition-all`}
                    >
                        Email <MdAlternateEmail className="size-4 text-muted mt-1" />
                    </button>

                    <button
                        type="button"
                        onClick={() => setMetodo("wapp")}
                        className={`btn flex gap-2 justify-center py-2 px-5 w-35 h-10 border border-hint/30 ${metodo === "wapp" ? "bg-hint/20" : ""} text-muted text-center rounded-xl transition-all`}
                    >
                        WhatsApp <FaWhatsapp className="size-4 text-muted mt-1" />
                    </button>
                </div>
                <form onSubmit={metodo === "wapp" ? sendWapp : sendEmail} className="flex flex-col justify-center w-full">
                    <div className="w-full flex gap-5 flex-col md:flex-row">
                        <div className="inp flex flex-col gap-2 w-full flex-1">
                            <span className="text-sm text-muted">Nombre:</span>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                required
                                placeholder="Ej: Luca Latigano"
                                className="outline-none text-muted w-full h-12 bg-hint/7 border rounded-sm border-hint/30 px-5 py-2"
                            />
                        </div>

                        <div className="inp flex flex-col gap-2 w-full flex-1">
                            <span className="text-sm text-muted">Email:</span>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                required
                                disabled={metodo === "wapp"}
                                placeholder={metodo === "wapp" ? "No necesario para WhatsApp" : "Ej: luca@correo.com"}
                                className={`outline-none text-muted w-full h-12 bg-hint/7 border rounded-sm border-hint/30 px-5 py-2 transition-opacity ${metodo === "wapp" ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
                            />
                        </div>
                    </div>

                    <div className="inp flex flex-col mt-5 gap-2">
                        <span className="text-sm text-muted">Asunto:</span>
                        <input
                            value={asunto}
                            onChange={(e) => setAsunto(e.target.value)}
                            type="text"
                            required
                            placeholder="Ej: Realizar un proyecto juntos"
                            className="outline-none text-muted w-full h-12 bg-hint/7 border rounded-sm border-hint/30 px-5 py-2"
                        />
                    </div>

                    <div className="inp mt-5 flex flex-col gap-2">
                        <span className="text-sm text-muted">Mensaje:</span>
                        <textarea
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            required
                            placeholder="Ej: Me gustaría trabajar contigo..."
                            className="outline-none text-muted w-full h-40 bg-hint/7 border rounded-sm border-hint/30 p-5"
                        />
                    </div>
                    <div className="inp mt-5 w-full">
                        <button
                            type="submit"
                            className="w-full h-12 border border-hint/30 rounded-sm px-5 py-2 text-muted bg-hint/7 hover:bg-hint/20 transition-colors"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
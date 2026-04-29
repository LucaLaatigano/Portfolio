export default function Hero({ id }) {
    const infoArr = [
        { cant: "3°", info: "año · ing. sistemas" },
        { cant: "5+", info: "proyectos" },
        { cant: "10+", info: "tecnologías" },
    ]
    return (
        <section id={id} className="w-full h-auto px-80">
            <div className="flex justify-between mt-10">
                <div className="w-full flex-1 px-5">
                    <div className="flex items-center gap-2 mb-8 text-zinc-500 font-mono text-sm tracking-tight">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="ml-1">disponible</span>
                        <span className="mx-1">·</span>
                        <span>Salta, Argentina</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-xl md:text-5xl text-ink leading-tight">
                            <span className="relative inline-block">
                                Luca
                                <div className="absolute -bottom-1 left-0 w-full h-0.75 bg-ink"></div>
                            </span>
                            <br />
                            <span className="mt-2 text-body font-thin tracking-tighter">
                                desarrollador web
                            </span>
                        </h1>
                        <p className="text-md text-muted mt-5">
                            Estudiante de Ingeniería en Sistemas, tercer año.
                            Construyo interfaces modernas con atención al detalle.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
                            {infoArr.map((item, index) => (
                                <div key={index} className="flex flex-col gap-3 justify-center w-auto">
                                    <h1 className="text-xl text-center text-ink font-mono">{item.cant}</h1>
                                    <span className="text-sm text-center text-hint font-sans">{item.info}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full flex-1 ml-10">
                    <img className="w-full h- object-cove rounded-xl" src="/lucalatigano.png" alt="Luca Latigano estudiante de ingeniria informatica y desarrollador web" />
                </div>
            </div>
        </section>
    )
}
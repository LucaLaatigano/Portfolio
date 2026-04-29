export default function Hero({ id }) {
    return (
        <section id={id} className="w-full min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 bg-[#f9f9f7]">
            <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-8 text-zinc-500 font-mono text-sm tracking-tight">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="ml-1">disponible</span>
                    <span className="mx-1">·</span>
                    <span>Salta, Argentina</span>
                </div>
                <div className="mb-10">
                    <h1 className="text-7xl md:text-8xl font-medium text-zinc-900 leading-tight">
                        <span className="relative inline-block">
                            Luca
                            <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-zinc-900"></div>
                        </span>
                        <br />
                        <span className="text-zinc-800 font-light tracking-tight">
                            desarrollador web
                        </span>
                    </h1>
                </div>
                <div className="max-w-xl">
                    <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
                        Estudiante de Ingeniería en Sistemas, tercer año. <br />
                        <span className="text-zinc-400">Construyo interfaces modernas con atención al detalle.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
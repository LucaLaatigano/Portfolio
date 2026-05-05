import About from "./About";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Tecnologias from "./Tecnologias";

export default function Home() {
    return (
        <div className="w-full h-full bg-principal flex flex-col">
            <div className="flex flex-col gap-5">
                <Hero id="inicio" />
                <About id="sobremi" />
                <Tecnologias id="tegnologias" />
            </div>
        </div>
    )
}
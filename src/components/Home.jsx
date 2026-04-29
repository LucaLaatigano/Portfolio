import Hero from "./Hero";
import NavBar from "./NavBar";

export default function Home() {
    return (
        <div className="w-full h-screen bg-principal flex flex-col">
            <NavBar />
            <div className="flex flex-col gap-5">
                <Hero id="inicio" />
            </div>
        </div>
    )
}
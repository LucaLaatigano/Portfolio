import Elemenst from "./components/Elements";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router"

export default function App() {
  return (
    <div className="w-full h-full bg-principal flex flex-col">
      <NavBar />
      <div className="flex flex-col gap-5">
        <Home />
      </div>
    </div>
  )
}
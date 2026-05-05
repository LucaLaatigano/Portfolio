import { createContext, useState, useContext } from "react";

const ProjectsContext = createContext()


export const useProjectsContext = () => useContext(ProjectsContext)

export const ProjectProvider = ({ children }) => {
    const [data, setData] = useState([
        { name: "La Mesa", about: "Sitio web para restaurante de cocina regional argentina. SPA con animaciones GSAP, menú interactivo y sistema de reservas.", technologies: ["react", "tailwind", "gsap", "vite"] },
        { name: "Gym-Template", about: "Plantillas diseñada para un gimnasio, donde podes seleccionar planes y inscribirte via whatsapp", technologies: ["react", "tailwind", "gsap", "vite"] },
        { name: "DashBoard", about: "Plantilla para un DashBoard, adaptable para todos los usos y lista para se implementada con un backends", technologies: ["react", "tailwind", "gsap", "vite"] },
        { name: "Ecommerce", about: "Plantilla para un Ecommerce, adaptable para todos los usos y lista para se implementada con un backends", technologies: ["react", "tailwind", "gsap", "vite"] },
        { name: "Movies App", about: "Sitio web de peliculas, donde podes buscar cualquier pelicula y ponerlas en favoritos", technologies: ["react", "tailwind", "gsap", "vite"] },
    ])

    return <ProjectsContext.provider value={{ data, setData }}>
        {children}
    </ProjectsContext.provider>
}
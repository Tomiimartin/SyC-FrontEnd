import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function PaginaAño() {
  const { año } = useParams();
  return (
    <div className="w-full min-h-screen flex flex-col">
        <NavBar/>

        <div className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Año de Cursada: {año}</h1>
        </div>
        
        <Footer/>
    </div>
  );
}
import EnlacesAños from "./EnlacesAños";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <div className="bg-cyan-800 flex justify-between items-center px-3 sm:px-4 xl:px-7 py-2 md:py-3 rounded-4xl shadow-sm fixed top-4 left-0 right-0 mx-2.5 sm:mx-12 xl:mx-28 z-50">
      <div className="w-full flex ">
        <Link to={"/"}>
          <img src="/logo.png" alt="logo SyC" className="w-10 sm:w-12 xl:w-13 z-10 hover:scale-105 transition-all" />
        </Link>
      </div>

      <EnlacesAños />

      <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2 w-full justify-end text-white">
        <a href="https://cafecito.app/sycmed2022" target="_blank" className="flex items-center gap-0.5 hover:scale-105 transition-all">
          <p className="hidden md:block">¿Cafecito?</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color={"#ffffff"} fill={"none"} className="w-6 h-auto sm:w-8 lg:w-9">
            <path d="M5 7L6.7602 17.4048C7.06616 19.2134 7.21914 20.1177 7.76007 20.7417C9.21438 22.4194 14.7856 22.4194 16.2399 20.7417C16.7809 20.1177 16.9338 19.2134 17.2398 17.4048L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5 7L5.74278 5.2876C6.35168 3.88385 6.65613 3.18197 7.29101 2.7856C8.88049 1.79324 14.9452 1.68444 16.709 2.7856C17.3439 3.18197 17.6483 3.88385 18.2572 5.2876L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <ellipse cx="12" cy="14.5" rx="2" ry="2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>

        <a href="https://www.instagram.com/syc.med/" target="_blank" className="hover:scale-105 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color={"#ffffff"} fill={"none"} className="w-6 h-auto sm:w-9 lg:w-10">
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
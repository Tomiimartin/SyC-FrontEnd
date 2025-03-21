import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import EnlacesAños from "./EnlacesAños";

export default function NavBar() {
  return (
    <>
        <div className="bg-red-400 flex justify-between items-center px-2.5 sm:px-4 xl:px-7 py-1.5 sm:py-2 z-0 rounded-4xl shadow-sm fixed top-4  left-0 right-0 mx-2.5 sm:mx-12 xl:mx-40">
            <img src="../public/logo.png" alt="logo SyC" className="w-6 sm:w-8 xl:w-10 z-10"/>
            
            <EnlacesAños/>

            <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl sm:text-3xl xl:text-4xl hover:text-gray-100 transition-color cursor-pointer" />
        </div>
    </>
  )
}

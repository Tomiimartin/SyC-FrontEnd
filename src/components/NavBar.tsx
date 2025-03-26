import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import EnlacesAños from "./EnlacesAños";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-cyan-800 flex justify-between items-center px-3 sm:px-4 xl:px-7 py-2 sm:py-2 rounded-4xl shadow-sm fixed top-4 left-0 right-0 mx-2.5 sm:mx-12 xl:mx-28 z-50">
      <Link to={"/"}>
        <img src="/logo.png" alt="logo SyC" className="w-10 sm:w-12 xl:w-13 z-10" />
      </Link>

      <EnlacesAños />
      
      <FontAwesomeIcon
        icon={faInstagram}
        className="text-white text-3xl sm:text-4xl xl:text-4xl hover:text-gray-100 transition-color cursor-pointer"
      />
    </div>
  );
}
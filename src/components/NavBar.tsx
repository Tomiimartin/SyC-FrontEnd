import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import EnlacesAños from "./EnlacesAños";

export default function NavBar() {
  return (
    <div className="bg-cyan-800 flex justify-between items-center px-3 sm:px-4 xl:px-7 py-2 sm:py-2 z-0 rounded-4xl shadow-sm fixed top-4 left-0 right-0 mx-2.5 sm:mx-12 xl:mx-28">
      <img src="/logo.png" alt="logo SyC" className="w-7 sm:w-10 xl:w-13 z-10" />
      <EnlacesAños />
      <FontAwesomeIcon
        icon={faInstagram}
        className="text-white text-2xl sm:text-3xl xl:text-4xl hover:text-gray-100 transition-color cursor-pointer"
      />
    </div>
  );
}
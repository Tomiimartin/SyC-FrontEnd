import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import EnlacesAños from "./EnlacesAños";

export default function Footer() {
  return (
    <div className="bg-indigo-950 w-full flex flex-col items-center justify-center pt-6 pb-2 gap-4">
        <a href="https://www.instagram.com/syc.med?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl sm:text-3xl xl:text-4xl hover:text-gray-100 transition-color" />
        </a>
        
        <EnlacesAños/>
        
        <div className="text-center">
            <p className="text-white text-sm xl:text-base font-medium">«© 2025  copyright SyC»</p>
            <a href="https://github.com/Tomas-Martin-dev" target="_blank" className="text-white text-sm xl:text-base font-medium hover:text-gray-100 transition-color cursor-pointer">By Tomas-Martin.dev</a>
        </div>
    </div>
  )
}

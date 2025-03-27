import { Link } from "react-router-dom";

const años = ["primero", "segundo", "tercero", "cuarto", "quinto"];

export default function EnlacesAños() {
  return (
    <ul className="flex justify-center gap-3 sm:gap-5 xl:gap-6 text-xl sm:text-2xl font-medium z-10 text-white">
      {años.map((año, index) => (
        <li key={index}>
          <Link to={`/${año}`} className="hover:text-gray-100 transition-all">
            {index + 1}°
          </Link>
        </li>
      ))}
    </ul>
  );
}
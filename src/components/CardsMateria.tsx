import { CardsMateriaPromps } from "../types";

export default function CardsMateria({data} : CardsMateriaPromps) {
  return (
    <a 
        className="cursor-pointer flex flex-col justify-center items-center w-full max-w-40 md:max-w-48 xl:max-w-64 gap-2.5 md:gap-3 xl:gap-4 p-3 md:p-4 xl:px-8 xl:py-5 border border-black bg-white rounded-xl custom-shadow-card hover:-translate-y-1 hover:bg-indigo-300 hover:text-white transition-all"
        href={data.url}
        target="_blank"
    >
        <img src={data.img.url} alt={data.img.name} className="w-full h-auto object-cover px-3 max-w-36 lg:max-w-40 xl:max-w-44"/>
        <div className="flex flex-col w-full">
            <p className="font-semibold text-indigo-950 text-base xl:text-xl">{data.materia}</p>
            <p className=" text-sm xl:text-base font-medium">{data.fecha}</p>
        </div>
    </a>
  )
}

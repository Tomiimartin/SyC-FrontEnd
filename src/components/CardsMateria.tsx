
export default function CardsMateria() {
  return (
    <a 
        className="cursor-pointer flex flex-col justify-center gap-2.5 md:gap-3 xl:gap-4 p-3 md:p-4 xl:px-8 xl:py-5 border border-black bg-white rounded-xl custom-shadow-card hover:-translate-y-1 hover:bg-indigo-300 hover:text-white transition-all"
        href="https://drive.google.com/drive/folders/1DpHm_RA4yAITf11umRi0xGU_F3FMMzQd"
        target="_blank"
    >
        <img src="/anato.png" alt="Materia" className="w-full h-auto object-cover px-3"/>
        <div className="flex flex-col w-full">
            <p className="font-semibold text-indigo-950 text-base md:text-lg xl:text-xl">Anatomia</p>
            <p className=" text-sm md:text-base font-medium">17/03/2024</p>
        </div>
    </a>
  )
}

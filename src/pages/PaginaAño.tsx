import { useParams } from "react-router-dom";
import CardsMateria from "../components/CardsMateria";
import { getApuntes } from "../services/StrapiService";
import { useEffect, useState } from "react";
import { Apunte } from "../types";


export default function PaginaAño() {
  
  const [data, setData] = useState<Apunte>()
  const { year } = useParams<{year : string}>();
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const data = await getApuntes(`${year}`)
        setData(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[year])
  

  return (
      <div className="w-full flex flex-col flex-nowrap gap-3 lg:py-18 items-center justify-center">
        <h1 className="text-lg xl:text-2xl font-medium bg-indigo-950 w-full px-5 py-3 text-white text-center">{year?.toUpperCase()} AÑO</h1>
        
        <div className="w-full mt-6 md:mt-10 xl:mt-16 px-7 md:px-22 xl:px-32">
          <div className=" flex flex-wrap justify-center gap-8 md:gap-10 xl:gap-16">
            {data?.data.map( apunte => (
              <CardsMateria
                key={apunte.materia}
                data={apunte}
              />
            ))}
          </div>  
        </div>
      </div>
  );
}
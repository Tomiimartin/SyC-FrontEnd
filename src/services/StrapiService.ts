import axios from "axios"
import { ApunteAPISchema } from "../schema/recipes-schema";


export async function getApuntes(año : string) {
    const url = `${import.meta.env.VITE_URLSTRAPI}?filters[year][$eq]=${año}&populate=*`;
    const { data } = await axios(url);
    const result = ApunteAPISchema.safeParse(data)
    if (result.success) {
        return result.data
    }else{
       throw new Error("Ocurrió un error en el llamado de la API");
    }
}


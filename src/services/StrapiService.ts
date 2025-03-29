import axios from "axios"
import { ApunteAPISchema } from "../schema/recipes-schema";

export async function getApuntes(año : string) {
    const url = `http://localhost:1337/api/apuntes?filters[year][$eq]=${año}&populate=*`;
    const { data } = await axios(url);
    console.log(data);
    const result = ApunteAPISchema.safeParse(data)
    console.log(result);
    if (result.success) {
        return result.data
    }else{
        console.log("Ocurrio un error en el llamado de la api ===",result.error);
    }
}


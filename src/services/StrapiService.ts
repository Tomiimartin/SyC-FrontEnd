import axios from "axios"
import { ApunteAPISchema } from "../schema/recipes-schema";

export async function getApuntes(año : string) {
    const url = `http://localhost:1337/api/${año}s?populate=*`;
    const { data } = await axios(url);
    const result = ApunteAPISchema.safeParse(data)
    if (result.success) {
        return result.data
    }else{
        console.log("Ocurrio un error en el llamado de la api ===",result.error);
    }
}


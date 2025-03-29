import { z } from "zod"
import { ApunteAPISchema } from "../schema/recipes-schema"

export type Apunte = z.infer<typeof ApunteAPISchema>

export type CardsMateriaPromps = {
    data: Apunte["data"][0]
}


export type AppContextProps = {
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export type AppProviderProps = {
    children: React.ReactNode;
}


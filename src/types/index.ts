import { z } from "zod"
import { ApunteAPISchema } from "../schema/recipes-schema"

export type Apunte = z.infer<typeof ApunteAPISchema>

export type CardsMateriaPromps = {
    data: Apunte["data"][0]
}
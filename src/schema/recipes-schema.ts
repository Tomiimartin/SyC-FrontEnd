import { z } from "zod"

export const ApunteAPISchema = z.object({
    data: z.array(
        z.object({
            fecha: z.string(),
            materia: z.string(),
            url: z.string(),
            img: z.object({
                name: z.string(),
                url: z.string()
            }),
        })
    )
})
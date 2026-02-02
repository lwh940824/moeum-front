import { z } from "zod";

export const categoryResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
    categoryType: z.enum(["INCOME", "EXPENSE"]),
    imageUrl: z.string(),
    investmentYn: z.string(),
    children: z.array(z.object({
        id: z.number(),
        name: z.string(),
        categoryType: z.enum(["INCOME", "EXPENSE"]),
        imageUrl: z.string(),
    })),
});
import { z } from "zod";

const createBlogsValidation = z.object({
    body:z.object({
        title:z.string(),
        content:z.string(),
        author:z.string(),
        isPublished:z.boolean().optional()
    })
})

export const blogValidation ={
    createBlogsValidation
}
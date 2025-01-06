import { z } from "zod";

const loginValidationSchema = z.object({
    body:z.object({
        email:z.string({required_error:"email is required"}),
        password:z.string({required_error:"password is required"})
    })
})



const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'password must be string',
    })
    .max(20, { message: 'password cannot be more than 20 char ' })
    .optional(),
});


export const authValidation = {
userValidationSchema,
loginValidationSchema
}
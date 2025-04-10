import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type SignInType = z.infer<typeof SignInSchema>;

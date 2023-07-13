import { z } from "zod";

export const createOrderSchema = z.object({
  description: z.string().optional(),
  route: z.string(). optional(),
  status: z.string().optional()

});

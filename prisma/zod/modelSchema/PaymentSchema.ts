import { z } from 'zod';

/////////////////////////////////////////
// PAYMENT SCHEMA
/////////////////////////////////////////

export const PaymentSchema = z.object({
  id: z.string().cuid(),
  memberId: z.string(),
  startMonth: z.string(),
  validTill: z.coerce.date(),
  duration: z.number().int(),
  amount: z.number(),
  paid: z.boolean(),
  paidAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
})

export type Payment = z.infer<typeof PaymentSchema>

export default PaymentSchema;

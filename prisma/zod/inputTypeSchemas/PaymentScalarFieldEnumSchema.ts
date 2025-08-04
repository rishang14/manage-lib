import { z } from 'zod';

export const PaymentScalarFieldEnumSchema = z.enum(['id','memberId','startMonth','validTill','duration','amount','paid','paidAt','createdAt']);

export default PaymentScalarFieldEnumSchema;

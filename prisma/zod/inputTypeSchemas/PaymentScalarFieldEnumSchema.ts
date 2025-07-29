import { z } from 'zod';

export const PaymentScalarFieldEnumSchema = z.enum(['id','memberId','month','amount','paid','paidAt','createdAt']);

export default PaymentScalarFieldEnumSchema;

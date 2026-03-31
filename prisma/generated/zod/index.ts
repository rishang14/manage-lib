import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','image','createdAt','updatedAt']);

export const SessionScalarFieldEnumSchema = z.enum(['id','expiresAt','token','createdAt','updatedAt','ipAddress','userAgent','userId']);

export const AccountScalarFieldEnumSchema = z.enum(['id','accountId','providerId','userId','accessToken','refreshToken','idToken','accessTokenExpiresAt','refreshTokenExpiresAt','scope','password','createdAt','updatedAt']);

export const VerificationScalarFieldEnumSchema = z.enum(['id','identifier','value','expiresAt','createdAt','updatedAt']);

export const LibraryScalarFieldEnumSchema = z.enum(['id','name','ownerId','createdAt']);

export const SeatScalarFieldEnumSchema = z.enum(['id','seatNumber','libraryId']);

export const MemberScalarFieldEnumSchema = z.enum(['id','name','phone','joinedAt','libraryId']);

export const ShiftScalarFieldEnumSchema = z.enum(['id','name','startTime','endTime','libraryId']);

export const BookingScalarFieldEnumSchema = z.enum(['id','seatId','memberId','date','shiftId','createdAt']);

export const PaymentScalarFieldEnumSchema = z.enum(['id','memberId','startMonth','validTill','duration','amount','paid','paidAt','createdAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  userId: z.string(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  userId: z.string(),
  accessToken: z.string().nullable(),
  refreshToken: z.string().nullable(),
  idToken: z.string().nullable(),
  accessTokenExpiresAt: z.coerce.date().nullable(),
  refreshTokenExpiresAt: z.coerce.date().nullable(),
  scope: z.string().nullable(),
  password: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// VERIFICATION SCHEMA
/////////////////////////////////////////

export const VerificationSchema = z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().nullable(),
  updatedAt: z.coerce.date().nullable(),
})

export type Verification = z.infer<typeof VerificationSchema>

/////////////////////////////////////////
// LIBRARY SCHEMA
/////////////////////////////////////////

export const LibrarySchema = z.object({
  id: z.cuid(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date(),
})

export type Library = z.infer<typeof LibrarySchema>

/////////////////////////////////////////
// SEAT SCHEMA
/////////////////////////////////////////

export const SeatSchema = z.object({
  id: z.cuid(),
  seatNumber: z.string(),
  libraryId: z.string(),
})

export type Seat = z.infer<typeof SeatSchema>

/////////////////////////////////////////
// MEMBER SCHEMA
/////////////////////////////////////////

export const MemberSchema = z.object({
  id: z.cuid(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date(),
  libraryId: z.string(),
})

export type Member = z.infer<typeof MemberSchema>

/////////////////////////////////////////
// SHIFT SCHEMA
/////////////////////////////////////////

export const ShiftSchema = z.object({
  id: z.cuid(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  libraryId: z.string(),
})

export type Shift = z.infer<typeof ShiftSchema>

/////////////////////////////////////////
// BOOKING SCHEMA
/////////////////////////////////////////

export const BookingSchema = z.object({
  id: z.cuid(),
  seatId: z.string(),
  memberId: z.string(),
  date: z.coerce.date(),
  shiftId: z.string(),
  createdAt: z.coerce.date(),
})

export type Booking = z.infer<typeof BookingSchema>

/////////////////////////////////////////
// PAYMENT SCHEMA
/////////////////////////////////////////

export const PaymentSchema = z.object({
  id: z.cuid(),
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

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  Library: z.union([z.boolean(),z.lazy(() => LibraryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  sessions: z.boolean().optional(),
  accounts: z.boolean().optional(),
  Library: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  Library: z.union([z.boolean(),z.lazy(() => LibraryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  token: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  accountId: z.boolean().optional(),
  providerId: z.boolean().optional(),
  userId: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  idToken: z.boolean().optional(),
  accessTokenExpiresAt: z.boolean().optional(),
  refreshTokenExpiresAt: z.boolean().optional(),
  scope: z.boolean().optional(),
  password: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// VERIFICATION
//------------------------------------------------------

export const VerificationSelectSchema: z.ZodType<Prisma.VerificationSelect> = z.object({
  id: z.boolean().optional(),
  identifier: z.boolean().optional(),
  value: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

// LIBRARY
//------------------------------------------------------

export const LibraryIncludeSchema: z.ZodType<Prisma.LibraryInclude> = z.object({
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  seats: z.union([z.boolean(),z.lazy(() => SeatFindManyArgsSchema)]).optional(),
  members: z.union([z.boolean(),z.lazy(() => MemberFindManyArgsSchema)]).optional(),
  shifts: z.union([z.boolean(),z.lazy(() => ShiftFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LibraryCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const LibraryArgsSchema: z.ZodType<Prisma.LibraryDefaultArgs> = z.object({
  select: z.lazy(() => LibrarySelectSchema).optional(),
  include: z.lazy(() => LibraryIncludeSchema).optional(),
}).strict();

export const LibraryCountOutputTypeArgsSchema: z.ZodType<Prisma.LibraryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LibraryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const LibraryCountOutputTypeSelectSchema: z.ZodType<Prisma.LibraryCountOutputTypeSelect> = z.object({
  seats: z.boolean().optional(),
  members: z.boolean().optional(),
  shifts: z.boolean().optional(),
}).strict();

export const LibrarySelectSchema: z.ZodType<Prisma.LibrarySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  seats: z.union([z.boolean(),z.lazy(() => SeatFindManyArgsSchema)]).optional(),
  members: z.union([z.boolean(),z.lazy(() => MemberFindManyArgsSchema)]).optional(),
  shifts: z.union([z.boolean(),z.lazy(() => ShiftFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LibraryCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SEAT
//------------------------------------------------------

export const SeatIncludeSchema: z.ZodType<Prisma.SeatInclude> = z.object({
  library: z.union([z.boolean(),z.lazy(() => LibraryArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SeatCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const SeatArgsSchema: z.ZodType<Prisma.SeatDefaultArgs> = z.object({
  select: z.lazy(() => SeatSelectSchema).optional(),
  include: z.lazy(() => SeatIncludeSchema).optional(),
}).strict();

export const SeatCountOutputTypeArgsSchema: z.ZodType<Prisma.SeatCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SeatCountOutputTypeSelectSchema).nullish(),
}).strict();

export const SeatCountOutputTypeSelectSchema: z.ZodType<Prisma.SeatCountOutputTypeSelect> = z.object({
  bookings: z.boolean().optional(),
}).strict();

export const SeatSelectSchema: z.ZodType<Prisma.SeatSelect> = z.object({
  id: z.boolean().optional(),
  seatNumber: z.boolean().optional(),
  libraryId: z.boolean().optional(),
  library: z.union([z.boolean(),z.lazy(() => LibraryArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SeatCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MEMBER
//------------------------------------------------------

export const MemberIncludeSchema: z.ZodType<Prisma.MemberInclude> = z.object({
  library: z.union([z.boolean(),z.lazy(() => LibraryArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  payments: z.union([z.boolean(),z.lazy(() => PaymentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MemberCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const MemberArgsSchema: z.ZodType<Prisma.MemberDefaultArgs> = z.object({
  select: z.lazy(() => MemberSelectSchema).optional(),
  include: z.lazy(() => MemberIncludeSchema).optional(),
}).strict();

export const MemberCountOutputTypeArgsSchema: z.ZodType<Prisma.MemberCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MemberCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MemberCountOutputTypeSelectSchema: z.ZodType<Prisma.MemberCountOutputTypeSelect> = z.object({
  bookings: z.boolean().optional(),
  payments: z.boolean().optional(),
}).strict();

export const MemberSelectSchema: z.ZodType<Prisma.MemberSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  phone: z.boolean().optional(),
  joinedAt: z.boolean().optional(),
  libraryId: z.boolean().optional(),
  library: z.union([z.boolean(),z.lazy(() => LibraryArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  payments: z.union([z.boolean(),z.lazy(() => PaymentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MemberCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SHIFT
//------------------------------------------------------

export const ShiftIncludeSchema: z.ZodType<Prisma.ShiftInclude> = z.object({
  library: z.union([z.boolean(),z.lazy(() => LibraryArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ShiftCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const ShiftArgsSchema: z.ZodType<Prisma.ShiftDefaultArgs> = z.object({
  select: z.lazy(() => ShiftSelectSchema).optional(),
  include: z.lazy(() => ShiftIncludeSchema).optional(),
}).strict();

export const ShiftCountOutputTypeArgsSchema: z.ZodType<Prisma.ShiftCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ShiftCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ShiftCountOutputTypeSelectSchema: z.ZodType<Prisma.ShiftCountOutputTypeSelect> = z.object({
  bookings: z.boolean().optional(),
}).strict();

export const ShiftSelectSchema: z.ZodType<Prisma.ShiftSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  libraryId: z.boolean().optional(),
  library: z.union([z.boolean(),z.lazy(() => LibraryArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ShiftCountOutputTypeArgsSchema)]).optional(),
}).strict()

// BOOKING
//------------------------------------------------------

export const BookingIncludeSchema: z.ZodType<Prisma.BookingInclude> = z.object({
  seat: z.union([z.boolean(),z.lazy(() => SeatArgsSchema)]).optional(),
  member: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
  shift: z.union([z.boolean(),z.lazy(() => ShiftArgsSchema)]).optional(),
}).strict();

export const BookingArgsSchema: z.ZodType<Prisma.BookingDefaultArgs> = z.object({
  select: z.lazy(() => BookingSelectSchema).optional(),
  include: z.lazy(() => BookingIncludeSchema).optional(),
}).strict();

export const BookingSelectSchema: z.ZodType<Prisma.BookingSelect> = z.object({
  id: z.boolean().optional(),
  seatId: z.boolean().optional(),
  memberId: z.boolean().optional(),
  date: z.boolean().optional(),
  shiftId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  seat: z.union([z.boolean(),z.lazy(() => SeatArgsSchema)]).optional(),
  member: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
  shift: z.union([z.boolean(),z.lazy(() => ShiftArgsSchema)]).optional(),
}).strict()

// PAYMENT
//------------------------------------------------------

export const PaymentIncludeSchema: z.ZodType<Prisma.PaymentInclude> = z.object({
  member: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
}).strict();

export const PaymentArgsSchema: z.ZodType<Prisma.PaymentDefaultArgs> = z.object({
  select: z.lazy(() => PaymentSelectSchema).optional(),
  include: z.lazy(() => PaymentIncludeSchema).optional(),
}).strict();

export const PaymentSelectSchema: z.ZodType<Prisma.PaymentSelect> = z.object({
  id: z.boolean().optional(),
  memberId: z.boolean().optional(),
  startMonth: z.boolean().optional(),
  validTill: z.boolean().optional(),
  duration: z.boolean().optional(),
  amount: z.boolean().optional(),
  paid: z.boolean().optional(),
  paidAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  member: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  Library: z.lazy(() => LibraryListRelationFilterSchema).optional(),
});

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  Library: z.lazy(() => LibraryOrderByRelationAggregateInputSchema).optional(),
});

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  Library: z.lazy(() => LibraryListRelationFilterSchema).optional(),
}));

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
});

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema), z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema), z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
});

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAgent: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
});

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    token: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    token: z.string(),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  token: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema), z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema), z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
}));

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAgent: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional(),
});

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema), z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema), z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  ipAddress: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
});

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  accountId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  idToken: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
});

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  refreshToken: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  idToken: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  accessTokenExpiresAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  refreshTokenExpiresAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  password: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
});

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  accountId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  idToken: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
}));

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  refreshToken: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  idToken: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  accessTokenExpiresAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  refreshTokenExpiresAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  password: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
});

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema), z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema), z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  accountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  idToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const VerificationWhereInputSchema: z.ZodType<Prisma.VerificationWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => VerificationWhereInputSchema), z.lazy(() => VerificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationWhereInputSchema), z.lazy(() => VerificationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
});

export const VerificationOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
});

export const VerificationWhereUniqueInputSchema: z.ZodType<Prisma.VerificationWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => VerificationWhereInputSchema), z.lazy(() => VerificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationWhereInputSchema), z.lazy(() => VerificationWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
}));

export const VerificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => VerificationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationMinOrderByAggregateInputSchema).optional(),
});

export const VerificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema), z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema), z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
});

export const LibraryWhereInputSchema: z.ZodType<Prisma.LibraryWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LibraryWhereInputSchema), z.lazy(() => LibraryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LibraryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LibraryWhereInputSchema), z.lazy(() => LibraryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  owner: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
  seats: z.lazy(() => SeatListRelationFilterSchema).optional(),
  members: z.lazy(() => MemberListRelationFilterSchema).optional(),
  shifts: z.lazy(() => ShiftListRelationFilterSchema).optional(),
});

export const LibraryOrderByWithRelationInputSchema: z.ZodType<Prisma.LibraryOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  seats: z.lazy(() => SeatOrderByRelationAggregateInputSchema).optional(),
  members: z.lazy(() => MemberOrderByRelationAggregateInputSchema).optional(),
  shifts: z.lazy(() => ShiftOrderByRelationAggregateInputSchema).optional(),
});

export const LibraryWhereUniqueInputSchema: z.ZodType<Prisma.LibraryWhereUniqueInput> = z.object({
  id: z.cuid(),
})
.and(z.strictObject({
  id: z.cuid().optional(),
  AND: z.union([ z.lazy(() => LibraryWhereInputSchema), z.lazy(() => LibraryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LibraryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LibraryWhereInputSchema), z.lazy(() => LibraryWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  owner: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
  seats: z.lazy(() => SeatListRelationFilterSchema).optional(),
  members: z.lazy(() => MemberListRelationFilterSchema).optional(),
  shifts: z.lazy(() => ShiftListRelationFilterSchema).optional(),
}));

export const LibraryOrderByWithAggregationInputSchema: z.ZodType<Prisma.LibraryOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LibraryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LibraryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LibraryMinOrderByAggregateInputSchema).optional(),
});

export const LibraryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LibraryScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LibraryScalarWhereWithAggregatesInputSchema), z.lazy(() => LibraryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LibraryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LibraryScalarWhereWithAggregatesInputSchema), z.lazy(() => LibraryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const SeatWhereInputSchema: z.ZodType<Prisma.SeatWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SeatWhereInputSchema), z.lazy(() => SeatWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SeatWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SeatWhereInputSchema), z.lazy(() => SeatWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  seatNumber: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  library: z.union([ z.lazy(() => LibraryScalarRelationFilterSchema), z.lazy(() => LibraryWhereInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional(),
});

export const SeatOrderByWithRelationInputSchema: z.ZodType<Prisma.SeatOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatNumber: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
  library: z.lazy(() => LibraryOrderByWithRelationInputSchema).optional(),
  bookings: z.lazy(() => BookingOrderByRelationAggregateInputSchema).optional(),
});

export const SeatWhereUniqueInputSchema: z.ZodType<Prisma.SeatWhereUniqueInput> = z.object({
  id: z.cuid(),
})
.and(z.strictObject({
  id: z.cuid().optional(),
  AND: z.union([ z.lazy(() => SeatWhereInputSchema), z.lazy(() => SeatWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SeatWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SeatWhereInputSchema), z.lazy(() => SeatWhereInputSchema).array() ]).optional(),
  seatNumber: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  library: z.union([ z.lazy(() => LibraryScalarRelationFilterSchema), z.lazy(() => LibraryWhereInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional(),
}));

export const SeatOrderByWithAggregationInputSchema: z.ZodType<Prisma.SeatOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatNumber: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SeatCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SeatMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SeatMinOrderByAggregateInputSchema).optional(),
});

export const SeatScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SeatScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SeatScalarWhereWithAggregatesInputSchema), z.lazy(() => SeatScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SeatScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SeatScalarWhereWithAggregatesInputSchema), z.lazy(() => SeatScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  seatNumber: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
});

export const MemberWhereInputSchema: z.ZodType<Prisma.MemberWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => MemberWhereInputSchema), z.lazy(() => MemberWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberWhereInputSchema), z.lazy(() => MemberWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  library: z.union([ z.lazy(() => LibraryScalarRelationFilterSchema), z.lazy(() => LibraryWhereInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional(),
  payments: z.lazy(() => PaymentListRelationFilterSchema).optional(),
});

export const MemberOrderByWithRelationInputSchema: z.ZodType<Prisma.MemberOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
  library: z.lazy(() => LibraryOrderByWithRelationInputSchema).optional(),
  bookings: z.lazy(() => BookingOrderByRelationAggregateInputSchema).optional(),
  payments: z.lazy(() => PaymentOrderByRelationAggregateInputSchema).optional(),
});

export const MemberWhereUniqueInputSchema: z.ZodType<Prisma.MemberWhereUniqueInput> = z.object({
  id: z.cuid(),
})
.and(z.strictObject({
  id: z.cuid().optional(),
  AND: z.union([ z.lazy(() => MemberWhereInputSchema), z.lazy(() => MemberWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberWhereInputSchema), z.lazy(() => MemberWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  library: z.union([ z.lazy(() => LibraryScalarRelationFilterSchema), z.lazy(() => LibraryWhereInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional(),
  payments: z.lazy(() => PaymentListRelationFilterSchema).optional(),
}));

export const MemberOrderByWithAggregationInputSchema: z.ZodType<Prisma.MemberOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MemberCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MemberMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MemberMinOrderByAggregateInputSchema).optional(),
});

export const MemberScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MemberScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => MemberScalarWhereWithAggregatesInputSchema), z.lazy(() => MemberScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberScalarWhereWithAggregatesInputSchema), z.lazy(() => MemberScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
});

export const ShiftWhereInputSchema: z.ZodType<Prisma.ShiftWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ShiftWhereInputSchema), z.lazy(() => ShiftWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ShiftWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ShiftWhereInputSchema), z.lazy(() => ShiftWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  library: z.union([ z.lazy(() => LibraryScalarRelationFilterSchema), z.lazy(() => LibraryWhereInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional(),
});

export const ShiftOrderByWithRelationInputSchema: z.ZodType<Prisma.ShiftOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
  library: z.lazy(() => LibraryOrderByWithRelationInputSchema).optional(),
  bookings: z.lazy(() => BookingOrderByRelationAggregateInputSchema).optional(),
});

export const ShiftWhereUniqueInputSchema: z.ZodType<Prisma.ShiftWhereUniqueInput> = z.object({
  id: z.cuid(),
})
.and(z.strictObject({
  id: z.cuid().optional(),
  AND: z.union([ z.lazy(() => ShiftWhereInputSchema), z.lazy(() => ShiftWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ShiftWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ShiftWhereInputSchema), z.lazy(() => ShiftWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  library: z.union([ z.lazy(() => LibraryScalarRelationFilterSchema), z.lazy(() => LibraryWhereInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional(),
}));

export const ShiftOrderByWithAggregationInputSchema: z.ZodType<Prisma.ShiftOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ShiftCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ShiftMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ShiftMinOrderByAggregateInputSchema).optional(),
});

export const ShiftScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ShiftScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ShiftScalarWhereWithAggregatesInputSchema), z.lazy(() => ShiftScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ShiftScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ShiftScalarWhereWithAggregatesInputSchema), z.lazy(() => ShiftScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
});

export const BookingWhereInputSchema: z.ZodType<Prisma.BookingWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BookingWhereInputSchema), z.lazy(() => BookingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingWhereInputSchema), z.lazy(() => BookingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  seatId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  memberId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  shiftId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  seat: z.union([ z.lazy(() => SeatScalarRelationFilterSchema), z.lazy(() => SeatWhereInputSchema) ]).optional(),
  member: z.union([ z.lazy(() => MemberScalarRelationFilterSchema), z.lazy(() => MemberWhereInputSchema) ]).optional(),
  shift: z.union([ z.lazy(() => ShiftScalarRelationFilterSchema), z.lazy(() => ShiftWhereInputSchema) ]).optional(),
});

export const BookingOrderByWithRelationInputSchema: z.ZodType<Prisma.BookingOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatId: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  shiftId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  seat: z.lazy(() => SeatOrderByWithRelationInputSchema).optional(),
  member: z.lazy(() => MemberOrderByWithRelationInputSchema).optional(),
  shift: z.lazy(() => ShiftOrderByWithRelationInputSchema).optional(),
});

export const BookingWhereUniqueInputSchema: z.ZodType<Prisma.BookingWhereUniqueInput> = z.union([
  z.object({
    id: z.cuid(),
    seatId_shiftId: z.lazy(() => BookingSeatIdShiftIdCompoundUniqueInputSchema),
    memberId_seatId: z.lazy(() => BookingMemberIdSeatIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.cuid(),
    seatId_shiftId: z.lazy(() => BookingSeatIdShiftIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.cuid(),
    memberId_seatId: z.lazy(() => BookingMemberIdSeatIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.cuid(),
  }),
  z.object({
    seatId_shiftId: z.lazy(() => BookingSeatIdShiftIdCompoundUniqueInputSchema),
    memberId_seatId: z.lazy(() => BookingMemberIdSeatIdCompoundUniqueInputSchema),
  }),
  z.object({
    seatId_shiftId: z.lazy(() => BookingSeatIdShiftIdCompoundUniqueInputSchema),
  }),
  z.object({
    memberId_seatId: z.lazy(() => BookingMemberIdSeatIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.cuid().optional(),
  seatId_shiftId: z.lazy(() => BookingSeatIdShiftIdCompoundUniqueInputSchema).optional(),
  memberId_seatId: z.lazy(() => BookingMemberIdSeatIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => BookingWhereInputSchema), z.lazy(() => BookingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingWhereInputSchema), z.lazy(() => BookingWhereInputSchema).array() ]).optional(),
  seatId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  memberId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  shiftId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  seat: z.union([ z.lazy(() => SeatScalarRelationFilterSchema), z.lazy(() => SeatWhereInputSchema) ]).optional(),
  member: z.union([ z.lazy(() => MemberScalarRelationFilterSchema), z.lazy(() => MemberWhereInputSchema) ]).optional(),
  shift: z.union([ z.lazy(() => ShiftScalarRelationFilterSchema), z.lazy(() => ShiftWhereInputSchema) ]).optional(),
}));

export const BookingOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookingOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatId: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  shiftId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BookingCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookingMinOrderByAggregateInputSchema).optional(),
});

export const BookingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BookingScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BookingScalarWhereWithAggregatesInputSchema), z.lazy(() => BookingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingScalarWhereWithAggregatesInputSchema), z.lazy(() => BookingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  seatId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  memberId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  shiftId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const PaymentWhereInputSchema: z.ZodType<Prisma.PaymentWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PaymentWhereInputSchema), z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentWhereInputSchema), z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  memberId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  startMonth: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  validTill: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  paid: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  paidAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  member: z.union([ z.lazy(() => MemberScalarRelationFilterSchema), z.lazy(() => MemberWhereInputSchema) ]).optional(),
});

export const PaymentOrderByWithRelationInputSchema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  startMonth: z.lazy(() => SortOrderSchema).optional(),
  validTill: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  paid: z.lazy(() => SortOrderSchema).optional(),
  paidAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  member: z.lazy(() => MemberOrderByWithRelationInputSchema).optional(),
});

export const PaymentWhereUniqueInputSchema: z.ZodType<Prisma.PaymentWhereUniqueInput> = z.object({
  id: z.cuid(),
})
.and(z.strictObject({
  id: z.cuid().optional(),
  AND: z.union([ z.lazy(() => PaymentWhereInputSchema), z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentWhereInputSchema), z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  memberId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  startMonth: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  validTill: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  paid: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  paidAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  member: z.union([ z.lazy(() => MemberScalarRelationFilterSchema), z.lazy(() => MemberWhereInputSchema) ]).optional(),
}));

export const PaymentOrderByWithAggregationInputSchema: z.ZodType<Prisma.PaymentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  startMonth: z.lazy(() => SortOrderSchema).optional(),
  validTill: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  paid: z.lazy(() => SortOrderSchema).optional(),
  paidAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PaymentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PaymentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PaymentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PaymentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PaymentSumOrderByAggregateInputSchema).optional(),
});

export const PaymentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PaymentScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema), z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema), z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  memberId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  startMonth: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  validTill: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  duration: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  amount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema), z.number() ]).optional(),
  paid: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  paidAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  Library: z.lazy(() => LibraryCreateNestedManyWithoutOwnerInputSchema).optional(),
});

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Library: z.lazy(() => LibraryUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
});

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  Library: z.lazy(() => LibraryUpdateManyWithoutOwnerNestedInputSchema).optional(),
});

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Library: z.lazy(() => LibraryUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
});

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.strictObject({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema),
});

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.strictObject({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  userId: z.string(),
});

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional(),
});

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.strictObject({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  userId: z.string(),
});

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.strictObject({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema),
});

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.strictObject({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  userId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional(),
});

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.strictObject({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  userId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VerificationCreateInputSchema: z.ZodType<Prisma.VerificationCreateInput> = z.strictObject({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional().nullable(),
});

export const VerificationUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationUncheckedCreateInput> = z.strictObject({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional().nullable(),
});

export const VerificationUpdateInputSchema: z.ZodType<Prisma.VerificationUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const VerificationUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const VerificationCreateManyInputSchema: z.ZodType<Prisma.VerificationCreateManyInput> = z.strictObject({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional().nullable(),
});

export const VerificationUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const VerificationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const LibraryCreateInputSchema: z.ZodType<Prisma.LibraryCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutLibraryInputSchema),
  seats: z.lazy(() => SeatCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftCreateNestedManyWithoutLibraryInputSchema).optional(),
});

export const LibraryUncheckedCreateInputSchema: z.ZodType<Prisma.LibraryUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  seats: z.lazy(() => SeatUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
});

export const LibraryUpdateInputSchema: z.ZodType<Prisma.LibraryUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutLibraryNestedInputSchema).optional(),
  seats: z.lazy(() => SeatUpdateManyWithoutLibraryNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUpdateManyWithoutLibraryNestedInputSchema).optional(),
});

export const LibraryUncheckedUpdateInputSchema: z.ZodType<Prisma.LibraryUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  seats: z.lazy(() => SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
});

export const LibraryCreateManyInputSchema: z.ZodType<Prisma.LibraryCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
});

export const LibraryUpdateManyMutationInputSchema: z.ZodType<Prisma.LibraryUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const LibraryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LibraryUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SeatCreateInputSchema: z.ZodType<Prisma.SeatCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  seatNumber: z.string(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutSeatsInputSchema),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutSeatInputSchema).optional(),
});

export const SeatUncheckedCreateInputSchema: z.ZodType<Prisma.SeatUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  seatNumber: z.string(),
  libraryId: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutSeatInputSchema).optional(),
});

export const SeatUpdateInputSchema: z.ZodType<Prisma.SeatUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  library: z.lazy(() => LibraryUpdateOneRequiredWithoutSeatsNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutSeatNestedInputSchema).optional(),
});

export const SeatUncheckedUpdateInputSchema: z.ZodType<Prisma.SeatUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutSeatNestedInputSchema).optional(),
});

export const SeatCreateManyInputSchema: z.ZodType<Prisma.SeatCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  seatNumber: z.string(),
  libraryId: z.string(),
});

export const SeatUpdateManyMutationInputSchema: z.ZodType<Prisma.SeatUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SeatUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SeatUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const MemberCreateInputSchema: z.ZodType<Prisma.MemberCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutMembersInputSchema),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutMemberInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutMemberInputSchema).optional(),
});

export const MemberUncheckedCreateInputSchema: z.ZodType<Prisma.MemberUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  libraryId: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutMemberInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutMemberInputSchema).optional(),
});

export const MemberUpdateInputSchema: z.ZodType<Prisma.MemberUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  library: z.lazy(() => LibraryUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutMemberNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutMemberNestedInputSchema).optional(),
});

export const MemberUncheckedUpdateInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutMemberNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema).optional(),
});

export const MemberCreateManyInputSchema: z.ZodType<Prisma.MemberCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  libraryId: z.string(),
});

export const MemberUpdateManyMutationInputSchema: z.ZodType<Prisma.MemberUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const MemberUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ShiftCreateInputSchema: z.ZodType<Prisma.ShiftCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutShiftsInputSchema),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutShiftInputSchema).optional(),
});

export const ShiftUncheckedCreateInputSchema: z.ZodType<Prisma.ShiftUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  libraryId: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutShiftInputSchema).optional(),
});

export const ShiftUpdateInputSchema: z.ZodType<Prisma.ShiftUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  library: z.lazy(() => LibraryUpdateOneRequiredWithoutShiftsNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutShiftNestedInputSchema).optional(),
});

export const ShiftUncheckedUpdateInputSchema: z.ZodType<Prisma.ShiftUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutShiftNestedInputSchema).optional(),
});

export const ShiftCreateManyInputSchema: z.ZodType<Prisma.ShiftCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  libraryId: z.string(),
});

export const ShiftUpdateManyMutationInputSchema: z.ZodType<Prisma.ShiftUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ShiftUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ShiftUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const BookingCreateInputSchema: z.ZodType<Prisma.BookingCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  seat: z.lazy(() => SeatCreateNestedOneWithoutBookingsInputSchema),
  member: z.lazy(() => MemberCreateNestedOneWithoutBookingsInputSchema),
  shift: z.lazy(() => ShiftCreateNestedOneWithoutBookingsInputSchema),
});

export const BookingUncheckedCreateInputSchema: z.ZodType<Prisma.BookingUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  seatId: z.string(),
  memberId: z.string(),
  date: z.coerce.date(),
  shiftId: z.string(),
  createdAt: z.coerce.date().optional(),
});

export const BookingUpdateInputSchema: z.ZodType<Prisma.BookingUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  seat: z.lazy(() => SeatUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  member: z.lazy(() => MemberUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  shift: z.lazy(() => ShiftUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
});

export const BookingUncheckedUpdateInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  memberId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  shiftId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const BookingCreateManyInputSchema: z.ZodType<Prisma.BookingCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  seatId: z.string(),
  memberId: z.string(),
  date: z.coerce.date(),
  shiftId: z.string(),
  createdAt: z.coerce.date().optional(),
});

export const BookingUpdateManyMutationInputSchema: z.ZodType<Prisma.BookingUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const BookingUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  memberId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  shiftId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PaymentCreateInputSchema: z.ZodType<Prisma.PaymentCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  startMonth: z.string(),
  validTill: z.coerce.date(),
  duration: z.number().int(),
  amount: z.number(),
  paid: z.boolean().optional(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  member: z.lazy(() => MemberCreateNestedOneWithoutPaymentsInputSchema),
});

export const PaymentUncheckedCreateInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  memberId: z.string(),
  startMonth: z.string(),
  validTill: z.coerce.date(),
  duration: z.number().int(),
  amount: z.number(),
  paid: z.boolean().optional(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
});

export const PaymentUpdateInputSchema: z.ZodType<Prisma.PaymentUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startMonth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  paid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paidAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member: z.lazy(() => MemberUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
});

export const PaymentUncheckedUpdateInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  memberId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startMonth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  paid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paidAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PaymentCreateManyInputSchema: z.ZodType<Prisma.PaymentCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  memberId: z.string(),
  startMonth: z.string(),
  validTill: z.coerce.date(),
  duration: z.number().int(),
  amount: z.number(),
  paid: z.boolean().optional(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
});

export const PaymentUpdateManyMutationInputSchema: z.ZodType<Prisma.PaymentUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startMonth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  paid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paidAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PaymentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  memberId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startMonth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  paid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paidAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
});

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
});

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.strictObject({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional(),
});

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.strictObject({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional(),
});

export const LibraryListRelationFilterSchema: z.ZodType<Prisma.LibraryListRelationFilter> = z.strictObject({
  every: z.lazy(() => LibraryWhereInputSchema).optional(),
  some: z.lazy(() => LibraryWhereInputSchema).optional(),
  none: z.lazy(() => LibraryWhereInputSchema).optional(),
});

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.strictObject({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional(),
});

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const LibraryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LibraryOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
});

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
});

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional(),
});

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  userAgent: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
});

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  userAgent: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
});

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  userAgent: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
});

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.strictObject({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
});

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  idToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  idToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  idToken: z.lazy(() => SortOrderSchema).optional(),
  accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
});

export const VerificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const VerificationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const VerificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const SeatListRelationFilterSchema: z.ZodType<Prisma.SeatListRelationFilter> = z.strictObject({
  every: z.lazy(() => SeatWhereInputSchema).optional(),
  some: z.lazy(() => SeatWhereInputSchema).optional(),
  none: z.lazy(() => SeatWhereInputSchema).optional(),
});

export const MemberListRelationFilterSchema: z.ZodType<Prisma.MemberListRelationFilter> = z.strictObject({
  every: z.lazy(() => MemberWhereInputSchema).optional(),
  some: z.lazy(() => MemberWhereInputSchema).optional(),
  none: z.lazy(() => MemberWhereInputSchema).optional(),
});

export const ShiftListRelationFilterSchema: z.ZodType<Prisma.ShiftListRelationFilter> = z.strictObject({
  every: z.lazy(() => ShiftWhereInputSchema).optional(),
  some: z.lazy(() => ShiftWhereInputSchema).optional(),
  none: z.lazy(() => ShiftWhereInputSchema).optional(),
});

export const SeatOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SeatOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const MemberOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MemberOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const ShiftOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ShiftOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const LibraryCountOrderByAggregateInputSchema: z.ZodType<Prisma.LibraryCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export const LibraryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LibraryMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export const LibraryMinOrderByAggregateInputSchema: z.ZodType<Prisma.LibraryMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export const LibraryScalarRelationFilterSchema: z.ZodType<Prisma.LibraryScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => LibraryWhereInputSchema).optional(),
  isNot: z.lazy(() => LibraryWhereInputSchema).optional(),
});

export const BookingListRelationFilterSchema: z.ZodType<Prisma.BookingListRelationFilter> = z.strictObject({
  every: z.lazy(() => BookingWhereInputSchema).optional(),
  some: z.lazy(() => BookingWhereInputSchema).optional(),
  none: z.lazy(() => BookingWhereInputSchema).optional(),
});

export const BookingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BookingOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const SeatCountOrderByAggregateInputSchema: z.ZodType<Prisma.SeatCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatNumber: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
});

export const SeatMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SeatMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatNumber: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
});

export const SeatMinOrderByAggregateInputSchema: z.ZodType<Prisma.SeatMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatNumber: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
});

export const PaymentListRelationFilterSchema: z.ZodType<Prisma.PaymentListRelationFilter> = z.strictObject({
  every: z.lazy(() => PaymentWhereInputSchema).optional(),
  some: z.lazy(() => PaymentWhereInputSchema).optional(),
  none: z.lazy(() => PaymentWhereInputSchema).optional(),
});

export const PaymentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PaymentOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const MemberCountOrderByAggregateInputSchema: z.ZodType<Prisma.MemberCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
});

export const MemberMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MemberMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
});

export const MemberMinOrderByAggregateInputSchema: z.ZodType<Prisma.MemberMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
});

export const ShiftCountOrderByAggregateInputSchema: z.ZodType<Prisma.ShiftCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
});

export const ShiftMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ShiftMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
});

export const ShiftMinOrderByAggregateInputSchema: z.ZodType<Prisma.ShiftMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  libraryId: z.lazy(() => SortOrderSchema).optional(),
});

export const SeatScalarRelationFilterSchema: z.ZodType<Prisma.SeatScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => SeatWhereInputSchema).optional(),
  isNot: z.lazy(() => SeatWhereInputSchema).optional(),
});

export const MemberScalarRelationFilterSchema: z.ZodType<Prisma.MemberScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => MemberWhereInputSchema).optional(),
  isNot: z.lazy(() => MemberWhereInputSchema).optional(),
});

export const ShiftScalarRelationFilterSchema: z.ZodType<Prisma.ShiftScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ShiftWhereInputSchema).optional(),
  isNot: z.lazy(() => ShiftWhereInputSchema).optional(),
});

export const BookingSeatIdShiftIdCompoundUniqueInputSchema: z.ZodType<Prisma.BookingSeatIdShiftIdCompoundUniqueInput> = z.strictObject({
  seatId: z.string(),
  shiftId: z.string(),
});

export const BookingMemberIdSeatIdCompoundUniqueInputSchema: z.ZodType<Prisma.BookingMemberIdSeatIdCompoundUniqueInput> = z.strictObject({
  memberId: z.string(),
  seatId: z.string(),
});

export const BookingCountOrderByAggregateInputSchema: z.ZodType<Prisma.BookingCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatId: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  shiftId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export const BookingMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BookingMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatId: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  shiftId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export const BookingMinOrderByAggregateInputSchema: z.ZodType<Prisma.BookingMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seatId: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  shiftId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
});

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
});

export const PaymentCountOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  startMonth: z.lazy(() => SortOrderSchema).optional(),
  validTill: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  paid: z.lazy(() => SortOrderSchema).optional(),
  paidAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export const PaymentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentAvgOrderByAggregateInput> = z.strictObject({
  duration: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
});

export const PaymentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  startMonth: z.lazy(() => SortOrderSchema).optional(),
  validTill: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  paid: z.lazy(() => SortOrderSchema).optional(),
  paidAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export const PaymentMinOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  memberId: z.lazy(() => SortOrderSchema).optional(),
  startMonth: z.lazy(() => SortOrderSchema).optional(),
  validTill: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  paid: z.lazy(() => SortOrderSchema).optional(),
  paidAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export const PaymentSumOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentSumOrderByAggregateInput> = z.strictObject({
  duration: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
});

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
});

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional(),
});

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema), z.lazy(() => SessionCreateWithoutUserInputSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
});

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountCreateWithoutUserInputSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
});

export const LibraryCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryCreateNestedManyWithoutOwnerInput> = z.strictObject({
  create: z.union([ z.lazy(() => LibraryCreateWithoutOwnerInputSchema), z.lazy(() => LibraryCreateWithoutOwnerInputSchema).array(), z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LibraryCreateOrConnectWithoutOwnerInputSchema), z.lazy(() => LibraryCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LibraryCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema), z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
});

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema), z.lazy(() => SessionCreateWithoutUserInputSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
});

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountCreateWithoutUserInputSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
});

export const LibraryUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUncheckedCreateNestedManyWithoutOwnerInput> = z.strictObject({
  create: z.union([ z.lazy(() => LibraryCreateWithoutOwnerInputSchema), z.lazy(() => LibraryCreateWithoutOwnerInputSchema).array(), z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LibraryCreateOrConnectWithoutOwnerInputSchema), z.lazy(() => LibraryCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LibraryCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema), z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
});

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional(),
});

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.strictObject({
  set: z.boolean().optional(),
});

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional().nullable(),
});

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.strictObject({
  set: z.coerce.date().optional(),
});

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema), z.lazy(() => SessionCreateWithoutUserInputSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
});

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountCreateWithoutUserInputSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
});

export const LibraryUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.LibraryUpdateManyWithoutOwnerNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LibraryCreateWithoutOwnerInputSchema), z.lazy(() => LibraryCreateWithoutOwnerInputSchema).array(), z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LibraryCreateOrConnectWithoutOwnerInputSchema), z.lazy(() => LibraryCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LibraryUpsertWithWhereUniqueWithoutOwnerInputSchema), z.lazy(() => LibraryUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LibraryCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema), z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema), z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema), z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema), z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LibraryUpdateWithWhereUniqueWithoutOwnerInputSchema), z.lazy(() => LibraryUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LibraryUpdateManyWithWhereWithoutOwnerInputSchema), z.lazy(() => LibraryUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LibraryScalarWhereInputSchema), z.lazy(() => LibraryScalarWhereInputSchema).array() ]).optional(),
});

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema), z.lazy(() => SessionCreateWithoutUserInputSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
});

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountCreateWithoutUserInputSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
});

export const LibraryUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.LibraryUncheckedUpdateManyWithoutOwnerNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LibraryCreateWithoutOwnerInputSchema), z.lazy(() => LibraryCreateWithoutOwnerInputSchema).array(), z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LibraryCreateOrConnectWithoutOwnerInputSchema), z.lazy(() => LibraryCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LibraryUpsertWithWhereUniqueWithoutOwnerInputSchema), z.lazy(() => LibraryUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LibraryCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema), z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema), z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema), z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LibraryWhereUniqueInputSchema), z.lazy(() => LibraryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LibraryUpdateWithWhereUniqueWithoutOwnerInputSchema), z.lazy(() => LibraryUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LibraryUpdateManyWithWhereWithoutOwnerInputSchema), z.lazy(() => LibraryUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LibraryScalarWhereInputSchema), z.lazy(() => LibraryScalarWhereInputSchema).array() ]).optional(),
});

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
});

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema), z.lazy(() => UserUpdateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
});

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
});

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.strictObject({
  set: z.coerce.date().optional().nullable(),
});

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema), z.lazy(() => UserUpdateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
});

export const UserCreateNestedOneWithoutLibraryInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutLibraryInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutLibraryInputSchema), z.lazy(() => UserUncheckedCreateWithoutLibraryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLibraryInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
});

export const SeatCreateNestedManyWithoutLibraryInputSchema: z.ZodType<Prisma.SeatCreateNestedManyWithoutLibraryInput> = z.strictObject({
  create: z.union([ z.lazy(() => SeatCreateWithoutLibraryInputSchema), z.lazy(() => SeatCreateWithoutLibraryInputSchema).array(), z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema), z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SeatCreateOrConnectWithoutLibraryInputSchema), z.lazy(() => SeatCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SeatCreateManyLibraryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SeatWhereUniqueInputSchema), z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
});

export const MemberCreateNestedManyWithoutLibraryInputSchema: z.ZodType<Prisma.MemberCreateNestedManyWithoutLibraryInput> = z.strictObject({
  create: z.union([ z.lazy(() => MemberCreateWithoutLibraryInputSchema), z.lazy(() => MemberCreateWithoutLibraryInputSchema).array(), z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema), z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutLibraryInputSchema), z.lazy(() => MemberCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyLibraryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema), z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
});

export const ShiftCreateNestedManyWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftCreateNestedManyWithoutLibraryInput> = z.strictObject({
  create: z.union([ z.lazy(() => ShiftCreateWithoutLibraryInputSchema), z.lazy(() => ShiftCreateWithoutLibraryInputSchema).array(), z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema), z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ShiftCreateOrConnectWithoutLibraryInputSchema), z.lazy(() => ShiftCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ShiftCreateManyLibraryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema), z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
});

export const SeatUncheckedCreateNestedManyWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUncheckedCreateNestedManyWithoutLibraryInput> = z.strictObject({
  create: z.union([ z.lazy(() => SeatCreateWithoutLibraryInputSchema), z.lazy(() => SeatCreateWithoutLibraryInputSchema).array(), z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema), z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SeatCreateOrConnectWithoutLibraryInputSchema), z.lazy(() => SeatCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SeatCreateManyLibraryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SeatWhereUniqueInputSchema), z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
});

export const MemberUncheckedCreateNestedManyWithoutLibraryInputSchema: z.ZodType<Prisma.MemberUncheckedCreateNestedManyWithoutLibraryInput> = z.strictObject({
  create: z.union([ z.lazy(() => MemberCreateWithoutLibraryInputSchema), z.lazy(() => MemberCreateWithoutLibraryInputSchema).array(), z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema), z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutLibraryInputSchema), z.lazy(() => MemberCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyLibraryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema), z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
});

export const ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUncheckedCreateNestedManyWithoutLibraryInput> = z.strictObject({
  create: z.union([ z.lazy(() => ShiftCreateWithoutLibraryInputSchema), z.lazy(() => ShiftCreateWithoutLibraryInputSchema).array(), z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema), z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ShiftCreateOrConnectWithoutLibraryInputSchema), z.lazy(() => ShiftCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ShiftCreateManyLibraryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema), z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
});

export const UserUpdateOneRequiredWithoutLibraryNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutLibraryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutLibraryInputSchema), z.lazy(() => UserUncheckedCreateWithoutLibraryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLibraryInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutLibraryInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutLibraryInputSchema), z.lazy(() => UserUpdateWithoutLibraryInputSchema), z.lazy(() => UserUncheckedUpdateWithoutLibraryInputSchema) ]).optional(),
});

export const SeatUpdateManyWithoutLibraryNestedInputSchema: z.ZodType<Prisma.SeatUpdateManyWithoutLibraryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SeatCreateWithoutLibraryInputSchema), z.lazy(() => SeatCreateWithoutLibraryInputSchema).array(), z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema), z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SeatCreateOrConnectWithoutLibraryInputSchema), z.lazy(() => SeatCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SeatUpsertWithWhereUniqueWithoutLibraryInputSchema), z.lazy(() => SeatUpsertWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SeatCreateManyLibraryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SeatWhereUniqueInputSchema), z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SeatWhereUniqueInputSchema), z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SeatWhereUniqueInputSchema), z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SeatWhereUniqueInputSchema), z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SeatUpdateWithWhereUniqueWithoutLibraryInputSchema), z.lazy(() => SeatUpdateWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SeatUpdateManyWithWhereWithoutLibraryInputSchema), z.lazy(() => SeatUpdateManyWithWhereWithoutLibraryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SeatScalarWhereInputSchema), z.lazy(() => SeatScalarWhereInputSchema).array() ]).optional(),
});

export const MemberUpdateManyWithoutLibraryNestedInputSchema: z.ZodType<Prisma.MemberUpdateManyWithoutLibraryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => MemberCreateWithoutLibraryInputSchema), z.lazy(() => MemberCreateWithoutLibraryInputSchema).array(), z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema), z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutLibraryInputSchema), z.lazy(() => MemberCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MemberUpsertWithWhereUniqueWithoutLibraryInputSchema), z.lazy(() => MemberUpsertWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyLibraryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MemberWhereUniqueInputSchema), z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema), z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MemberWhereUniqueInputSchema), z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema), z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MemberUpdateWithWhereUniqueWithoutLibraryInputSchema), z.lazy(() => MemberUpdateWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MemberUpdateManyWithWhereWithoutLibraryInputSchema), z.lazy(() => MemberUpdateManyWithWhereWithoutLibraryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MemberScalarWhereInputSchema), z.lazy(() => MemberScalarWhereInputSchema).array() ]).optional(),
});

export const ShiftUpdateManyWithoutLibraryNestedInputSchema: z.ZodType<Prisma.ShiftUpdateManyWithoutLibraryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ShiftCreateWithoutLibraryInputSchema), z.lazy(() => ShiftCreateWithoutLibraryInputSchema).array(), z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema), z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ShiftCreateOrConnectWithoutLibraryInputSchema), z.lazy(() => ShiftCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ShiftUpsertWithWhereUniqueWithoutLibraryInputSchema), z.lazy(() => ShiftUpsertWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ShiftCreateManyLibraryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema), z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema), z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema), z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema), z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ShiftUpdateWithWhereUniqueWithoutLibraryInputSchema), z.lazy(() => ShiftUpdateWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ShiftUpdateManyWithWhereWithoutLibraryInputSchema), z.lazy(() => ShiftUpdateManyWithWhereWithoutLibraryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ShiftScalarWhereInputSchema), z.lazy(() => ShiftScalarWhereInputSchema).array() ]).optional(),
});

export const SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema: z.ZodType<Prisma.SeatUncheckedUpdateManyWithoutLibraryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SeatCreateWithoutLibraryInputSchema), z.lazy(() => SeatCreateWithoutLibraryInputSchema).array(), z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema), z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SeatCreateOrConnectWithoutLibraryInputSchema), z.lazy(() => SeatCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SeatUpsertWithWhereUniqueWithoutLibraryInputSchema), z.lazy(() => SeatUpsertWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SeatCreateManyLibraryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SeatWhereUniqueInputSchema), z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SeatWhereUniqueInputSchema), z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SeatWhereUniqueInputSchema), z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SeatWhereUniqueInputSchema), z.lazy(() => SeatWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SeatUpdateWithWhereUniqueWithoutLibraryInputSchema), z.lazy(() => SeatUpdateWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SeatUpdateManyWithWhereWithoutLibraryInputSchema), z.lazy(() => SeatUpdateManyWithWhereWithoutLibraryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SeatScalarWhereInputSchema), z.lazy(() => SeatScalarWhereInputSchema).array() ]).optional(),
});

export const MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateManyWithoutLibraryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => MemberCreateWithoutLibraryInputSchema), z.lazy(() => MemberCreateWithoutLibraryInputSchema).array(), z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema), z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MemberCreateOrConnectWithoutLibraryInputSchema), z.lazy(() => MemberCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MemberUpsertWithWhereUniqueWithoutLibraryInputSchema), z.lazy(() => MemberUpsertWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MemberCreateManyLibraryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MemberWhereUniqueInputSchema), z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema), z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MemberWhereUniqueInputSchema), z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MemberWhereUniqueInputSchema), z.lazy(() => MemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MemberUpdateWithWhereUniqueWithoutLibraryInputSchema), z.lazy(() => MemberUpdateWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MemberUpdateManyWithWhereWithoutLibraryInputSchema), z.lazy(() => MemberUpdateManyWithWhereWithoutLibraryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MemberScalarWhereInputSchema), z.lazy(() => MemberScalarWhereInputSchema).array() ]).optional(),
});

export const ShiftUncheckedUpdateManyWithoutLibraryNestedInputSchema: z.ZodType<Prisma.ShiftUncheckedUpdateManyWithoutLibraryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ShiftCreateWithoutLibraryInputSchema), z.lazy(() => ShiftCreateWithoutLibraryInputSchema).array(), z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema), z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ShiftCreateOrConnectWithoutLibraryInputSchema), z.lazy(() => ShiftCreateOrConnectWithoutLibraryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ShiftUpsertWithWhereUniqueWithoutLibraryInputSchema), z.lazy(() => ShiftUpsertWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ShiftCreateManyLibraryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema), z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema), z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema), z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ShiftWhereUniqueInputSchema), z.lazy(() => ShiftWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ShiftUpdateWithWhereUniqueWithoutLibraryInputSchema), z.lazy(() => ShiftUpdateWithWhereUniqueWithoutLibraryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ShiftUpdateManyWithWhereWithoutLibraryInputSchema), z.lazy(() => ShiftUpdateManyWithWhereWithoutLibraryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ShiftScalarWhereInputSchema), z.lazy(() => ShiftScalarWhereInputSchema).array() ]).optional(),
});

export const LibraryCreateNestedOneWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryCreateNestedOneWithoutSeatsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LibraryCreateWithoutSeatsInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutSeatsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutSeatsInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional(),
});

export const BookingCreateNestedManyWithoutSeatInputSchema: z.ZodType<Prisma.BookingCreateNestedManyWithoutSeatInput> = z.strictObject({
  create: z.union([ z.lazy(() => BookingCreateWithoutSeatInputSchema), z.lazy(() => BookingCreateWithoutSeatInputSchema).array(), z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema), z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutSeatInputSchema), z.lazy(() => BookingCreateOrConnectWithoutSeatInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManySeatInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
});

export const BookingUncheckedCreateNestedManyWithoutSeatInputSchema: z.ZodType<Prisma.BookingUncheckedCreateNestedManyWithoutSeatInput> = z.strictObject({
  create: z.union([ z.lazy(() => BookingCreateWithoutSeatInputSchema), z.lazy(() => BookingCreateWithoutSeatInputSchema).array(), z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema), z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutSeatInputSchema), z.lazy(() => BookingCreateOrConnectWithoutSeatInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManySeatInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
});

export const LibraryUpdateOneRequiredWithoutSeatsNestedInputSchema: z.ZodType<Prisma.LibraryUpdateOneRequiredWithoutSeatsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LibraryCreateWithoutSeatsInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutSeatsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutSeatsInputSchema).optional(),
  upsert: z.lazy(() => LibraryUpsertWithoutSeatsInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LibraryUpdateToOneWithWhereWithoutSeatsInputSchema), z.lazy(() => LibraryUpdateWithoutSeatsInputSchema), z.lazy(() => LibraryUncheckedUpdateWithoutSeatsInputSchema) ]).optional(),
});

export const BookingUpdateManyWithoutSeatNestedInputSchema: z.ZodType<Prisma.BookingUpdateManyWithoutSeatNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BookingCreateWithoutSeatInputSchema), z.lazy(() => BookingCreateWithoutSeatInputSchema).array(), z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema), z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutSeatInputSchema), z.lazy(() => BookingCreateOrConnectWithoutSeatInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutSeatInputSchema), z.lazy(() => BookingUpsertWithWhereUniqueWithoutSeatInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManySeatInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutSeatInputSchema), z.lazy(() => BookingUpdateWithWhereUniqueWithoutSeatInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutSeatInputSchema), z.lazy(() => BookingUpdateManyWithWhereWithoutSeatInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema), z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
});

export const BookingUncheckedUpdateManyWithoutSeatNestedInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutSeatNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BookingCreateWithoutSeatInputSchema), z.lazy(() => BookingCreateWithoutSeatInputSchema).array(), z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema), z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutSeatInputSchema), z.lazy(() => BookingCreateOrConnectWithoutSeatInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutSeatInputSchema), z.lazy(() => BookingUpsertWithWhereUniqueWithoutSeatInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManySeatInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutSeatInputSchema), z.lazy(() => BookingUpdateWithWhereUniqueWithoutSeatInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutSeatInputSchema), z.lazy(() => BookingUpdateManyWithWhereWithoutSeatInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema), z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
});

export const LibraryCreateNestedOneWithoutMembersInputSchema: z.ZodType<Prisma.LibraryCreateNestedOneWithoutMembersInput> = z.strictObject({
  create: z.union([ z.lazy(() => LibraryCreateWithoutMembersInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional(),
});

export const BookingCreateNestedManyWithoutMemberInputSchema: z.ZodType<Prisma.BookingCreateNestedManyWithoutMemberInput> = z.strictObject({
  create: z.union([ z.lazy(() => BookingCreateWithoutMemberInputSchema), z.lazy(() => BookingCreateWithoutMemberInputSchema).array(), z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema), z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutMemberInputSchema), z.lazy(() => BookingCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyMemberInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
});

export const PaymentCreateNestedManyWithoutMemberInputSchema: z.ZodType<Prisma.PaymentCreateNestedManyWithoutMemberInput> = z.strictObject({
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema), z.lazy(() => PaymentCreateWithoutMemberInputSchema).array(), z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema), z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema), z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyMemberInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema), z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
});

export const BookingUncheckedCreateNestedManyWithoutMemberInputSchema: z.ZodType<Prisma.BookingUncheckedCreateNestedManyWithoutMemberInput> = z.strictObject({
  create: z.union([ z.lazy(() => BookingCreateWithoutMemberInputSchema), z.lazy(() => BookingCreateWithoutMemberInputSchema).array(), z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema), z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutMemberInputSchema), z.lazy(() => BookingCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyMemberInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
});

export const PaymentUncheckedCreateNestedManyWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutMemberInput> = z.strictObject({
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema), z.lazy(() => PaymentCreateWithoutMemberInputSchema).array(), z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema), z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema), z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyMemberInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema), z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
});

export const LibraryUpdateOneRequiredWithoutMembersNestedInputSchema: z.ZodType<Prisma.LibraryUpdateOneRequiredWithoutMembersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LibraryCreateWithoutMembersInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutMembersInputSchema).optional(),
  upsert: z.lazy(() => LibraryUpsertWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LibraryUpdateToOneWithWhereWithoutMembersInputSchema), z.lazy(() => LibraryUpdateWithoutMembersInputSchema), z.lazy(() => LibraryUncheckedUpdateWithoutMembersInputSchema) ]).optional(),
});

export const BookingUpdateManyWithoutMemberNestedInputSchema: z.ZodType<Prisma.BookingUpdateManyWithoutMemberNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BookingCreateWithoutMemberInputSchema), z.lazy(() => BookingCreateWithoutMemberInputSchema).array(), z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema), z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutMemberInputSchema), z.lazy(() => BookingCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutMemberInputSchema), z.lazy(() => BookingUpsertWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyMemberInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutMemberInputSchema), z.lazy(() => BookingUpdateWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutMemberInputSchema), z.lazy(() => BookingUpdateManyWithWhereWithoutMemberInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema), z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
});

export const PaymentUpdateManyWithoutMemberNestedInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithoutMemberNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema), z.lazy(() => PaymentCreateWithoutMemberInputSchema).array(), z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema), z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema), z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutMemberInputSchema), z.lazy(() => PaymentUpsertWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyMemberInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema), z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema), z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema), z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema), z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutMemberInputSchema), z.lazy(() => PaymentUpdateWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutMemberInputSchema), z.lazy(() => PaymentUpdateManyWithWhereWithoutMemberInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema), z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
});

export const BookingUncheckedUpdateManyWithoutMemberNestedInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutMemberNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BookingCreateWithoutMemberInputSchema), z.lazy(() => BookingCreateWithoutMemberInputSchema).array(), z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema), z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutMemberInputSchema), z.lazy(() => BookingCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutMemberInputSchema), z.lazy(() => BookingUpsertWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyMemberInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutMemberInputSchema), z.lazy(() => BookingUpdateWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutMemberInputSchema), z.lazy(() => BookingUpdateManyWithWhereWithoutMemberInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema), z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
});

export const PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutMemberNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema), z.lazy(() => PaymentCreateWithoutMemberInputSchema).array(), z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema), z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema), z.lazy(() => PaymentCreateOrConnectWithoutMemberInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutMemberInputSchema), z.lazy(() => PaymentUpsertWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyMemberInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema), z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema), z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema), z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema), z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutMemberInputSchema), z.lazy(() => PaymentUpdateWithWhereUniqueWithoutMemberInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutMemberInputSchema), z.lazy(() => PaymentUpdateManyWithWhereWithoutMemberInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema), z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
});

export const LibraryCreateNestedOneWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryCreateNestedOneWithoutShiftsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LibraryCreateWithoutShiftsInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutShiftsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutShiftsInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional(),
});

export const BookingCreateNestedManyWithoutShiftInputSchema: z.ZodType<Prisma.BookingCreateNestedManyWithoutShiftInput> = z.strictObject({
  create: z.union([ z.lazy(() => BookingCreateWithoutShiftInputSchema), z.lazy(() => BookingCreateWithoutShiftInputSchema).array(), z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema), z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutShiftInputSchema), z.lazy(() => BookingCreateOrConnectWithoutShiftInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyShiftInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
});

export const BookingUncheckedCreateNestedManyWithoutShiftInputSchema: z.ZodType<Prisma.BookingUncheckedCreateNestedManyWithoutShiftInput> = z.strictObject({
  create: z.union([ z.lazy(() => BookingCreateWithoutShiftInputSchema), z.lazy(() => BookingCreateWithoutShiftInputSchema).array(), z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema), z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutShiftInputSchema), z.lazy(() => BookingCreateOrConnectWithoutShiftInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyShiftInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
});

export const LibraryUpdateOneRequiredWithoutShiftsNestedInputSchema: z.ZodType<Prisma.LibraryUpdateOneRequiredWithoutShiftsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LibraryCreateWithoutShiftsInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutShiftsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LibraryCreateOrConnectWithoutShiftsInputSchema).optional(),
  upsert: z.lazy(() => LibraryUpsertWithoutShiftsInputSchema).optional(),
  connect: z.lazy(() => LibraryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LibraryUpdateToOneWithWhereWithoutShiftsInputSchema), z.lazy(() => LibraryUpdateWithoutShiftsInputSchema), z.lazy(() => LibraryUncheckedUpdateWithoutShiftsInputSchema) ]).optional(),
});

export const BookingUpdateManyWithoutShiftNestedInputSchema: z.ZodType<Prisma.BookingUpdateManyWithoutShiftNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BookingCreateWithoutShiftInputSchema), z.lazy(() => BookingCreateWithoutShiftInputSchema).array(), z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema), z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutShiftInputSchema), z.lazy(() => BookingCreateOrConnectWithoutShiftInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutShiftInputSchema), z.lazy(() => BookingUpsertWithWhereUniqueWithoutShiftInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyShiftInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutShiftInputSchema), z.lazy(() => BookingUpdateWithWhereUniqueWithoutShiftInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutShiftInputSchema), z.lazy(() => BookingUpdateManyWithWhereWithoutShiftInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema), z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
});

export const BookingUncheckedUpdateManyWithoutShiftNestedInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutShiftNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BookingCreateWithoutShiftInputSchema), z.lazy(() => BookingCreateWithoutShiftInputSchema).array(), z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema), z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutShiftInputSchema), z.lazy(() => BookingCreateOrConnectWithoutShiftInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutShiftInputSchema), z.lazy(() => BookingUpsertWithWhereUniqueWithoutShiftInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyShiftInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema), z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutShiftInputSchema), z.lazy(() => BookingUpdateWithWhereUniqueWithoutShiftInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutShiftInputSchema), z.lazy(() => BookingUpdateManyWithWhereWithoutShiftInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema), z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
});

export const SeatCreateNestedOneWithoutBookingsInputSchema: z.ZodType<Prisma.SeatCreateNestedOneWithoutBookingsInput> = z.strictObject({
  create: z.union([ z.lazy(() => SeatCreateWithoutBookingsInputSchema), z.lazy(() => SeatUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SeatCreateOrConnectWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => SeatWhereUniqueInputSchema).optional(),
});

export const MemberCreateNestedOneWithoutBookingsInputSchema: z.ZodType<Prisma.MemberCreateNestedOneWithoutBookingsInput> = z.strictObject({
  create: z.union([ z.lazy(() => MemberCreateWithoutBookingsInputSchema), z.lazy(() => MemberUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional(),
});

export const ShiftCreateNestedOneWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftCreateNestedOneWithoutBookingsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ShiftCreateWithoutBookingsInputSchema), z.lazy(() => ShiftUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ShiftCreateOrConnectWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => ShiftWhereUniqueInputSchema).optional(),
});

export const SeatUpdateOneRequiredWithoutBookingsNestedInputSchema: z.ZodType<Prisma.SeatUpdateOneRequiredWithoutBookingsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SeatCreateWithoutBookingsInputSchema), z.lazy(() => SeatUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SeatCreateOrConnectWithoutBookingsInputSchema).optional(),
  upsert: z.lazy(() => SeatUpsertWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => SeatWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SeatUpdateToOneWithWhereWithoutBookingsInputSchema), z.lazy(() => SeatUpdateWithoutBookingsInputSchema), z.lazy(() => SeatUncheckedUpdateWithoutBookingsInputSchema) ]).optional(),
});

export const MemberUpdateOneRequiredWithoutBookingsNestedInputSchema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutBookingsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => MemberCreateWithoutBookingsInputSchema), z.lazy(() => MemberUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutBookingsInputSchema).optional(),
  upsert: z.lazy(() => MemberUpsertWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MemberUpdateToOneWithWhereWithoutBookingsInputSchema), z.lazy(() => MemberUpdateWithoutBookingsInputSchema), z.lazy(() => MemberUncheckedUpdateWithoutBookingsInputSchema) ]).optional(),
});

export const ShiftUpdateOneRequiredWithoutBookingsNestedInputSchema: z.ZodType<Prisma.ShiftUpdateOneRequiredWithoutBookingsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ShiftCreateWithoutBookingsInputSchema), z.lazy(() => ShiftUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ShiftCreateOrConnectWithoutBookingsInputSchema).optional(),
  upsert: z.lazy(() => ShiftUpsertWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => ShiftWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ShiftUpdateToOneWithWhereWithoutBookingsInputSchema), z.lazy(() => ShiftUpdateWithoutBookingsInputSchema), z.lazy(() => ShiftUncheckedUpdateWithoutBookingsInputSchema) ]).optional(),
});

export const MemberCreateNestedOneWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberCreateNestedOneWithoutPaymentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => MemberCreateWithoutPaymentsInputSchema), z.lazy(() => MemberUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional(),
});

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.strictObject({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
});

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.strictObject({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
});

export const MemberUpdateOneRequiredWithoutPaymentsNestedInputSchema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutPaymentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => MemberCreateWithoutPaymentsInputSchema), z.lazy(() => MemberUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutPaymentsInputSchema).optional(),
  upsert: z.lazy(() => MemberUpsertWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MemberUpdateToOneWithWhereWithoutPaymentsInputSchema), z.lazy(() => MemberUpdateWithoutPaymentsInputSchema), z.lazy(() => MemberUncheckedUpdateWithoutPaymentsInputSchema) ]).optional(),
});

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
});

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
});

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
});

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
});

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
});

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
});

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.strictObject({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
});

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
});

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
});

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
});

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional(),
});

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.strictObject({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
});

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
});

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
});

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema), z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.strictObject({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
});

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema), z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const LibraryCreateWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryCreateWithoutOwnerInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  seats: z.lazy(() => SeatCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftCreateNestedManyWithoutLibraryInputSchema).optional(),
});

export const LibraryUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUncheckedCreateWithoutOwnerInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  seats: z.lazy(() => SeatUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
});

export const LibraryCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryCreateOrConnectWithoutOwnerInput> = z.strictObject({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LibraryCreateWithoutOwnerInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema) ]),
});

export const LibraryCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.LibraryCreateManyOwnerInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LibraryCreateManyOwnerInputSchema), z.lazy(() => LibraryCreateManyOwnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema), z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
});

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema), z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
});

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema), z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
});

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
});

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
});

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
});

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema), z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema) ]),
});

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  accountId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  idToken: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export const LibraryUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUpsertWithWhereUniqueWithoutOwnerInput> = z.strictObject({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LibraryUpdateWithoutOwnerInputSchema), z.lazy(() => LibraryUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => LibraryCreateWithoutOwnerInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutOwnerInputSchema) ]),
});

export const LibraryUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUpdateWithWhereUniqueWithoutOwnerInput> = z.strictObject({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LibraryUpdateWithoutOwnerInputSchema), z.lazy(() => LibraryUncheckedUpdateWithoutOwnerInputSchema) ]),
});

export const LibraryUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUpdateManyWithWhereWithoutOwnerInput> = z.strictObject({
  where: z.lazy(() => LibraryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LibraryUpdateManyMutationInputSchema), z.lazy(() => LibraryUncheckedUpdateManyWithoutOwnerInputSchema) ]),
});

export const LibraryScalarWhereInputSchema: z.ZodType<Prisma.LibraryScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LibraryScalarWhereInputSchema), z.lazy(() => LibraryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LibraryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LibraryScalarWhereInputSchema), z.lazy(() => LibraryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  Library: z.lazy(() => LibraryCreateNestedManyWithoutOwnerInputSchema).optional(),
});

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Library: z.lazy(() => LibraryUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
});

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z.strictObject({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
});

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
});

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> = z.strictObject({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
});

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  Library: z.lazy(() => LibraryUpdateManyWithoutOwnerNestedInputSchema).optional(),
});

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Library: z.lazy(() => LibraryUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
});

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Library: z.lazy(() => LibraryCreateNestedManyWithoutOwnerInputSchema).optional(),
});

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Library: z.lazy(() => LibraryUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
});

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.strictObject({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
});

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
});

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> = z.strictObject({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
});

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Library: z.lazy(() => LibraryUpdateManyWithoutOwnerNestedInputSchema).optional(),
});

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Library: z.lazy(() => LibraryUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
});

export const UserCreateWithoutLibraryInputSchema: z.ZodType<Prisma.UserCreateWithoutLibraryInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
});

export const UserUncheckedCreateWithoutLibraryInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutLibraryInput> = z.strictObject({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
});

export const UserCreateOrConnectWithoutLibraryInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutLibraryInputSchema), z.lazy(() => UserUncheckedCreateWithoutLibraryInputSchema) ]),
});

export const SeatCreateWithoutLibraryInputSchema: z.ZodType<Prisma.SeatCreateWithoutLibraryInput> = z.strictObject({
  id: z.cuid().optional(),
  seatNumber: z.string(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutSeatInputSchema).optional(),
});

export const SeatUncheckedCreateWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUncheckedCreateWithoutLibraryInput> = z.strictObject({
  id: z.cuid().optional(),
  seatNumber: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutSeatInputSchema).optional(),
});

export const SeatCreateOrConnectWithoutLibraryInputSchema: z.ZodType<Prisma.SeatCreateOrConnectWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => SeatWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SeatCreateWithoutLibraryInputSchema), z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema) ]),
});

export const SeatCreateManyLibraryInputEnvelopeSchema: z.ZodType<Prisma.SeatCreateManyLibraryInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SeatCreateManyLibraryInputSchema), z.lazy(() => SeatCreateManyLibraryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const MemberCreateWithoutLibraryInputSchema: z.ZodType<Prisma.MemberCreateWithoutLibraryInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutMemberInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutMemberInputSchema).optional(),
});

export const MemberUncheckedCreateWithoutLibraryInputSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutLibraryInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutMemberInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutMemberInputSchema).optional(),
});

export const MemberCreateOrConnectWithoutLibraryInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutLibraryInputSchema), z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema) ]),
});

export const MemberCreateManyLibraryInputEnvelopeSchema: z.ZodType<Prisma.MemberCreateManyLibraryInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => MemberCreateManyLibraryInputSchema), z.lazy(() => MemberCreateManyLibraryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const ShiftCreateWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftCreateWithoutLibraryInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutShiftInputSchema).optional(),
});

export const ShiftUncheckedCreateWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUncheckedCreateWithoutLibraryInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutShiftInputSchema).optional(),
});

export const ShiftCreateOrConnectWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftCreateOrConnectWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => ShiftWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ShiftCreateWithoutLibraryInputSchema), z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema) ]),
});

export const ShiftCreateManyLibraryInputEnvelopeSchema: z.ZodType<Prisma.ShiftCreateManyLibraryInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ShiftCreateManyLibraryInputSchema), z.lazy(() => ShiftCreateManyLibraryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const UserUpsertWithoutLibraryInputSchema: z.ZodType<Prisma.UserUpsertWithoutLibraryInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserUpdateWithoutLibraryInputSchema), z.lazy(() => UserUncheckedUpdateWithoutLibraryInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutLibraryInputSchema), z.lazy(() => UserUncheckedCreateWithoutLibraryInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
});

export const UserUpdateToOneWithWhereWithoutLibraryInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutLibraryInputSchema), z.lazy(() => UserUncheckedUpdateWithoutLibraryInputSchema) ]),
});

export const UserUpdateWithoutLibraryInputSchema: z.ZodType<Prisma.UserUpdateWithoutLibraryInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
});

export const UserUncheckedUpdateWithoutLibraryInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutLibraryInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
});

export const SeatUpsertWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUpsertWithWhereUniqueWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => SeatWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SeatUpdateWithoutLibraryInputSchema), z.lazy(() => SeatUncheckedUpdateWithoutLibraryInputSchema) ]),
  create: z.union([ z.lazy(() => SeatCreateWithoutLibraryInputSchema), z.lazy(() => SeatUncheckedCreateWithoutLibraryInputSchema) ]),
});

export const SeatUpdateWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUpdateWithWhereUniqueWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => SeatWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SeatUpdateWithoutLibraryInputSchema), z.lazy(() => SeatUncheckedUpdateWithoutLibraryInputSchema) ]),
});

export const SeatUpdateManyWithWhereWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUpdateManyWithWhereWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => SeatScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SeatUpdateManyMutationInputSchema), z.lazy(() => SeatUncheckedUpdateManyWithoutLibraryInputSchema) ]),
});

export const SeatScalarWhereInputSchema: z.ZodType<Prisma.SeatScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SeatScalarWhereInputSchema), z.lazy(() => SeatScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SeatScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SeatScalarWhereInputSchema), z.lazy(() => SeatScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  seatNumber: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
});

export const MemberUpsertWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MemberUpdateWithoutLibraryInputSchema), z.lazy(() => MemberUncheckedUpdateWithoutLibraryInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutLibraryInputSchema), z.lazy(() => MemberUncheckedCreateWithoutLibraryInputSchema) ]),
});

export const MemberUpdateWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MemberUpdateWithoutLibraryInputSchema), z.lazy(() => MemberUncheckedUpdateWithoutLibraryInputSchema) ]),
});

export const MemberUpdateManyWithWhereWithoutLibraryInputSchema: z.ZodType<Prisma.MemberUpdateManyWithWhereWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => MemberScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MemberUpdateManyMutationInputSchema), z.lazy(() => MemberUncheckedUpdateManyWithoutLibraryInputSchema) ]),
});

export const MemberScalarWhereInputSchema: z.ZodType<Prisma.MemberScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => MemberScalarWhereInputSchema), z.lazy(() => MemberScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberScalarWhereInputSchema), z.lazy(() => MemberScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
});

export const ShiftUpsertWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUpsertWithWhereUniqueWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => ShiftWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ShiftUpdateWithoutLibraryInputSchema), z.lazy(() => ShiftUncheckedUpdateWithoutLibraryInputSchema) ]),
  create: z.union([ z.lazy(() => ShiftCreateWithoutLibraryInputSchema), z.lazy(() => ShiftUncheckedCreateWithoutLibraryInputSchema) ]),
});

export const ShiftUpdateWithWhereUniqueWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUpdateWithWhereUniqueWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => ShiftWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ShiftUpdateWithoutLibraryInputSchema), z.lazy(() => ShiftUncheckedUpdateWithoutLibraryInputSchema) ]),
});

export const ShiftUpdateManyWithWhereWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUpdateManyWithWhereWithoutLibraryInput> = z.strictObject({
  where: z.lazy(() => ShiftScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ShiftUpdateManyMutationInputSchema), z.lazy(() => ShiftUncheckedUpdateManyWithoutLibraryInputSchema) ]),
});

export const ShiftScalarWhereInputSchema: z.ZodType<Prisma.ShiftScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ShiftScalarWhereInputSchema), z.lazy(() => ShiftScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ShiftScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ShiftScalarWhereInputSchema), z.lazy(() => ShiftScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  libraryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
});

export const LibraryCreateWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryCreateWithoutSeatsInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutLibraryInputSchema),
  members: z.lazy(() => MemberCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftCreateNestedManyWithoutLibraryInputSchema).optional(),
});

export const LibraryUncheckedCreateWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryUncheckedCreateWithoutSeatsInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
});

export const LibraryCreateOrConnectWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryCreateOrConnectWithoutSeatsInput> = z.strictObject({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LibraryCreateWithoutSeatsInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutSeatsInputSchema) ]),
});

export const BookingCreateWithoutSeatInputSchema: z.ZodType<Prisma.BookingCreateWithoutSeatInput> = z.strictObject({
  id: z.cuid().optional(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  member: z.lazy(() => MemberCreateNestedOneWithoutBookingsInputSchema),
  shift: z.lazy(() => ShiftCreateNestedOneWithoutBookingsInputSchema),
});

export const BookingUncheckedCreateWithoutSeatInputSchema: z.ZodType<Prisma.BookingUncheckedCreateWithoutSeatInput> = z.strictObject({
  id: z.cuid().optional(),
  memberId: z.string(),
  date: z.coerce.date(),
  shiftId: z.string(),
  createdAt: z.coerce.date().optional(),
});

export const BookingCreateOrConnectWithoutSeatInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutSeatInput> = z.strictObject({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutSeatInputSchema), z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema) ]),
});

export const BookingCreateManySeatInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManySeatInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => BookingCreateManySeatInputSchema), z.lazy(() => BookingCreateManySeatInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const LibraryUpsertWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryUpsertWithoutSeatsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LibraryUpdateWithoutSeatsInputSchema), z.lazy(() => LibraryUncheckedUpdateWithoutSeatsInputSchema) ]),
  create: z.union([ z.lazy(() => LibraryCreateWithoutSeatsInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutSeatsInputSchema) ]),
  where: z.lazy(() => LibraryWhereInputSchema).optional(),
});

export const LibraryUpdateToOneWithWhereWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryUpdateToOneWithWhereWithoutSeatsInput> = z.strictObject({
  where: z.lazy(() => LibraryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LibraryUpdateWithoutSeatsInputSchema), z.lazy(() => LibraryUncheckedUpdateWithoutSeatsInputSchema) ]),
});

export const LibraryUpdateWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryUpdateWithoutSeatsInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutLibraryNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUpdateManyWithoutLibraryNestedInputSchema).optional(),
});

export const LibraryUncheckedUpdateWithoutSeatsInputSchema: z.ZodType<Prisma.LibraryUncheckedUpdateWithoutSeatsInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
});

export const BookingUpsertWithWhereUniqueWithoutSeatInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutSeatInput> = z.strictObject({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutSeatInputSchema), z.lazy(() => BookingUncheckedUpdateWithoutSeatInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutSeatInputSchema), z.lazy(() => BookingUncheckedCreateWithoutSeatInputSchema) ]),
});

export const BookingUpdateWithWhereUniqueWithoutSeatInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutSeatInput> = z.strictObject({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutSeatInputSchema), z.lazy(() => BookingUncheckedUpdateWithoutSeatInputSchema) ]),
});

export const BookingUpdateManyWithWhereWithoutSeatInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutSeatInput> = z.strictObject({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema), z.lazy(() => BookingUncheckedUpdateManyWithoutSeatInputSchema) ]),
});

export const BookingScalarWhereInputSchema: z.ZodType<Prisma.BookingScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BookingScalarWhereInputSchema), z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingScalarWhereInputSchema), z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  seatId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  memberId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  shiftId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export const LibraryCreateWithoutMembersInputSchema: z.ZodType<Prisma.LibraryCreateWithoutMembersInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutLibraryInputSchema),
  seats: z.lazy(() => SeatCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftCreateNestedManyWithoutLibraryInputSchema).optional(),
});

export const LibraryUncheckedCreateWithoutMembersInputSchema: z.ZodType<Prisma.LibraryUncheckedCreateWithoutMembersInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  seats: z.lazy(() => SeatUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
});

export const LibraryCreateOrConnectWithoutMembersInputSchema: z.ZodType<Prisma.LibraryCreateOrConnectWithoutMembersInput> = z.strictObject({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LibraryCreateWithoutMembersInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutMembersInputSchema) ]),
});

export const BookingCreateWithoutMemberInputSchema: z.ZodType<Prisma.BookingCreateWithoutMemberInput> = z.strictObject({
  id: z.cuid().optional(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  seat: z.lazy(() => SeatCreateNestedOneWithoutBookingsInputSchema),
  shift: z.lazy(() => ShiftCreateNestedOneWithoutBookingsInputSchema),
});

export const BookingUncheckedCreateWithoutMemberInputSchema: z.ZodType<Prisma.BookingUncheckedCreateWithoutMemberInput> = z.strictObject({
  id: z.cuid().optional(),
  seatId: z.string(),
  date: z.coerce.date(),
  shiftId: z.string(),
  createdAt: z.coerce.date().optional(),
});

export const BookingCreateOrConnectWithoutMemberInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutMemberInput> = z.strictObject({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutMemberInputSchema), z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema) ]),
});

export const BookingCreateManyMemberInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManyMemberInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => BookingCreateManyMemberInputSchema), z.lazy(() => BookingCreateManyMemberInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const PaymentCreateWithoutMemberInputSchema: z.ZodType<Prisma.PaymentCreateWithoutMemberInput> = z.strictObject({
  id: z.cuid().optional(),
  startMonth: z.string(),
  validTill: z.coerce.date(),
  duration: z.number().int(),
  amount: z.number(),
  paid: z.boolean().optional(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
});

export const PaymentUncheckedCreateWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutMemberInput> = z.strictObject({
  id: z.cuid().optional(),
  startMonth: z.string(),
  validTill: z.coerce.date(),
  duration: z.number().int(),
  amount: z.number(),
  paid: z.boolean().optional(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
});

export const PaymentCreateOrConnectWithoutMemberInputSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutMemberInput> = z.strictObject({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema), z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema) ]),
});

export const PaymentCreateManyMemberInputEnvelopeSchema: z.ZodType<Prisma.PaymentCreateManyMemberInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => PaymentCreateManyMemberInputSchema), z.lazy(() => PaymentCreateManyMemberInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const LibraryUpsertWithoutMembersInputSchema: z.ZodType<Prisma.LibraryUpsertWithoutMembersInput> = z.strictObject({
  update: z.union([ z.lazy(() => LibraryUpdateWithoutMembersInputSchema), z.lazy(() => LibraryUncheckedUpdateWithoutMembersInputSchema) ]),
  create: z.union([ z.lazy(() => LibraryCreateWithoutMembersInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutMembersInputSchema) ]),
  where: z.lazy(() => LibraryWhereInputSchema).optional(),
});

export const LibraryUpdateToOneWithWhereWithoutMembersInputSchema: z.ZodType<Prisma.LibraryUpdateToOneWithWhereWithoutMembersInput> = z.strictObject({
  where: z.lazy(() => LibraryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LibraryUpdateWithoutMembersInputSchema), z.lazy(() => LibraryUncheckedUpdateWithoutMembersInputSchema) ]),
});

export const LibraryUpdateWithoutMembersInputSchema: z.ZodType<Prisma.LibraryUpdateWithoutMembersInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutLibraryNestedInputSchema).optional(),
  seats: z.lazy(() => SeatUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUpdateManyWithoutLibraryNestedInputSchema).optional(),
});

export const LibraryUncheckedUpdateWithoutMembersInputSchema: z.ZodType<Prisma.LibraryUncheckedUpdateWithoutMembersInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  seats: z.lazy(() => SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
});

export const BookingUpsertWithWhereUniqueWithoutMemberInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutMemberInput> = z.strictObject({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutMemberInputSchema), z.lazy(() => BookingUncheckedUpdateWithoutMemberInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutMemberInputSchema), z.lazy(() => BookingUncheckedCreateWithoutMemberInputSchema) ]),
});

export const BookingUpdateWithWhereUniqueWithoutMemberInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutMemberInput> = z.strictObject({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutMemberInputSchema), z.lazy(() => BookingUncheckedUpdateWithoutMemberInputSchema) ]),
});

export const BookingUpdateManyWithWhereWithoutMemberInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutMemberInput> = z.strictObject({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema), z.lazy(() => BookingUncheckedUpdateManyWithoutMemberInputSchema) ]),
});

export const PaymentUpsertWithWhereUniqueWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutMemberInput> = z.strictObject({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PaymentUpdateWithoutMemberInputSchema), z.lazy(() => PaymentUncheckedUpdateWithoutMemberInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentCreateWithoutMemberInputSchema), z.lazy(() => PaymentUncheckedCreateWithoutMemberInputSchema) ]),
});

export const PaymentUpdateWithWhereUniqueWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutMemberInput> = z.strictObject({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateWithoutMemberInputSchema), z.lazy(() => PaymentUncheckedUpdateWithoutMemberInputSchema) ]),
});

export const PaymentUpdateManyWithWhereWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutMemberInput> = z.strictObject({
  where: z.lazy(() => PaymentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateManyMutationInputSchema), z.lazy(() => PaymentUncheckedUpdateManyWithoutMemberInputSchema) ]),
});

export const PaymentScalarWhereInputSchema: z.ZodType<Prisma.PaymentScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PaymentScalarWhereInputSchema), z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentScalarWhereInputSchema), z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  memberId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  startMonth: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  validTill: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  paid: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  paidAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export const LibraryCreateWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryCreateWithoutShiftsInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutLibraryInputSchema),
  seats: z.lazy(() => SeatCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutLibraryInputSchema).optional(),
});

export const LibraryUncheckedCreateWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryUncheckedCreateWithoutShiftsInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  seats: z.lazy(() => SeatUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutLibraryInputSchema).optional(),
});

export const LibraryCreateOrConnectWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryCreateOrConnectWithoutShiftsInput> = z.strictObject({
  where: z.lazy(() => LibraryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LibraryCreateWithoutShiftsInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutShiftsInputSchema) ]),
});

export const BookingCreateWithoutShiftInputSchema: z.ZodType<Prisma.BookingCreateWithoutShiftInput> = z.strictObject({
  id: z.cuid().optional(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  seat: z.lazy(() => SeatCreateNestedOneWithoutBookingsInputSchema),
  member: z.lazy(() => MemberCreateNestedOneWithoutBookingsInputSchema),
});

export const BookingUncheckedCreateWithoutShiftInputSchema: z.ZodType<Prisma.BookingUncheckedCreateWithoutShiftInput> = z.strictObject({
  id: z.cuid().optional(),
  seatId: z.string(),
  memberId: z.string(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export const BookingCreateOrConnectWithoutShiftInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutShiftInput> = z.strictObject({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutShiftInputSchema), z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema) ]),
});

export const BookingCreateManyShiftInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManyShiftInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => BookingCreateManyShiftInputSchema), z.lazy(() => BookingCreateManyShiftInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const LibraryUpsertWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryUpsertWithoutShiftsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LibraryUpdateWithoutShiftsInputSchema), z.lazy(() => LibraryUncheckedUpdateWithoutShiftsInputSchema) ]),
  create: z.union([ z.lazy(() => LibraryCreateWithoutShiftsInputSchema), z.lazy(() => LibraryUncheckedCreateWithoutShiftsInputSchema) ]),
  where: z.lazy(() => LibraryWhereInputSchema).optional(),
});

export const LibraryUpdateToOneWithWhereWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryUpdateToOneWithWhereWithoutShiftsInput> = z.strictObject({
  where: z.lazy(() => LibraryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LibraryUpdateWithoutShiftsInputSchema), z.lazy(() => LibraryUncheckedUpdateWithoutShiftsInputSchema) ]),
});

export const LibraryUpdateWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryUpdateWithoutShiftsInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutLibraryNestedInputSchema).optional(),
  seats: z.lazy(() => SeatUpdateManyWithoutLibraryNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutLibraryNestedInputSchema).optional(),
});

export const LibraryUncheckedUpdateWithoutShiftsInputSchema: z.ZodType<Prisma.LibraryUncheckedUpdateWithoutShiftsInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  seats: z.lazy(() => SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
});

export const BookingUpsertWithWhereUniqueWithoutShiftInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutShiftInput> = z.strictObject({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutShiftInputSchema), z.lazy(() => BookingUncheckedUpdateWithoutShiftInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutShiftInputSchema), z.lazy(() => BookingUncheckedCreateWithoutShiftInputSchema) ]),
});

export const BookingUpdateWithWhereUniqueWithoutShiftInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutShiftInput> = z.strictObject({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutShiftInputSchema), z.lazy(() => BookingUncheckedUpdateWithoutShiftInputSchema) ]),
});

export const BookingUpdateManyWithWhereWithoutShiftInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutShiftInput> = z.strictObject({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema), z.lazy(() => BookingUncheckedUpdateManyWithoutShiftInputSchema) ]),
});

export const SeatCreateWithoutBookingsInputSchema: z.ZodType<Prisma.SeatCreateWithoutBookingsInput> = z.strictObject({
  id: z.cuid().optional(),
  seatNumber: z.string(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutSeatsInputSchema),
});

export const SeatUncheckedCreateWithoutBookingsInputSchema: z.ZodType<Prisma.SeatUncheckedCreateWithoutBookingsInput> = z.strictObject({
  id: z.cuid().optional(),
  seatNumber: z.string(),
  libraryId: z.string(),
});

export const SeatCreateOrConnectWithoutBookingsInputSchema: z.ZodType<Prisma.SeatCreateOrConnectWithoutBookingsInput> = z.strictObject({
  where: z.lazy(() => SeatWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SeatCreateWithoutBookingsInputSchema), z.lazy(() => SeatUncheckedCreateWithoutBookingsInputSchema) ]),
});

export const MemberCreateWithoutBookingsInputSchema: z.ZodType<Prisma.MemberCreateWithoutBookingsInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutMembersInputSchema),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutMemberInputSchema).optional(),
});

export const MemberUncheckedCreateWithoutBookingsInputSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutBookingsInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  libraryId: z.string(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutMemberInputSchema).optional(),
});

export const MemberCreateOrConnectWithoutBookingsInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutBookingsInput> = z.strictObject({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutBookingsInputSchema), z.lazy(() => MemberUncheckedCreateWithoutBookingsInputSchema) ]),
});

export const ShiftCreateWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftCreateWithoutBookingsInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutShiftsInputSchema),
});

export const ShiftUncheckedCreateWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftUncheckedCreateWithoutBookingsInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  libraryId: z.string(),
});

export const ShiftCreateOrConnectWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftCreateOrConnectWithoutBookingsInput> = z.strictObject({
  where: z.lazy(() => ShiftWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ShiftCreateWithoutBookingsInputSchema), z.lazy(() => ShiftUncheckedCreateWithoutBookingsInputSchema) ]),
});

export const SeatUpsertWithoutBookingsInputSchema: z.ZodType<Prisma.SeatUpsertWithoutBookingsInput> = z.strictObject({
  update: z.union([ z.lazy(() => SeatUpdateWithoutBookingsInputSchema), z.lazy(() => SeatUncheckedUpdateWithoutBookingsInputSchema) ]),
  create: z.union([ z.lazy(() => SeatCreateWithoutBookingsInputSchema), z.lazy(() => SeatUncheckedCreateWithoutBookingsInputSchema) ]),
  where: z.lazy(() => SeatWhereInputSchema).optional(),
});

export const SeatUpdateToOneWithWhereWithoutBookingsInputSchema: z.ZodType<Prisma.SeatUpdateToOneWithWhereWithoutBookingsInput> = z.strictObject({
  where: z.lazy(() => SeatWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SeatUpdateWithoutBookingsInputSchema), z.lazy(() => SeatUncheckedUpdateWithoutBookingsInputSchema) ]),
});

export const SeatUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.SeatUpdateWithoutBookingsInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  library: z.lazy(() => LibraryUpdateOneRequiredWithoutSeatsNestedInputSchema).optional(),
});

export const SeatUncheckedUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.SeatUncheckedUpdateWithoutBookingsInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const MemberUpsertWithoutBookingsInputSchema: z.ZodType<Prisma.MemberUpsertWithoutBookingsInput> = z.strictObject({
  update: z.union([ z.lazy(() => MemberUpdateWithoutBookingsInputSchema), z.lazy(() => MemberUncheckedUpdateWithoutBookingsInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutBookingsInputSchema), z.lazy(() => MemberUncheckedCreateWithoutBookingsInputSchema) ]),
  where: z.lazy(() => MemberWhereInputSchema).optional(),
});

export const MemberUpdateToOneWithWhereWithoutBookingsInputSchema: z.ZodType<Prisma.MemberUpdateToOneWithWhereWithoutBookingsInput> = z.strictObject({
  where: z.lazy(() => MemberWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MemberUpdateWithoutBookingsInputSchema), z.lazy(() => MemberUncheckedUpdateWithoutBookingsInputSchema) ]),
});

export const MemberUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.MemberUpdateWithoutBookingsInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  library: z.lazy(() => LibraryUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutMemberNestedInputSchema).optional(),
});

export const MemberUncheckedUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateWithoutBookingsInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema).optional(),
});

export const ShiftUpsertWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftUpsertWithoutBookingsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ShiftUpdateWithoutBookingsInputSchema), z.lazy(() => ShiftUncheckedUpdateWithoutBookingsInputSchema) ]),
  create: z.union([ z.lazy(() => ShiftCreateWithoutBookingsInputSchema), z.lazy(() => ShiftUncheckedCreateWithoutBookingsInputSchema) ]),
  where: z.lazy(() => ShiftWhereInputSchema).optional(),
});

export const ShiftUpdateToOneWithWhereWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftUpdateToOneWithWhereWithoutBookingsInput> = z.strictObject({
  where: z.lazy(() => ShiftWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ShiftUpdateWithoutBookingsInputSchema), z.lazy(() => ShiftUncheckedUpdateWithoutBookingsInputSchema) ]),
});

export const ShiftUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftUpdateWithoutBookingsInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  library: z.lazy(() => LibraryUpdateOneRequiredWithoutShiftsNestedInputSchema).optional(),
});

export const ShiftUncheckedUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.ShiftUncheckedUpdateWithoutBookingsInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const MemberCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberCreateWithoutPaymentsInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  library: z.lazy(() => LibraryCreateNestedOneWithoutMembersInputSchema),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutMemberInputSchema).optional(),
});

export const MemberUncheckedCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutPaymentsInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
  libraryId: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutMemberInputSchema).optional(),
});

export const MemberCreateOrConnectWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutPaymentsInput> = z.strictObject({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutPaymentsInputSchema), z.lazy(() => MemberUncheckedCreateWithoutPaymentsInputSchema) ]),
});

export const MemberUpsertWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUpsertWithoutPaymentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => MemberUpdateWithoutPaymentsInputSchema), z.lazy(() => MemberUncheckedUpdateWithoutPaymentsInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutPaymentsInputSchema), z.lazy(() => MemberUncheckedCreateWithoutPaymentsInputSchema) ]),
  where: z.lazy(() => MemberWhereInputSchema).optional(),
});

export const MemberUpdateToOneWithWhereWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUpdateToOneWithWhereWithoutPaymentsInput> = z.strictObject({
  where: z.lazy(() => MemberWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MemberUpdateWithoutPaymentsInputSchema), z.lazy(() => MemberUncheckedUpdateWithoutPaymentsInputSchema) ]),
});

export const MemberUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUpdateWithoutPaymentsInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  library: z.lazy(() => LibraryUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutMemberNestedInputSchema).optional(),
});

export const MemberUncheckedUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateWithoutPaymentsInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  libraryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutMemberNestedInputSchema).optional(),
});

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.strictObject({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
});

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.strictObject({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const LibraryCreateManyOwnerInputSchema: z.ZodType<Prisma.LibraryCreateManyOwnerInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
});

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userAgent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idToken: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accessTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refreshTokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const LibraryUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUpdateWithoutOwnerInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  seats: z.lazy(() => SeatUpdateManyWithoutLibraryNestedInputSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUpdateManyWithoutLibraryNestedInputSchema).optional(),
});

export const LibraryUncheckedUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUncheckedUpdateWithoutOwnerInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  seats: z.lazy(() => SeatUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
  shifts: z.lazy(() => ShiftUncheckedUpdateManyWithoutLibraryNestedInputSchema).optional(),
});

export const LibraryUncheckedUpdateManyWithoutOwnerInputSchema: z.ZodType<Prisma.LibraryUncheckedUpdateManyWithoutOwnerInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SeatCreateManyLibraryInputSchema: z.ZodType<Prisma.SeatCreateManyLibraryInput> = z.strictObject({
  id: z.cuid().optional(),
  seatNumber: z.string(),
});

export const MemberCreateManyLibraryInputSchema: z.ZodType<Prisma.MemberCreateManyLibraryInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  phone: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export const ShiftCreateManyLibraryInputSchema: z.ZodType<Prisma.ShiftCreateManyLibraryInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
});

export const SeatUpdateWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUpdateWithoutLibraryInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutSeatNestedInputSchema).optional(),
});

export const SeatUncheckedUpdateWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUncheckedUpdateWithoutLibraryInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutSeatNestedInputSchema).optional(),
});

export const SeatUncheckedUpdateManyWithoutLibraryInputSchema: z.ZodType<Prisma.SeatUncheckedUpdateManyWithoutLibraryInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const MemberUpdateWithoutLibraryInputSchema: z.ZodType<Prisma.MemberUpdateWithoutLibraryInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutMemberNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutMemberNestedInputSchema).optional(),
});

export const MemberUncheckedUpdateWithoutLibraryInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateWithoutLibraryInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutMemberNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutMemberNestedInputSchema).optional(),
});

export const MemberUncheckedUpdateManyWithoutLibraryInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateManyWithoutLibraryInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ShiftUpdateWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUpdateWithoutLibraryInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutShiftNestedInputSchema).optional(),
});

export const ShiftUncheckedUpdateWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUncheckedUpdateWithoutLibraryInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutShiftNestedInputSchema).optional(),
});

export const ShiftUncheckedUpdateManyWithoutLibraryInputSchema: z.ZodType<Prisma.ShiftUncheckedUpdateManyWithoutLibraryInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const BookingCreateManySeatInputSchema: z.ZodType<Prisma.BookingCreateManySeatInput> = z.strictObject({
  id: z.cuid().optional(),
  memberId: z.string(),
  date: z.coerce.date(),
  shiftId: z.string(),
  createdAt: z.coerce.date().optional(),
});

export const BookingUpdateWithoutSeatInputSchema: z.ZodType<Prisma.BookingUpdateWithoutSeatInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member: z.lazy(() => MemberUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  shift: z.lazy(() => ShiftUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
});

export const BookingUncheckedUpdateWithoutSeatInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateWithoutSeatInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  memberId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  shiftId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const BookingUncheckedUpdateManyWithoutSeatInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutSeatInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  memberId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  shiftId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const BookingCreateManyMemberInputSchema: z.ZodType<Prisma.BookingCreateManyMemberInput> = z.strictObject({
  id: z.cuid().optional(),
  seatId: z.string(),
  date: z.coerce.date(),
  shiftId: z.string(),
  createdAt: z.coerce.date().optional(),
});

export const PaymentCreateManyMemberInputSchema: z.ZodType<Prisma.PaymentCreateManyMemberInput> = z.strictObject({
  id: z.cuid().optional(),
  startMonth: z.string(),
  validTill: z.coerce.date(),
  duration: z.number().int(),
  amount: z.number(),
  paid: z.boolean().optional(),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
});

export const BookingUpdateWithoutMemberInputSchema: z.ZodType<Prisma.BookingUpdateWithoutMemberInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  seat: z.lazy(() => SeatUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  shift: z.lazy(() => ShiftUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
});

export const BookingUncheckedUpdateWithoutMemberInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateWithoutMemberInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  shiftId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const BookingUncheckedUpdateManyWithoutMemberInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutMemberInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  shiftId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PaymentUpdateWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUpdateWithoutMemberInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startMonth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  paid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paidAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PaymentUncheckedUpdateWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateWithoutMemberInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startMonth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  paid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paidAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PaymentUncheckedUpdateManyWithoutMemberInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutMemberInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startMonth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  paid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paidAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const BookingCreateManyShiftInputSchema: z.ZodType<Prisma.BookingCreateManyShiftInput> = z.strictObject({
  id: z.cuid().optional(),
  seatId: z.string(),
  memberId: z.string(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export const BookingUpdateWithoutShiftInputSchema: z.ZodType<Prisma.BookingUpdateWithoutShiftInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  seat: z.lazy(() => SeatUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  member: z.lazy(() => MemberUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
});

export const BookingUncheckedUpdateWithoutShiftInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateWithoutShiftInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  memberId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const BookingUncheckedUpdateManyWithoutShiftInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutShiftInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  seatId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  memberId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(), 
  having: UserScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema, 
}).strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema, 
}).strict();

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(), 
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(), 
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(), 
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(), 
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(), 
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(), SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(), 
  having: SessionScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema, 
}).strict();

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema, 
}).strict();

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(), 
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(), 
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(), 
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(), 
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(), 
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(), AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(), 
  having: AccountScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema, 
}).strict();

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema, 
}).strict();

export const VerificationFindFirstArgsSchema: z.ZodType<Prisma.VerificationFindFirstArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereInputSchema.optional(), 
  orderBy: z.union([ VerificationOrderByWithRelationInputSchema.array(), VerificationOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationScalarFieldEnumSchema, VerificationScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const VerificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationFindFirstOrThrowArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereInputSchema.optional(), 
  orderBy: z.union([ VerificationOrderByWithRelationInputSchema.array(), VerificationOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationScalarFieldEnumSchema, VerificationScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const VerificationFindManyArgsSchema: z.ZodType<Prisma.VerificationFindManyArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereInputSchema.optional(), 
  orderBy: z.union([ VerificationOrderByWithRelationInputSchema.array(), VerificationOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationScalarFieldEnumSchema, VerificationScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const VerificationAggregateArgsSchema: z.ZodType<Prisma.VerificationAggregateArgs> = z.object({
  where: VerificationWhereInputSchema.optional(), 
  orderBy: z.union([ VerificationOrderByWithRelationInputSchema.array(), VerificationOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const VerificationGroupByArgsSchema: z.ZodType<Prisma.VerificationGroupByArgs> = z.object({
  where: VerificationWhereInputSchema.optional(), 
  orderBy: z.union([ VerificationOrderByWithAggregationInputSchema.array(), VerificationOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationScalarFieldEnumSchema.array(), 
  having: VerificationScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const VerificationFindUniqueArgsSchema: z.ZodType<Prisma.VerificationFindUniqueArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereUniqueInputSchema, 
}).strict();

export const VerificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationFindUniqueOrThrowArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereUniqueInputSchema, 
}).strict();

export const LibraryFindFirstArgsSchema: z.ZodType<Prisma.LibraryFindFirstArgs> = z.object({
  select: LibrarySelectSchema.optional(),
  include: LibraryIncludeSchema.optional(),
  where: LibraryWhereInputSchema.optional(), 
  orderBy: z.union([ LibraryOrderByWithRelationInputSchema.array(), LibraryOrderByWithRelationInputSchema ]).optional(),
  cursor: LibraryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LibraryScalarFieldEnumSchema, LibraryScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const LibraryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LibraryFindFirstOrThrowArgs> = z.object({
  select: LibrarySelectSchema.optional(),
  include: LibraryIncludeSchema.optional(),
  where: LibraryWhereInputSchema.optional(), 
  orderBy: z.union([ LibraryOrderByWithRelationInputSchema.array(), LibraryOrderByWithRelationInputSchema ]).optional(),
  cursor: LibraryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LibraryScalarFieldEnumSchema, LibraryScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const LibraryFindManyArgsSchema: z.ZodType<Prisma.LibraryFindManyArgs> = z.object({
  select: LibrarySelectSchema.optional(),
  include: LibraryIncludeSchema.optional(),
  where: LibraryWhereInputSchema.optional(), 
  orderBy: z.union([ LibraryOrderByWithRelationInputSchema.array(), LibraryOrderByWithRelationInputSchema ]).optional(),
  cursor: LibraryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LibraryScalarFieldEnumSchema, LibraryScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const LibraryAggregateArgsSchema: z.ZodType<Prisma.LibraryAggregateArgs> = z.object({
  where: LibraryWhereInputSchema.optional(), 
  orderBy: z.union([ LibraryOrderByWithRelationInputSchema.array(), LibraryOrderByWithRelationInputSchema ]).optional(),
  cursor: LibraryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const LibraryGroupByArgsSchema: z.ZodType<Prisma.LibraryGroupByArgs> = z.object({
  where: LibraryWhereInputSchema.optional(), 
  orderBy: z.union([ LibraryOrderByWithAggregationInputSchema.array(), LibraryOrderByWithAggregationInputSchema ]).optional(),
  by: LibraryScalarFieldEnumSchema.array(), 
  having: LibraryScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const LibraryFindUniqueArgsSchema: z.ZodType<Prisma.LibraryFindUniqueArgs> = z.object({
  select: LibrarySelectSchema.optional(),
  include: LibraryIncludeSchema.optional(),
  where: LibraryWhereUniqueInputSchema, 
}).strict();

export const LibraryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LibraryFindUniqueOrThrowArgs> = z.object({
  select: LibrarySelectSchema.optional(),
  include: LibraryIncludeSchema.optional(),
  where: LibraryWhereUniqueInputSchema, 
}).strict();

export const SeatFindFirstArgsSchema: z.ZodType<Prisma.SeatFindFirstArgs> = z.object({
  select: SeatSelectSchema.optional(),
  include: SeatIncludeSchema.optional(),
  where: SeatWhereInputSchema.optional(), 
  orderBy: z.union([ SeatOrderByWithRelationInputSchema.array(), SeatOrderByWithRelationInputSchema ]).optional(),
  cursor: SeatWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SeatScalarFieldEnumSchema, SeatScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SeatFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SeatFindFirstOrThrowArgs> = z.object({
  select: SeatSelectSchema.optional(),
  include: SeatIncludeSchema.optional(),
  where: SeatWhereInputSchema.optional(), 
  orderBy: z.union([ SeatOrderByWithRelationInputSchema.array(), SeatOrderByWithRelationInputSchema ]).optional(),
  cursor: SeatWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SeatScalarFieldEnumSchema, SeatScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SeatFindManyArgsSchema: z.ZodType<Prisma.SeatFindManyArgs> = z.object({
  select: SeatSelectSchema.optional(),
  include: SeatIncludeSchema.optional(),
  where: SeatWhereInputSchema.optional(), 
  orderBy: z.union([ SeatOrderByWithRelationInputSchema.array(), SeatOrderByWithRelationInputSchema ]).optional(),
  cursor: SeatWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SeatScalarFieldEnumSchema, SeatScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SeatAggregateArgsSchema: z.ZodType<Prisma.SeatAggregateArgs> = z.object({
  where: SeatWhereInputSchema.optional(), 
  orderBy: z.union([ SeatOrderByWithRelationInputSchema.array(), SeatOrderByWithRelationInputSchema ]).optional(),
  cursor: SeatWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const SeatGroupByArgsSchema: z.ZodType<Prisma.SeatGroupByArgs> = z.object({
  where: SeatWhereInputSchema.optional(), 
  orderBy: z.union([ SeatOrderByWithAggregationInputSchema.array(), SeatOrderByWithAggregationInputSchema ]).optional(),
  by: SeatScalarFieldEnumSchema.array(), 
  having: SeatScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const SeatFindUniqueArgsSchema: z.ZodType<Prisma.SeatFindUniqueArgs> = z.object({
  select: SeatSelectSchema.optional(),
  include: SeatIncludeSchema.optional(),
  where: SeatWhereUniqueInputSchema, 
}).strict();

export const SeatFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SeatFindUniqueOrThrowArgs> = z.object({
  select: SeatSelectSchema.optional(),
  include: SeatIncludeSchema.optional(),
  where: SeatWhereUniqueInputSchema, 
}).strict();

export const MemberFindFirstArgsSchema: z.ZodType<Prisma.MemberFindFirstArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereInputSchema.optional(), 
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(), MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberScalarFieldEnumSchema, MemberScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const MemberFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MemberFindFirstOrThrowArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereInputSchema.optional(), 
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(), MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberScalarFieldEnumSchema, MemberScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const MemberFindManyArgsSchema: z.ZodType<Prisma.MemberFindManyArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereInputSchema.optional(), 
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(), MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberScalarFieldEnumSchema, MemberScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const MemberAggregateArgsSchema: z.ZodType<Prisma.MemberAggregateArgs> = z.object({
  where: MemberWhereInputSchema.optional(), 
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(), MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const MemberGroupByArgsSchema: z.ZodType<Prisma.MemberGroupByArgs> = z.object({
  where: MemberWhereInputSchema.optional(), 
  orderBy: z.union([ MemberOrderByWithAggregationInputSchema.array(), MemberOrderByWithAggregationInputSchema ]).optional(),
  by: MemberScalarFieldEnumSchema.array(), 
  having: MemberScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const MemberFindUniqueArgsSchema: z.ZodType<Prisma.MemberFindUniqueArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema, 
}).strict();

export const MemberFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MemberFindUniqueOrThrowArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema, 
}).strict();

export const ShiftFindFirstArgsSchema: z.ZodType<Prisma.ShiftFindFirstArgs> = z.object({
  select: ShiftSelectSchema.optional(),
  include: ShiftIncludeSchema.optional(),
  where: ShiftWhereInputSchema.optional(), 
  orderBy: z.union([ ShiftOrderByWithRelationInputSchema.array(), ShiftOrderByWithRelationInputSchema ]).optional(),
  cursor: ShiftWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ShiftScalarFieldEnumSchema, ShiftScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ShiftFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ShiftFindFirstOrThrowArgs> = z.object({
  select: ShiftSelectSchema.optional(),
  include: ShiftIncludeSchema.optional(),
  where: ShiftWhereInputSchema.optional(), 
  orderBy: z.union([ ShiftOrderByWithRelationInputSchema.array(), ShiftOrderByWithRelationInputSchema ]).optional(),
  cursor: ShiftWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ShiftScalarFieldEnumSchema, ShiftScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ShiftFindManyArgsSchema: z.ZodType<Prisma.ShiftFindManyArgs> = z.object({
  select: ShiftSelectSchema.optional(),
  include: ShiftIncludeSchema.optional(),
  where: ShiftWhereInputSchema.optional(), 
  orderBy: z.union([ ShiftOrderByWithRelationInputSchema.array(), ShiftOrderByWithRelationInputSchema ]).optional(),
  cursor: ShiftWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ShiftScalarFieldEnumSchema, ShiftScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ShiftAggregateArgsSchema: z.ZodType<Prisma.ShiftAggregateArgs> = z.object({
  where: ShiftWhereInputSchema.optional(), 
  orderBy: z.union([ ShiftOrderByWithRelationInputSchema.array(), ShiftOrderByWithRelationInputSchema ]).optional(),
  cursor: ShiftWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ShiftGroupByArgsSchema: z.ZodType<Prisma.ShiftGroupByArgs> = z.object({
  where: ShiftWhereInputSchema.optional(), 
  orderBy: z.union([ ShiftOrderByWithAggregationInputSchema.array(), ShiftOrderByWithAggregationInputSchema ]).optional(),
  by: ShiftScalarFieldEnumSchema.array(), 
  having: ShiftScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ShiftFindUniqueArgsSchema: z.ZodType<Prisma.ShiftFindUniqueArgs> = z.object({
  select: ShiftSelectSchema.optional(),
  include: ShiftIncludeSchema.optional(),
  where: ShiftWhereUniqueInputSchema, 
}).strict();

export const ShiftFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ShiftFindUniqueOrThrowArgs> = z.object({
  select: ShiftSelectSchema.optional(),
  include: ShiftIncludeSchema.optional(),
  where: ShiftWhereUniqueInputSchema, 
}).strict();

export const BookingFindFirstArgsSchema: z.ZodType<Prisma.BookingFindFirstArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereInputSchema.optional(), 
  orderBy: z.union([ BookingOrderByWithRelationInputSchema.array(), BookingOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingScalarFieldEnumSchema, BookingScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const BookingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BookingFindFirstOrThrowArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereInputSchema.optional(), 
  orderBy: z.union([ BookingOrderByWithRelationInputSchema.array(), BookingOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingScalarFieldEnumSchema, BookingScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const BookingFindManyArgsSchema: z.ZodType<Prisma.BookingFindManyArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereInputSchema.optional(), 
  orderBy: z.union([ BookingOrderByWithRelationInputSchema.array(), BookingOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingScalarFieldEnumSchema, BookingScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const BookingAggregateArgsSchema: z.ZodType<Prisma.BookingAggregateArgs> = z.object({
  where: BookingWhereInputSchema.optional(), 
  orderBy: z.union([ BookingOrderByWithRelationInputSchema.array(), BookingOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const BookingGroupByArgsSchema: z.ZodType<Prisma.BookingGroupByArgs> = z.object({
  where: BookingWhereInputSchema.optional(), 
  orderBy: z.union([ BookingOrderByWithAggregationInputSchema.array(), BookingOrderByWithAggregationInputSchema ]).optional(),
  by: BookingScalarFieldEnumSchema.array(), 
  having: BookingScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const BookingFindUniqueArgsSchema: z.ZodType<Prisma.BookingFindUniqueArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereUniqueInputSchema, 
}).strict();

export const BookingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BookingFindUniqueOrThrowArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereUniqueInputSchema, 
}).strict();

export const PaymentFindFirstArgsSchema: z.ZodType<Prisma.PaymentFindFirstArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereInputSchema.optional(), 
  orderBy: z.union([ PaymentOrderByWithRelationInputSchema.array(), PaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentScalarFieldEnumSchema, PaymentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const PaymentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PaymentFindFirstOrThrowArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereInputSchema.optional(), 
  orderBy: z.union([ PaymentOrderByWithRelationInputSchema.array(), PaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentScalarFieldEnumSchema, PaymentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const PaymentFindManyArgsSchema: z.ZodType<Prisma.PaymentFindManyArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereInputSchema.optional(), 
  orderBy: z.union([ PaymentOrderByWithRelationInputSchema.array(), PaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentScalarFieldEnumSchema, PaymentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const PaymentAggregateArgsSchema: z.ZodType<Prisma.PaymentAggregateArgs> = z.object({
  where: PaymentWhereInputSchema.optional(), 
  orderBy: z.union([ PaymentOrderByWithRelationInputSchema.array(), PaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PaymentGroupByArgsSchema: z.ZodType<Prisma.PaymentGroupByArgs> = z.object({
  where: PaymentWhereInputSchema.optional(), 
  orderBy: z.union([ PaymentOrderByWithAggregationInputSchema.array(), PaymentOrderByWithAggregationInputSchema ]).optional(),
  by: PaymentScalarFieldEnumSchema.array(), 
  having: PaymentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PaymentFindUniqueArgsSchema: z.ZodType<Prisma.PaymentFindUniqueArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereUniqueInputSchema, 
}).strict();

export const PaymentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PaymentFindUniqueOrThrowArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereUniqueInputSchema, 
}).strict();

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema, UserUncheckedCreateInputSchema ]),
}).strict();

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema, 
  create: z.union([ UserCreateInputSchema, UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema, UserUncheckedUpdateInputSchema ]),
}).strict();

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema, UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema, UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema, 
}).strict();

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema, UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema, 
}).strict();

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema, SessionUncheckedCreateInputSchema ]),
}).strict();

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema, 
  create: z.union([ SessionCreateInputSchema, SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema, SessionUncheckedUpdateInputSchema ]),
}).strict();

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema, SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const SessionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SessionCreateManyAndReturnArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema, SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema, 
}).strict();

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema, SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema, 
}).strict();

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema, SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SessionUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SessionUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema, SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema, AccountUncheckedCreateInputSchema ]),
}).strict();

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema, 
  create: z.union([ AccountCreateInputSchema, AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema ]),
}).strict();

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema, AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const AccountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountCreateManyAndReturnArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema, AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema, 
}).strict();

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema, 
}).strict();

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema, AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const AccountUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema, AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const VerificationCreateArgsSchema: z.ZodType<Prisma.VerificationCreateArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  data: z.union([ VerificationCreateInputSchema, VerificationUncheckedCreateInputSchema ]),
}).strict();

export const VerificationUpsertArgsSchema: z.ZodType<Prisma.VerificationUpsertArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereUniqueInputSchema, 
  create: z.union([ VerificationCreateInputSchema, VerificationUncheckedCreateInputSchema ]),
  update: z.union([ VerificationUpdateInputSchema, VerificationUncheckedUpdateInputSchema ]),
}).strict();

export const VerificationCreateManyArgsSchema: z.ZodType<Prisma.VerificationCreateManyArgs> = z.object({
  data: z.union([ VerificationCreateManyInputSchema, VerificationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const VerificationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationCreateManyAndReturnArgs> = z.object({
  data: z.union([ VerificationCreateManyInputSchema, VerificationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const VerificationDeleteArgsSchema: z.ZodType<Prisma.VerificationDeleteArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  where: VerificationWhereUniqueInputSchema, 
}).strict();

export const VerificationUpdateArgsSchema: z.ZodType<Prisma.VerificationUpdateArgs> = z.object({
  select: VerificationSelectSchema.optional(),
  data: z.union([ VerificationUpdateInputSchema, VerificationUncheckedUpdateInputSchema ]),
  where: VerificationWhereUniqueInputSchema, 
}).strict();

export const VerificationUpdateManyArgsSchema: z.ZodType<Prisma.VerificationUpdateManyArgs> = z.object({
  data: z.union([ VerificationUpdateManyMutationInputSchema, VerificationUncheckedUpdateManyInputSchema ]),
  where: VerificationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const VerificationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationUpdateManyAndReturnArgs> = z.object({
  data: z.union([ VerificationUpdateManyMutationInputSchema, VerificationUncheckedUpdateManyInputSchema ]),
  where: VerificationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const VerificationDeleteManyArgsSchema: z.ZodType<Prisma.VerificationDeleteManyArgs> = z.object({
  where: VerificationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const LibraryCreateArgsSchema: z.ZodType<Prisma.LibraryCreateArgs> = z.object({
  select: LibrarySelectSchema.optional(),
  include: LibraryIncludeSchema.optional(),
  data: z.union([ LibraryCreateInputSchema, LibraryUncheckedCreateInputSchema ]),
}).strict();

export const LibraryUpsertArgsSchema: z.ZodType<Prisma.LibraryUpsertArgs> = z.object({
  select: LibrarySelectSchema.optional(),
  include: LibraryIncludeSchema.optional(),
  where: LibraryWhereUniqueInputSchema, 
  create: z.union([ LibraryCreateInputSchema, LibraryUncheckedCreateInputSchema ]),
  update: z.union([ LibraryUpdateInputSchema, LibraryUncheckedUpdateInputSchema ]),
}).strict();

export const LibraryCreateManyArgsSchema: z.ZodType<Prisma.LibraryCreateManyArgs> = z.object({
  data: z.union([ LibraryCreateManyInputSchema, LibraryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const LibraryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LibraryCreateManyAndReturnArgs> = z.object({
  data: z.union([ LibraryCreateManyInputSchema, LibraryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const LibraryDeleteArgsSchema: z.ZodType<Prisma.LibraryDeleteArgs> = z.object({
  select: LibrarySelectSchema.optional(),
  include: LibraryIncludeSchema.optional(),
  where: LibraryWhereUniqueInputSchema, 
}).strict();

export const LibraryUpdateArgsSchema: z.ZodType<Prisma.LibraryUpdateArgs> = z.object({
  select: LibrarySelectSchema.optional(),
  include: LibraryIncludeSchema.optional(),
  data: z.union([ LibraryUpdateInputSchema, LibraryUncheckedUpdateInputSchema ]),
  where: LibraryWhereUniqueInputSchema, 
}).strict();

export const LibraryUpdateManyArgsSchema: z.ZodType<Prisma.LibraryUpdateManyArgs> = z.object({
  data: z.union([ LibraryUpdateManyMutationInputSchema, LibraryUncheckedUpdateManyInputSchema ]),
  where: LibraryWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const LibraryUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LibraryUpdateManyAndReturnArgs> = z.object({
  data: z.union([ LibraryUpdateManyMutationInputSchema, LibraryUncheckedUpdateManyInputSchema ]),
  where: LibraryWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const LibraryDeleteManyArgsSchema: z.ZodType<Prisma.LibraryDeleteManyArgs> = z.object({
  where: LibraryWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SeatCreateArgsSchema: z.ZodType<Prisma.SeatCreateArgs> = z.object({
  select: SeatSelectSchema.optional(),
  include: SeatIncludeSchema.optional(),
  data: z.union([ SeatCreateInputSchema, SeatUncheckedCreateInputSchema ]),
}).strict();

export const SeatUpsertArgsSchema: z.ZodType<Prisma.SeatUpsertArgs> = z.object({
  select: SeatSelectSchema.optional(),
  include: SeatIncludeSchema.optional(),
  where: SeatWhereUniqueInputSchema, 
  create: z.union([ SeatCreateInputSchema, SeatUncheckedCreateInputSchema ]),
  update: z.union([ SeatUpdateInputSchema, SeatUncheckedUpdateInputSchema ]),
}).strict();

export const SeatCreateManyArgsSchema: z.ZodType<Prisma.SeatCreateManyArgs> = z.object({
  data: z.union([ SeatCreateManyInputSchema, SeatCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const SeatCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SeatCreateManyAndReturnArgs> = z.object({
  data: z.union([ SeatCreateManyInputSchema, SeatCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const SeatDeleteArgsSchema: z.ZodType<Prisma.SeatDeleteArgs> = z.object({
  select: SeatSelectSchema.optional(),
  include: SeatIncludeSchema.optional(),
  where: SeatWhereUniqueInputSchema, 
}).strict();

export const SeatUpdateArgsSchema: z.ZodType<Prisma.SeatUpdateArgs> = z.object({
  select: SeatSelectSchema.optional(),
  include: SeatIncludeSchema.optional(),
  data: z.union([ SeatUpdateInputSchema, SeatUncheckedUpdateInputSchema ]),
  where: SeatWhereUniqueInputSchema, 
}).strict();

export const SeatUpdateManyArgsSchema: z.ZodType<Prisma.SeatUpdateManyArgs> = z.object({
  data: z.union([ SeatUpdateManyMutationInputSchema, SeatUncheckedUpdateManyInputSchema ]),
  where: SeatWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SeatUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SeatUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SeatUpdateManyMutationInputSchema, SeatUncheckedUpdateManyInputSchema ]),
  where: SeatWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SeatDeleteManyArgsSchema: z.ZodType<Prisma.SeatDeleteManyArgs> = z.object({
  where: SeatWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const MemberCreateArgsSchema: z.ZodType<Prisma.MemberCreateArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  data: z.union([ MemberCreateInputSchema, MemberUncheckedCreateInputSchema ]),
}).strict();

export const MemberUpsertArgsSchema: z.ZodType<Prisma.MemberUpsertArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema, 
  create: z.union([ MemberCreateInputSchema, MemberUncheckedCreateInputSchema ]),
  update: z.union([ MemberUpdateInputSchema, MemberUncheckedUpdateInputSchema ]),
}).strict();

export const MemberCreateManyArgsSchema: z.ZodType<Prisma.MemberCreateManyArgs> = z.object({
  data: z.union([ MemberCreateManyInputSchema, MemberCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const MemberCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MemberCreateManyAndReturnArgs> = z.object({
  data: z.union([ MemberCreateManyInputSchema, MemberCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const MemberDeleteArgsSchema: z.ZodType<Prisma.MemberDeleteArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema, 
}).strict();

export const MemberUpdateArgsSchema: z.ZodType<Prisma.MemberUpdateArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  data: z.union([ MemberUpdateInputSchema, MemberUncheckedUpdateInputSchema ]),
  where: MemberWhereUniqueInputSchema, 
}).strict();

export const MemberUpdateManyArgsSchema: z.ZodType<Prisma.MemberUpdateManyArgs> = z.object({
  data: z.union([ MemberUpdateManyMutationInputSchema, MemberUncheckedUpdateManyInputSchema ]),
  where: MemberWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const MemberUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.MemberUpdateManyAndReturnArgs> = z.object({
  data: z.union([ MemberUpdateManyMutationInputSchema, MemberUncheckedUpdateManyInputSchema ]),
  where: MemberWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const MemberDeleteManyArgsSchema: z.ZodType<Prisma.MemberDeleteManyArgs> = z.object({
  where: MemberWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ShiftCreateArgsSchema: z.ZodType<Prisma.ShiftCreateArgs> = z.object({
  select: ShiftSelectSchema.optional(),
  include: ShiftIncludeSchema.optional(),
  data: z.union([ ShiftCreateInputSchema, ShiftUncheckedCreateInputSchema ]),
}).strict();

export const ShiftUpsertArgsSchema: z.ZodType<Prisma.ShiftUpsertArgs> = z.object({
  select: ShiftSelectSchema.optional(),
  include: ShiftIncludeSchema.optional(),
  where: ShiftWhereUniqueInputSchema, 
  create: z.union([ ShiftCreateInputSchema, ShiftUncheckedCreateInputSchema ]),
  update: z.union([ ShiftUpdateInputSchema, ShiftUncheckedUpdateInputSchema ]),
}).strict();

export const ShiftCreateManyArgsSchema: z.ZodType<Prisma.ShiftCreateManyArgs> = z.object({
  data: z.union([ ShiftCreateManyInputSchema, ShiftCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ShiftCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ShiftCreateManyAndReturnArgs> = z.object({
  data: z.union([ ShiftCreateManyInputSchema, ShiftCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ShiftDeleteArgsSchema: z.ZodType<Prisma.ShiftDeleteArgs> = z.object({
  select: ShiftSelectSchema.optional(),
  include: ShiftIncludeSchema.optional(),
  where: ShiftWhereUniqueInputSchema, 
}).strict();

export const ShiftUpdateArgsSchema: z.ZodType<Prisma.ShiftUpdateArgs> = z.object({
  select: ShiftSelectSchema.optional(),
  include: ShiftIncludeSchema.optional(),
  data: z.union([ ShiftUpdateInputSchema, ShiftUncheckedUpdateInputSchema ]),
  where: ShiftWhereUniqueInputSchema, 
}).strict();

export const ShiftUpdateManyArgsSchema: z.ZodType<Prisma.ShiftUpdateManyArgs> = z.object({
  data: z.union([ ShiftUpdateManyMutationInputSchema, ShiftUncheckedUpdateManyInputSchema ]),
  where: ShiftWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ShiftUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ShiftUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ShiftUpdateManyMutationInputSchema, ShiftUncheckedUpdateManyInputSchema ]),
  where: ShiftWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ShiftDeleteManyArgsSchema: z.ZodType<Prisma.ShiftDeleteManyArgs> = z.object({
  where: ShiftWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const BookingCreateArgsSchema: z.ZodType<Prisma.BookingCreateArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  data: z.union([ BookingCreateInputSchema, BookingUncheckedCreateInputSchema ]),
}).strict();

export const BookingUpsertArgsSchema: z.ZodType<Prisma.BookingUpsertArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereUniqueInputSchema, 
  create: z.union([ BookingCreateInputSchema, BookingUncheckedCreateInputSchema ]),
  update: z.union([ BookingUpdateInputSchema, BookingUncheckedUpdateInputSchema ]),
}).strict();

export const BookingCreateManyArgsSchema: z.ZodType<Prisma.BookingCreateManyArgs> = z.object({
  data: z.union([ BookingCreateManyInputSchema, BookingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const BookingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingCreateManyAndReturnArgs> = z.object({
  data: z.union([ BookingCreateManyInputSchema, BookingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const BookingDeleteArgsSchema: z.ZodType<Prisma.BookingDeleteArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereUniqueInputSchema, 
}).strict();

export const BookingUpdateArgsSchema: z.ZodType<Prisma.BookingUpdateArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  data: z.union([ BookingUpdateInputSchema, BookingUncheckedUpdateInputSchema ]),
  where: BookingWhereUniqueInputSchema, 
}).strict();

export const BookingUpdateManyArgsSchema: z.ZodType<Prisma.BookingUpdateManyArgs> = z.object({
  data: z.union([ BookingUpdateManyMutationInputSchema, BookingUncheckedUpdateManyInputSchema ]),
  where: BookingWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const BookingUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingUpdateManyAndReturnArgs> = z.object({
  data: z.union([ BookingUpdateManyMutationInputSchema, BookingUncheckedUpdateManyInputSchema ]),
  where: BookingWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const BookingDeleteManyArgsSchema: z.ZodType<Prisma.BookingDeleteManyArgs> = z.object({
  where: BookingWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const PaymentCreateArgsSchema: z.ZodType<Prisma.PaymentCreateArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  data: z.union([ PaymentCreateInputSchema, PaymentUncheckedCreateInputSchema ]),
}).strict();

export const PaymentUpsertArgsSchema: z.ZodType<Prisma.PaymentUpsertArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereUniqueInputSchema, 
  create: z.union([ PaymentCreateInputSchema, PaymentUncheckedCreateInputSchema ]),
  update: z.union([ PaymentUpdateInputSchema, PaymentUncheckedUpdateInputSchema ]),
}).strict();

export const PaymentCreateManyArgsSchema: z.ZodType<Prisma.PaymentCreateManyArgs> = z.object({
  data: z.union([ PaymentCreateManyInputSchema, PaymentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const PaymentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PaymentCreateManyAndReturnArgs> = z.object({
  data: z.union([ PaymentCreateManyInputSchema, PaymentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const PaymentDeleteArgsSchema: z.ZodType<Prisma.PaymentDeleteArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereUniqueInputSchema, 
}).strict();

export const PaymentUpdateArgsSchema: z.ZodType<Prisma.PaymentUpdateArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  data: z.union([ PaymentUpdateInputSchema, PaymentUncheckedUpdateInputSchema ]),
  where: PaymentWhereUniqueInputSchema, 
}).strict();

export const PaymentUpdateManyArgsSchema: z.ZodType<Prisma.PaymentUpdateManyArgs> = z.object({
  data: z.union([ PaymentUpdateManyMutationInputSchema, PaymentUncheckedUpdateManyInputSchema ]),
  where: PaymentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const PaymentUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PaymentUpdateManyAndReturnArgs> = z.object({
  data: z.union([ PaymentUpdateManyMutationInputSchema, PaymentUncheckedUpdateManyInputSchema ]),
  where: PaymentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const PaymentDeleteManyArgsSchema: z.ZodType<Prisma.PaymentDeleteManyArgs> = z.object({
  where: PaymentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();
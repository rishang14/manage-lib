// all apis end point 

// | Method   | Endpoint           | Purpose                              |
// | -------- | ------------------ | ------------------------------------ |
// | `POST`   | `/api/library`     | Create a new library                 |
// | `GET`    | `/api/library/:id` | Get full details of one library      |
// | `GET`    | `/api/library`     | Get all libraries user has access to |
// | `DELETE` | `/api/library/:id` | Delete a library                     |
 
// member 
// | -------- | --------------------- | -------------------------------- |
// | `POST`   | `/api/member/:seatId` | Add a member to a seat           |
// | `DELETE` | `/api/member/:seatId` | Remove member from seat          |
// | `PATCH`  | `/api/member/:id`     | Update member info (phone, name) |
// | `GET`    | `/api/members`        | List all members (with filters)  |
// | `GET`    | `/api/member/:id`     | Get specific member details      |


// seat  
// | -------- | --------------- | ------------------------------------------------------ |
// | `POST`   | `/api/seat`     | Add a new seat                                         |
// | `DELETE` | `/api/seat/:id` | Delete a seat                                          |
// | `GET`    | `/api/seats`    | Get seats (with query: available, shift, date, search) |
// | `GET`    | `/api/seat/:id` | Get seat details + bookings                            |

// shifts  
// | -------- | ----------------- | ----------------------------- |
// | `POST`   | `/api/shifts`     | Add a new shift for a library |
// | `GET`    | `/api/shifts`     | List all shifts of a library  |
// | `PATCH`  | `/api/shifts/:id` | Update shift timing           |
// | `DELETE` | `/api/shifts/:id` | Delete a shift                | 

// payment 

// | ------- | ------------------------- | ---------------------------------- |
// | `POST`  | `/api/payments`           | Add or mark payment for a month    |
// | `GET`   | `/api/payments`           | Get all payments (filterable)      |
// | `GET`   | `/api/payments/:memberId` | Get payment history for one member |
// | `GET`   | `/api/payments/pending`   | List all members with payment due  |
// | `PATCH` | `/api/payments/:id`       | Mark as paid                       |

// rolemanagement  
// | -------- | -------------------- | ------------------------- |
// | `POST`   | `/api/user-role`     | Assign manager to library |
// | `DELETE` | `/api/user-role/:id` | Remove manager access     |


import { Document, Schema, Model, model } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface UserInterface {
    email?: string
    firstName?: string
    lastName?: string
    password: string
  }

export interface UserModel extends UserInterface, Document {
  fullName(): string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: { type: String, required: true, select: true }
}, {
  timestamps: true
})

// UserSchema.pre('save', async function (next) {
//   const hash = await bcrypt.hash(this.password, 10)
//   this.password = hash
//   next()
// })

UserSchema.methods.fullName = function (): string {
  return (this.firstName.trim() + ' ' + this.lastName.trim())
}

export const User: Model<UserModel> = model<UserModel>('User', UserSchema)

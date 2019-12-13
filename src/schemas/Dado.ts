import { Schema, model, Document } from 'mongoose'

interface DadoInterface extends Document{
  campoObrigatorio: string,
  campoNaoObrigatorio?: string,
}

const DadoSchema = new Schema({
  campo: String,
  corpo: String
}, {
  timestamps: true
})

DadoSchema.methods.fullName = function ():string {
  return this.firstName + ' ' + this.lastName
}

export default model<DadoInterface>('Dado', DadoSchema)

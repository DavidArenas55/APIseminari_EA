import mongoose, { Schema, Document } from 'mongoose';

// Interfaz para TypeScript
export interface ISubject extends Document {
    name: string;
    teacher: string;
    alumni: mongoose.Types.ObjectId[];  // Array de IDs de Users
}

// Esquema de Mongoose
const SubjectSchema = new Schema<ISubject>({
    name: { type: String, required: true },
    teacher: { type: String, required: true },
    alumni: [{ type: Schema.Types.ObjectId, ref: 'User' }]  // Relación con el modelo User
});

// Exportamos el modelo
export default mongoose.model<ISubject>('Subject', SubjectSchema);

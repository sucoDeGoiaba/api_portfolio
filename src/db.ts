import mongoose, {Mongoose} from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose.set('strictQuery', true)


export default async function conectarDB() {
    const pwd : String = encodeURIComponent(process.env.PASSWORD || '')
    const usr : String = encodeURIComponent(process.env.USER || '')
    await mongoose.connect(`mongodb+srv://${usr}:${pwd}@cluster0.f5e2rtw.mongodb.net/?retryWrites=true&w=majority`).catch((e : Error) => console.error(e));
    console.log("Conectado!");
}

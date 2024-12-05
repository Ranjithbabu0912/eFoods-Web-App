import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Ranjith0912:Ranjith0912@cluster0.5oimf.mongodb.net/ecaterer').then(() => console.log("DB Connected"));
}

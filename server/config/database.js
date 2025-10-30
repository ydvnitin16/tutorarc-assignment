import mongoose from 'mongoose';

async function connectDB() {
    await mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log('Database connected'));
}

export { connectDB };

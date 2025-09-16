import mongoose from "mongoose";

export const connect = () =>
    mongoose.connect("")
        .then(() => console.log("Connected to MongoDB!"))
        .catch((error) => console.error(`Failed to connect MongoDB! \n${error.message}`));
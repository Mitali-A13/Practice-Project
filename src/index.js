//this line make the code unconsistent --> require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import dbConnect from "./db/index.js";

dotenv.config({
    path: "./env"
});


dbConnect();










/*(async () => {
    try{
        await mongoose.connect(`${process.env.MONDODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Failed to start the server");
            throw error
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        })
    }

    catch(error){
        console.error("Error connecting to the database", error);
        throw error
    }
})()*/

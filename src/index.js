import connectDB from "./db/index.js";
import { configDotenv } from "dotenv";
import { DB_NAME } from "./constants.js";
import { app } from "./app.js";


configDotenv()


connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log(`Mongo db connection error: ${error}`)
}) 




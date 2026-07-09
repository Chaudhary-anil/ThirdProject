import connectDB from "./db/index.js";
import { configDotenv } from "dotenv";
import { DB_NAME } from "./constants.js";


configDotenv()

connectDB()




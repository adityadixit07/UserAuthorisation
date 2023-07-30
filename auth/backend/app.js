import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { db } from "./config/database.js";
import { router } from "./routes/userRoute.js";
dotenv.config();

const app = express();
// dabase connectivity
db;

app.use(express.json());
app.use(express({ urlencoded: "true" }));

app.use("/api/v1", router);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/",()=>{
    console.log('server is running....');
})
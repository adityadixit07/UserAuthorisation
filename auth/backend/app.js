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

app.get('/',(req,res)=>{
    res.send(`<h1>Server is working......API is working fine and use it now everywhere</h1>`)
})
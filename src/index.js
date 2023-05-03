import express from "express";
import { prisma } from "./prisma/prisma.js";
import cors from 'cors'
import dotenv from 'dotenv'

const app = express();

dotenv.config()
function find() {
  return prisma.info.findMany();
}

app.use(cors())
app.get("/", async (request, response) => {
     const user = await find();
     console.log(user)
     response.json(user);
});
app.listen(3000, console.log("App running!"));

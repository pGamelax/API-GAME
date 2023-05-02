import express from "express";
import { prisma } from "./prisma/prisma.js";
import cors from 'cors'

const app = express();

function find() {
  return prisma.info.findMany();
}

app.use(cors())
app.get("/", async (request, response) => {
     const user = await find();
     console.log(user)
     response.json("Oi");
});
app.listen(3000, console.log("App running!"));

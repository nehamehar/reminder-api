import express from "express";
import remindersRouters from "./routers/reminders";

const app= express();
app.use(express.json());
app.use("/reminders" ,remindersRouters)
app.get ("/", (req,res) => {    //create a basic route before app.listen
    res.send("hello");
})
app.listen (8000, () => console.log("serverstarted++")) //on browser it give input while putting lcalhost:8000
//creating route for handling req by endpoint like "/reminder"


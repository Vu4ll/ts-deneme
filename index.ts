import express, { Request, Response } from "express";
import ejs from "ejs";
import path from "path";
import { connect } from "./mongoose"
import Test from "./models/test";
const app = express();
connect();

app.engine("ejs", ejs.renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
    const todos = await Test.find();
    res.status(200);
    res.render("index.ejs", { todos });
});

app.get("/test", async (req: Request, res: Response) => {
    await Test.create({ value: "Testing" });
    res.redirect("/");
});

app.listen(3000, () => console.log("App running on 3000 port"));

export default app;
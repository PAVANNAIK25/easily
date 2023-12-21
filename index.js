import express from "express";
import UserController from "./src/controller/user.controller.js";
import JobsController from "./src/controller/jobs.controller.js";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(expressEjsLayouts);

app.use(express.static("public"));

app.get("/", UserController.renderHome);
app.get("/jobs", JobsController.renderJobs);
app.get("/login", UserController.renderLogin);
app.get("/job/1", JobsController.renderJobID);



export default app;
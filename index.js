// external modules
import 'dotenv/config'
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session";
import cookieParser from "cookie-parser";
import path from "path";

//internal imported modules
import { reqCheck } from "./src/middlewares/req.middleware.js";
import JobsController from "./src/controller/jobs.controller.js";
import UserController from "./src/controller/user.controller.js";
import { upload } from "./src/middlewares/file-upload.middleware.js";
import ApplicantController from "./src/controller/applicant.controller.js";
import { auth } from "./src/middlewares/auth.middleware.js";
import { validateApplyJob, validatePostJob } from "./src/middlewares/validate.middleware.js";


const app = express();
app.use(cookieParser());

app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(expressEjsLayouts);
app.use(session({
    secret: process.env.SECRETE_KEY,
    resave: false,
    saveUninitialized: true,
    cookie:{secure: false},
}));

app.use(express.static("public"));

//get requests

//users requests
app.get("/", UserController.renderHome);
app.get("/login", UserController.renderLogin);
app.get("/logout", UserController.renderLogout);
app.get("/404-page", UserController.errorPage);

//Jobs get requests

app.get("/jobs", JobsController.renderJobs);
app.get("/job/:id", JobsController.renderJobID);
app.get("/post-new-job", auth, JobsController.renderPostNewJob);
app.get("/job/:id/update", auth, JobsController.updateJob);
app.get("/applicants/:id", auth, ApplicantController.renderApplicant);

// POST Request

app.post("/", reqCheck, UserController.postRegistration);
app.post("/login", UserController.postLogin);
app.post("/post-new-job", auth, validatePostJob, JobsController.postPostNewJob);
app.post("/delete-job/:id", JobsController.deleteJob);
app.post("/job/:id", upload.single('resume'), validateApplyJob, ApplicantController.postApplicant);
app.post("/job/:id/update", auth, validatePostJob, JobsController.postUpdateJob);


export default app;
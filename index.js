import express from "express";
import UserController from "./src/controller/user.controller.js";
import JobsController from "./src/controller/jobs.controller.js";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { reqCheck } from "./src/middlewares/req.middleware.js";
import { upload } from "./src/middlewares/file-upload.middleware.js";
import ApplicantController from "./src/controller/applicant.controller.js";
import session from "express-session";
import { auth } from "./src/middlewares/auth.middleware.js";
import { validateApplyJob, validatePostJob } from "./src/middlewares/validate.middleware.js";
import cookieParser from "cookie-parser";


const app = express();
app.use(cookieParser());

app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(expressEjsLayouts);
app.use(session({
    secret: "secreteKey",
    resave: false,
    saveUninitialized: true,
    cookie:{secure: false},
}));

app.use(express.static("public"));

//get requests

app.get("/", UserController.renderHome);
app.get("/jobs", JobsController.renderJobs);
app.get("/login", UserController.renderLogin);
app.get("/job/:id", JobsController.renderJobID);
app.get("/post-new-job", auth, JobsController.renderPostNewJob);
app.get("/applicants/:id", auth, ApplicantController.renderApplicant);
app.get("/job/:id/update", auth, JobsController.updateJob);
app.get("/logout", UserController.renderLogout);
app.get("/404-page", UserController.errorPage);

// POST Request

app.post("/job/:id/update", auth, validatePostJob, JobsController.postUpdateJob);
app.post("/delete-job/:id", JobsController.deleteJob);
app.post("/", reqCheck, UserController.postRegistration);
app.post("/login", UserController.postLogin);
app.post("/post-new-job", auth, validatePostJob, JobsController.postPostNewJob);
app.post("/job/:id", upload.single('resume'), validateApplyJob, ApplicantController.postApplicant);


export default app;
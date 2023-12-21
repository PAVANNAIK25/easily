import { jobs } from "../model/jobs.model.js";

export default class JobsController{
    static renderJobs(req, res){
        res.render("jobs", {
            jobs:jobs,
        })
    }

    static renderJobID(req, res){
        res.render("jobDescription");
    }
}
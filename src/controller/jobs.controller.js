import ApplicantModel from "../model/applicant.model.js";
import JobsModel, { jobs } from "../model/jobs.model.js";
import UserModel from "../model/user.model.js";

export default class JobsController {
    static renderJobs(req, res) {
        const user = UserModel.getUser(req.session.userEmail);    
        res.render("jobs", {
            jobs: jobs, userEmail: req.session.userEmail, user:user
        }); 
    }

    static renderJobID(req, res) {
        const jobId = req.params.id;
        const job = JobsModel.getByID(jobId);
        const applicants = ApplicantModel.getApplicantsByJobId(jobId);
        const user = UserModel.getUser(req.session.userEmail);
        res.render("job-description", { job: job, applicants: applicants.length, userEmail: req.session.userEmail, user:user});
    }

    static renderPostNewJob(req, res) {
        const user = UserModel.getUser(req.session.userEmail);
        res.render("post-new-job", {userEmail: req.session.userEmail, user:user, errors: null});
    }

    static postPostNewJob(req, res) {
        const { category, companyName, role, location, ctc, skills, vacancy, applyBy } = req.body;
        const userEmail = req.session.userEmail;
        JobsModel.add(category, companyName, role, location, ctc, skills, vacancy, applyBy, userEmail);
        res.redirect("/jobs");
    }

    static updateJob(req, res) {
        const jobId = req.params.id;
        const job = JobsModel.getByID(jobId);
        const user = UserModel.getUser(req.session.userEmail);
        res.render("job-update", {job:job, userEmail: req.session.userEmail, user:user});
    }

    static postUpdateJob(req, res){
        const jobId = req.params.id;
        const user = UserModel.getUser(req.session.userEmail);
        JobsModel.updateJob(jobId, req.body, user.email);
        res.redirect("/jobs");
    }

    static deleteJob(req, res){
        const jobId = req.params.id;
        JobsModel.deleteJob(jobId);
        res.redirect("/jobs");
    }
}
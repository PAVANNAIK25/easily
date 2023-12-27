import ApplicantModel from "../model/applicant.model.js";
import nodemailer from "nodemailer";
import JobsModel from "../model/jobs.model.js";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'easily202@gmail.com',
        pass: 'eapgtogujjcdfljr'
    }
});


export default class ApplicantController {

    static renderApplicant(req, res) {
        const jobID = req.params.id;
        const applicants = ApplicantModel.getApplicantsByJobId(jobID);
        res.render("applicants", { applicants: applicants });
    }

    static postApplicant(req, res) {
        const jobID = req.params.id;
        const { name, email, contact } = req.body;
        const resumePath = "public/resume" + req.file.filename;
        ApplicantModel.addApplicant(jobID, name, email, contact, resumePath);
        const job = JobsModel.getByID(jobID);
        try {
            transporter.sendMail({
                from: 'easily202@gmail.com',
                to: email,
                subject: `Successfully Applied for ${job.companyName}`,
                text: `We have received your application for ${job.companyName} for the role of ${job.role}. Thank you for your interest our HR partner team will get in touch with you soon.`
            });
        } catch (err) {
            console.log('Email send failed due to error: ', err);
        }
        res.redirect("/jobs");

    }
    
}
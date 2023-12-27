
export default class ApplicantModel{
    constructor(jobID, appID, name, email, contact, resumePath){
        this.jobID = jobID;
        this.appID = appID;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.resumePath = resumePath;
    }

    static addApplicant(jobID, name, email, contact, resumePath){
        const id = this.createID();
        const newApplicant = new ApplicantModel(jobID, id, name, email, contact, resumePath);
        applicants.push(newApplicant);

    }

    static getApplicantsByJobId(jobID){
        const result = applicants.filter((applicant)=>{
            return (jobID == applicant.jobID)
        });
        return result;
    }

    static getApplicantsByEmail(email){
        const index = applicants.findIndex((app)=>{
            return (app.email == email);
        })

        return applicants[index];
    }

    static createID(){
        return id++;
    }
}

let id=2;
export let applicants = [{
    "jobID":1,
    appID: 1,
    name : "Pavan Naik",
    email : "pavan@gmail.com",
    contact : "9876543245",
    resumePath : "public/resume/PSD to HTML.png",
}];
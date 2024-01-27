export default class JobsModel {
    constructor(id, category, companyName, role, location, ctc, skills, vacancy, applyBy, postedDate, userEmail){
        this.jobId = id;
        this.category = category;
        this.companyName = companyName;
        this.role = role;
        this.location = location;
        this.ctc = ctc;
        this.skills = skills;
        this.vacancy = vacancy;
        this.applyBy = applyBy;
        this.postedDate = postedDate;
        this.userEmail = userEmail;
    }

    static add(category, companyName, role, location, ctc, skills, vacancy, applyBy, userEmail){
        const id = this.createID();
        const newJob = new JobsModel(id, category, companyName, role, location, ctc, skills, vacancy, new Date(applyBy).toLocaleDateString(), new Date().toLocaleString(), userEmail);
        jobs.push(newJob);
    }

    static updateJob(jobId, jobObj, userEmail){
        const job = this.getByID(jobId);
        job.category = jobObj.category;
        job.companyName = jobObj.companyName;
        job.role = jobObj.role;
        job.location = jobObj.location;
        job.ctc = jobObj.ctc;
        job.skills = jobObj.skills;
        job.vacancy = jobObj.vacancy;
        job.applyBy = jobObj.applyBy;  
        job.userEmail = userEmail;

    }

    static createID(){
        return id++;
    }

    static getByID(jobId){
        const index = jobs.findIndex((job)=>{
            return (job.jobId == jobId)
        })
        return jobs[index];
    }

    static getJobsByUser(userEmail){
        const result = jobs.filter((job)=>{
            return (job.userEmail == userEmail);
        });
        return result;
    }

    static deleteJob(jobId){
        const index = jobs.findIndex((job)=>{
            return (job.jobId == jobId)
        });
        jobs.splice(index,1);
    }

}

let id=3;

export let jobs = [{
    "jobId":1,
    "category":"Tech",
    "companyName":"Google",
    "role": "SDE-I",
    "location": "Gurgaon HR IND Remote",
    "ctc": "14-20",
    "vacancy": "4",
    "skills": ["REACT", "NodeJs", "JavaScript", "SQL", "MongoDB"],
    "applyBy": new Date("12-30-2023").toLocaleDateString(),
    "postedDate":"27/12/2023, 12:14:38 am",
    "userEmail":"pavan@gmail.com"
},{
    "jobId":2,
    "category":"Tech",
    "companyName":"Infosys",
    "role": "Software Engineer-I",
    "location": "Mumbai IND Remote",
    "ctc": "15",
    "vacancy": "4",
    "skills": ["REACT", "NodeJs", "JavaScript", "MongoDB"],
    "applyBy":new Date("12-31-2023").toLocaleDateString(),
    "postedDate": "27/12/2023, 02:14:38 am",
    "userEmail":"pavantest@gmail.com",
}];
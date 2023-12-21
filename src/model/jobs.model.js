export class Jobs {
    constructor(jobId, companyName, role, location, ctc, skills){
        this.jobId = jobId;
        this.companyName = companyName;
        this.role = role;
        this.location = location;
        this.ctc = ctc;
        this.skills = skills;
    }

    static add(jobObj){
        
    }

}


export let jobs = [{
    "jobId":1,
    "companyName":"Coding Ninjas",
    "role": "SDE",
    "location": "Gurgaon HR IND Remote",
    "ctc": "14-20",
    "skills": ["REACT", "NodeJs", "JavaScript", "SQL", "MongoDB"],
},{
    "jobId":2,
    "companyName":"Infosys",
    "role": "Software Engineer-I",
    "location": "Mumbai IND Remote",
    "ctc": "15",
    "skills": ["REACT", "NodeJs", "JavaScript", "MongoDB"],
}];
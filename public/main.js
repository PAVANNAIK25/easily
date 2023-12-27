

function deleteJob(id){
    const result = confirm("Do you want to delete this job?");
    if(result){
        fetch("/delete-job/"+id, {
            method: "POST"
        }).then((res)=>{
            if(res.ok){
                location.replace("/jobs");
            }
        })
    }

}
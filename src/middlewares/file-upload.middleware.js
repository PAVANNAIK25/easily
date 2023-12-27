import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/resume");
    },
    filename: function(req, file, cb){
        cb(null, Date.now() +"-"+ file.originalname);
    }

})

export const upload = multer({storage:storage});
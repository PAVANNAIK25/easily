import { ExpressValidator, body, validationResult } from "express-validator";

export const validatePostJob = async (req, res, next) => {
    let rules = [
        body('location').notEmpty().withMessage("Please enter location"),
        body('companyName').notEmpty().withMessage("Please enter Company Name"),
        body('ctc').notEmpty().withMessage("Please enter salary"),
        body('vacancy').notEmpty().withMessage("Please enter vacancy"),
        body('applyBy').notEmpty().withMessage("Select apply by date")

    ];

    //2. running rules

    await Promise.all(rules.map((rule) => rule.run(req)));


    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.render("post-new-job", { errors: validationErrors.array()});
    }

    next();
}


export const validateApplyJob = async (req, res, next) => {
    let rules = [
        body('name').notEmpty().withMessage("Please enter name"),
        body('email').notEmpty().isEmail().withMessage("Please enter Email"),
        body('contact').notEmpty().isNumeric().withMessage("Please enter contact number"),
        body('resume').custom(((value, {req} ) =>{
            if(!req.file){
                throw new Error("Resume is required");
            }
            return true;
        })),
    ];

    //2. running rules

    await Promise.all(rules.map((rule) => rule.run(req)));


    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.send({ errors: validationErrors.array()[0].msg});
    }

    next();
}


export const setLastVisit = (req, res, next) =>{

    res.cookie("lastVisit", new Date().toISOString(), {
        maxAge: 1*24*60*60*1000,
    });

    next();
}
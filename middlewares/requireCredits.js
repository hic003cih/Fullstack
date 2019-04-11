module.exports = (req, res ,next) =>{
    if(req.user.creditis < 1){
        return res.status(403).send({error: 'Not enough creditis!'})
    }

    next();
};

const router = require('express').Router();
//check if user is logged
const authCheck = (req, res, next) => {

    if(!req.user){
        //if not loggedin
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.send('you are logged in, this is your profile - ' + req.user.username);
});

module.exports = router;
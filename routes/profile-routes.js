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
    res.render('profile', {user: req.user});
});

module.exports = router;
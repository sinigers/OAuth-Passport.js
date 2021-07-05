const router = require('express').Router();
const passport = require('passport');


// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    // res.send('logging out');
    req.logout();
    res.redirect('/')
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//call back for google to redirect after log in
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //req.user- object with usser infro from google
    // res.send(req.user);
    res.redirect('/profile/')
});

module.exports = router;

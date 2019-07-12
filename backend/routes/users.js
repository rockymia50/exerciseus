const router = require("express").Router();
//require mongoose model
let User = request('../models/users.models.js')


// Matches with "/users"
router.route("/").get((req,res) => {
    //mongoose method to get all the users, promise
    User.find()
    // return all the users from the DB
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
});

//Matches with ""
router.route('/add').post((req,res) => {
    // posting to the DB with the name from the body
    const username = req.body.username;
    // created new user in DB
    const newUser = new User({username});


newUser.save()
    // save to DB or get an Error
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json('Error:' + err));

});


module.exports = router;
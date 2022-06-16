const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


//Function for admin signup
function signUp(req, res){
    //This is checking of email duplication this will return result if success and error if there is an email exist
    models.Admin.findOne({where:{email:req.body.email}}).then(result => {
        if(result){
            res.status(409).json({
                message: "Email Already Exist",
            });
        }else{
            //this will generate a set of random string and return it as hash password
            bcryptjs.genSalt(10, function(err, salt){
                bcryptjs.hash(req.body.password, salt, function(err, hash){
                    const user = {
                        email: req.body.email,
                        password: hash
                    }
                
                    models.Admin.create(user).then(result => {
                        res.status(201).json({
                            message: "Successfully Registered Admin",
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: "Something Went Wrong!",
                            error: error
                        });
                    });
                });
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something Went Wrong!",
            error: error
        });
    });

}


//Function for admin login
function login(req, res){
    //This will check if there is an email exist in database
    models.Admin.findOne({where:{email: req.body.email}}).then(user => {
        if(user === null){
            res.status(401).json({
                message: "Invalid Email or Password"
            });
        }else {
            //This will check the user enter password to the hash password in the database
            bcryptjs.compare(req.body.password, user.password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email: user.email
                    }, 'secret', function(err, token){
                        res.status(200).json({
                            message: "Successfully Login",
                            token: token
                        });
                    });
                }else{
                    res.status(401).json({
                        message: "Invalid Email or Password"
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something Went Wrong!",
            error: error
        });
    });;
}

module.exports = {
    signUp: signUp,
    login: login
}

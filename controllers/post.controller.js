const models = require('../models')


function save(req, res){
    const post = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Address: req.body.Address,
        Postcode: req.body.Postcode,
        ContactNumber: req.body.ContactNumber,
        Email: req.body.Email,
        Username: req.body.Username,
        Password: req.body.Password
    }

    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Post Created Successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something Went Wrong",
            error: error
        });
    });

}

function show(req, res){
    const id = req.params.id;

    models.Post.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something Went Wrong!"
        });
    })
}

//This function allows to get all the records from database
function viewall(req, res){
    models.Post.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something Went Wrong!"
        })
    });
}

//This function allows to update the data in terms of its user id
function update(req, res){
    const id = req.params.id;

    const updatedPost = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Address: req.body.Address,
        Postcode: req.body.Postcode,
        ContactNumber: req.body.ContactNumber,
        Email: req.body.Email,
        Username: req.body.Username,
        Password: req.body.Password
    }

    models.Post.update(updatedPost, {where: {id: id}}).then(result => {
        res.status(200).json({
            message: "Successfully Updated!",
            post: updatedPost
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something Went Wrong!",
            error: error
        });
    });
}

//This function allows to delete the data of the user
function destroy(req, res){
    const id = req.params.id;

    models.Post.destroy({where:{id:id}}).then(result =>{
        res.status(200).json({
            message: "Successfully Deleted!",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something Went Wrong!",
            error: error
        });
    });
}


module.exports = {
    save: save,
    show: show,
    viewall: viewall,
    update: update,
    destroy: destroy
}
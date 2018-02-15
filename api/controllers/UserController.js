/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    new: (req, res) =>{
        User.create(req.allParams()).exec((err)=>{
            if(err){
                return res.json(err);
            }
            return res.redirect('/');
        })
    },

};


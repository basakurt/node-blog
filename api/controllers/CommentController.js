/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new:(req,res) => {
        Comment.create({
            post: req.query.postId,
            stalker: req.query.stalkerId,
            text: req.query.text,
        }).exec((err)=>{
            if(err){
                return res.json(err) ;
            }
            return res.redirect(`/post/open/${req.query.postId}`);
        })
    }
};


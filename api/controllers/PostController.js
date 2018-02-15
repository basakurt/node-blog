/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: (req, res) => {
        Post.find({})
        .limit(10)
        .sort('createdAt DESC')
        .populate('author')
        .exec((err,posts)=> {
            if(err){
                return res.json(err) ;
            }

            let postsArray = [] ;
            posts.forEach((post)=>{
                postsArray.push({
                    id:post.id,
                    title:post.title,
                    content:post.content,
                    author:post.author.username,
                    datePosted: post.createdAt,
                });
            });
            return res.view('posts', {blogPosts: postsArray}) ;
        })
    },

    new: (req, res) =>{
        Post.create(req.allParams()).exec((err)=>{
            if(err){
                return res.json(err);
            }
            return res.redirect('/');
        })
    },
    delete: (req,res)=>{
        Post.destroy({id:req.params.id}).exec((err) =>{
            if(err){
                return res.json(err);
            }
            return res.redirect('/');

        })
    },

    open: (req,res)=>{
        Post.findOne({id:req.params.id}).populate('comments').exec((err,post)=>{
            if(err){
                return res.json(err);
            }

            return res.view('open', {post}) ;

        })
    },

    clear: (req,res)=>{
        Post.destroy({}).exec((err) =>{
            if(err){
                return res.json(err);
            }
            return res.json('done');
        })
    },

	
};


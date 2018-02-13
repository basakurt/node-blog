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
	
};


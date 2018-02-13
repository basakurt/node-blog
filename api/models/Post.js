/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

schema: true,

  attributes: {

      title:{
        type:'string',
        required:'true',
      },
      content:{
        type:'string',
        required: 'true',
      },
      author:{
        model:'user',
        required:'true',
        
      },

      comments: {
        collection :'comment',
        via: 'post',
      }

  }
};


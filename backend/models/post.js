//to do: Create a schema
//To do: Create a model from that schema

const Joi = require("joi");
const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    dateAdded:  {type: Date, default: Date.now()},
    likes: {type: Number,},
    dislikes: {type: Number,},
    post:{type: String, required: true, minlength: 2, maxlength: 250},
    user:{type: String, required: true, minlength: 2, maxlength: 250}
});
    //add likes and dislikes for each post {type: number; post text to be held on to

postSchema.methods.postValidate = (post) => {
    const schema = Joi.object({
        //  likes:Joi.
      //  dislikes:Joi.
    });
    return schema.validate(post);
}

    const Post = mongoose.model("post", postSchema);

    module.exports = Post;
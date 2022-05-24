//to do: Create a schema
//To do: Create a model from that schema

const Joi = require("joi");
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    videoID: {type: String, required: true, minlength: 2, maxlength: 250},
    dateAdded:  {type: Date, default: Date.now()},
    likes: {type: Number,},
    dislikes: {type: Number,},
    user:{type: String, required: true, minlength: 2, maxlength: 250}
});
    //add likes and dislikes for each user {type: number; user text to be held on to

userSchema.methods.userValidate = (user) => {
    const schema = Joi.object({
       likes:Joi.
       dislikes:Joi.
    });
    return schema.validate(user);
}

    const User = mongoose.model("user", userSchema);

    module.exports = User;

 
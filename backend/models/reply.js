//to do: Create a schema
//To do: Create a model from that schema

const Joi = require("joi");
const mongoose = require("mongoose")

const replySchema = new mongoose.Schema({
    dateAdded:  {type: Date, default: Date.now()},
    likes: {type: Number,},
    dislikes: {type: Number,},
    reply:{type: String, required: true, minlength: 2, maxlength: 250},
    user:{type: String, required: true, minlength: 2, maxlength: 250}
});
    //add likes and dislikes for each reply {type: number; reply text to be held on to

replySchema.methods.replyValidate = (reply) => {
    const schema = Joi.object({
        //  likes:Joi.
      //  dislikes:Joi.
    });
    return schema.validate(reply);
}

    const Reply = mongoose.model("reply", replySchema);

    module.exports = Reply;
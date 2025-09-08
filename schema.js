const Joi=require("joi");
module.exports.userschema=Joi.object(
    {
        user:joi.object({
name:Joi.string().required(),
email:Joi.string().required(),
password:Joi.string().required()
        }).required()
    }
).required();

module.exports.complaintschema=Joi.object({
    complaint:joi.object({
        user:joi.string().required(),
        text:joi.string().required()
    }).required()
}).required();
const Joi=require("joi");
module.exports.citizenschema=Joi.object(
    {
        citizen:joi.object({
name:Joi.string().required(),
mobile:Joi.string().required(),
dob:Joi.string().required(),
address:Joi.string().required(),
idProof:Joi.string().required(),
idProof:Joi.string().required(),
citizenid:Joi.string().required(),
securityquestion:Joi.string().required(),
securityanswer:Joi.string().required(),
role:Joi.string().required(),
isemailverified:Joi.boolean().required(),
ismobileverified:Joi.boolean().required(),
email:Joi.string().required(),
password:Joi.string().required()
        }).required()
    }
).required();

module.exports.complaintschema=Joi.object({
    complaint:joi.object({
        citizen:joi.string().required(),
        text:joi.string().required()
    }).required()
}).required();
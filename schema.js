const joi = require("joi");
const reviews = require("./models/review");

module.exports.listingSchema = joi.object({
    listing:joi.object({
        title:joi.string().required(),
        description:joi.string().required(),
        image: joi.object({
            filename:joi.string(),
            url: joi.string().required(),
          }),
        location:joi.string().required(),
        country:joi.string().required(),
        price:joi.number().required().min(0),
        category:joi.string().required(),
    }).required()
});

module.exports.reviewSchema = joi.object({
    review: joi.object({
        rating: joi.number().min(1).max(5).required(),
        comment:joi.string().required(),
    }).required()
})
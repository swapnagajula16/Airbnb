
const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewControllers = require("../controllers/reviews.js");

// REVIEWS
// POST ROUTE

router.post("/",
    isLoggedIn,
    validateReview, 
    wrapAsync(reviewControllers.createReview )
);

// Delete Route

router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor, wrapAsync(reviewControllers.destroyReview));

module.exports = router;
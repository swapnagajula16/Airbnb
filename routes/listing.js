const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../controllers/listings.js");

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn, 
        upload.single('listing[image]'), 
        validateListing,
        wrapAsync(listingController.createListing)
    );
  

router.get("/new", isLoggedIn, listingController.renderNewForm);


router.get("/filter/:id", wrapAsync(listingController.filter));
router.get("/search", listingController.search);


router
    .route("/:id")
    .get(wrapAsync(listingController.showListing ))
    .put(
        isLoggedIn,
        isOwner,
        upload.single('listing[image]'), 
        validateListing,
        wrapAsync(listingController.updateListing)
    )
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.destroyListing)
    );

router.get("/:id/edit", 
    isLoggedIn, 
    isOwner,
    wrapAsync(listingController.renderEditForm)
);

router.get(
    "/:id/reservelisting",
    isLoggedIn,
    wrapAsync(listingController.reserveListing)
  );

module.exports = router;
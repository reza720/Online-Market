const express=require("express");
const router=express.Router();
const {OfferController}=require("../controllers");

router.post("/",OfferController.createOffer);
router.get("/",OfferController.getOffers);
router.get("/:id",OfferController.getOfferById);
router.put("/:id",OfferController.updateOffer);
router.delete("/:id",OfferController.deleteOffer);

module.exports=router;

const express=require("express");
const router=express.Router();
const {DealController}=require("../controllers");

router.post("/",DealController.createDeal);
router.get("/",DealController.getDeals);
router.get("/:id",DealController.getDealById);
router.put("/:id",DealController.updateDeal);
router.delete("/:id",DealController.deleteDeal);

module.exports=router;
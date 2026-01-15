const express=require("express");
const router=express.Router();
const ItemRouter=require("./itemRouter");
const UserRouter=require("./userRouter");
const OfferRouter=require("./offerRouter");
const DealRouter=require("./dealRouter");

router.use("/items",ItemRouter);
router.use("/users",UserRouter);
router.use("/offers",OfferRouter);
router.use("/deals",DealRouter);

module.exports=router;
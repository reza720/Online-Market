const express=require("express");
const router=express.Router();
const {ItemController}=require("../controllers");
const ItemValidation=require("../middlewares/validations/itemValidation");

router.post("/",ItemValidation.rules,ItemValidation.errorHandler, ItemController.createItem);
router.get("/",ItemController.getItems);
router.get("/:id",ItemController.getItemById);
router.put("/:id",ItemValidation.rules, ItemValidation.errorHandler, ItemController.updateItem);
router.delete("/:id",ItemController.deleteItem);

module.exports=router;


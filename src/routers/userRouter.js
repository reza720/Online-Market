const express=require("express");
const router=express.Router();
const {UserController}=require("../controllers");
const UserValidation=require("../middlewares/validations/userValidation");

router.post("/",UserValidation.rules,UserValidation.errorHandler,UserController.createUser);
router.get("/",UserController.getUsers);
router.get("/:id",UserController.getUserById);
router.put("/:id",UserValidation.rules,UserValidation.errorHandler,UserController.updateUser);
router.delete("/:id",UserController.deleteUser);

module.exports=router;
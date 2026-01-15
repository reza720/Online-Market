const {body, validationResult}=require("express-validator");

const ItemValidation={
    rules:[
        body("name")
            .trim()
            .notEmpty().withMessage("name is required"),
        body("price")
            .notEmpty().withMessage("price is required")
            .isFloat({min:0, max:10000000}).withMessage("price should be between 0 and 10000000"),
        body("imageURL")
            .optional()
            .isURL().withMessage("need valid image URL")
    ],
    errorHandler:(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("validation failed");
            err.statusCode=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
};
module.exports=ItemValidation;

const { body, validationResult } = require("express-validator");

const UserValidation={
  rules: [
    body("name")
      .trim()
      .notEmpty().withMessage("name cannot be empty")
      .matches(/^[a-zA-Z ]+$/).withMessage("name has to be letters and space"),

    body("phone")
      .notEmpty().withMessage("phone number is required")
      .isNumeric().withMessage("phone has to be digits")
      .isLength({ min: 10, max: 10 }).withMessage("phone number has to be 10 digits"),
  ],
  errorHandler: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed");
      err.statusCode = 400;
      err.errors = errors.array();
      return next(err);
    }
    next();
  }
};
module.exports = UserValidation;

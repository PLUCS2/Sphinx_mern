const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateProphecyInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 5, max: 140 })) {
    errors.text = "Prophecy must be between 5 and 140 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Prophetic ramblings are required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};

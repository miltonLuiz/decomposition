import { Schema } from "express-validator";

export default {
  numberToBeDecompose: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Number to be decompose is required!",
    },
    isNumeric: {
      errorMessage: "Number to be decompose must be numeric!",
    },
    isInt: {
      errorMessage: "Number to be decompose must be integer",
    },
  },
} as Schema;

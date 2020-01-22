const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const excelFileSchema = new Schema({
  Description: {
    type: String,
    default: null,
    unique: true
  },
  Category1: {
    type: String,
    default: null
  },
  Category2: {
    type: String,
    default: null
  },
  Category3: {
    type: String,
    default: null
  },
  IncidentORRequest: {
    type: String,
    default: null
  },
  Confidence1: {
    type: Number,
    default: null
  },
  Confidence2: {
    type: Number,
    default: null
  },
  Confidence3: {
    type: Number,
    default: null
  },
  Confidence4: {
    type: Number,
    default: null
  },
  FileName: {
    type: String,
    default: null
  },
  UpdatedBy: {
    type: String,
    default: null
  },
  Entity: [
    {
      entity: { type: String, default: null },
      value: { type: String, default: null },
      start: { type: Number, default: null },
      end: { type: Number, default: null },
      confidence: { type : String, default : null},
      extractor: { type : String, default : null}
    }
  ]
});
excelFileSchema.index({ Description: 1, unique: true });
module.exports = mongoose.model("excel_data", excelFileSchema);

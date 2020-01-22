const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const entitySchema = new Schema({
    EntityName: {
        type: String,
    },
    EntityValue: {
        type: String,
    },
    Start: {
        type: Number
    },
    End: {
        type: Number
    }
});
module.exports = mongoose.model("entity", entitySchema);
 
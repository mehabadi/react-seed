const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankSchema = Schema({
    _id: Schema.Types.ObjectId,   
    title: {
        type: String,
        required: true,
        maxlength: 100
    }   
});

const Bank = mongoose.model('Bank', bankSchema);
module.exports = { Bank }
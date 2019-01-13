const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = Schema({
    //_id: Schema.Types.ObjectId,       
    bank: {
        type: Schema.Types.ObjectId,
        ref: 'Bank',
        required: true
    },
    accountNumber: {
        type: String,
        required: true,
    },    
    ibanNumber: {
        type: String,  
        maxlength: 34      
    },    
    cardNumber: {
        type: String,  
        maxlength: 20
    }, 
    description: {
        type: String        
    },    
    isActive: 
    {
        type: Boolean,
        required: true,
        default: true
    }, 
}, { timestamps: true });

const Account = mongoose.model('Account', accountSchema);

module.exports = { Account }
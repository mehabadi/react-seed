const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config').get(process.env.NODE_ENV);
const Schema = mongoose.Schema;
const {Role} = require('./role');

const userSchema = Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 6 
    },
    name: {
        type: String,
        maxlength: 100
    },
    lastname: {
        type: String,
        maxlength: 100
    },
    token: {
        type: String
    },    
    deleted: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

// #region Middleware
userSchema.pre('save', function(next){
    var user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(CONFIG.SALT_I, function(err, salt){
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);

                user.password = hash;
                next();
            });
        })
    }else{
        next();
    }
});
// #endregion

// #region customMethods
userSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err) return callback(err);
        callback(null, isMatch);
    });
}

userSchema.methods.generateToken = function(callback){
    var user = this;
    var token = jwt.sign(user._id.toHexString(), CONFIG.SECRET);

    user.token = token;
    user.save(function(err, user){
        if(err) return callback(err);
        callback(null, user);
    });
}

userSchema.statics.findByToken = function(token, callback){
    var user = this;  
    jwt.verify(token, CONFIG.SECRET, function(err, decode){
        if(err) return callback(err);        
        user.findOne({"_id": decode, "token": token}).populate('role').exec(function(err, user){
            if(err) return callback(err);    
            callback(null, user);                       
        });
    });
}

userSchema.methods.deleteToken = function(token, callback){    
    var user = this;
    user.update({ $unset: {token: 1} }, function(err, user){      
        if(err) return callback(err);
        callback(null, user);
    });
}
// #endregion

const User = mongoose.model('User', userSchema);

module.exports = { User }
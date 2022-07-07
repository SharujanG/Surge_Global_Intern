const mongoose = require('mongoose')
//Schema for database Creation
const studentSchema  = mongoose.Schema({
 

    firstName:{
        type: String,
        required: true

    },
    lastName:{
        type: String,
        required: true

    },

    email:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required: true

    },
    mobile:{
        type: Number,
        required: true

    },
    status:{
        type: String,
        required: true

    },
    accountType:{
        type: String,
        required: true

    },

    password:{
        type: String,
        required: true
    }
    

});

module.exports = mongoose.model('studentManagement',studentSchema)
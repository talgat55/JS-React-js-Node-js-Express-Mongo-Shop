const {Schema, model, Types} = require('mongoose');
// TODO   end with model
const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    links: [{
        type: Types.ObjectId,
        ref: 'Link'
    }]

});
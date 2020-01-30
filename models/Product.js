const {Schema, Types } = require('mongoose');

const productSchema = new Schema({
    writer: {
        type: Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 200
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true });


productSchema.index({
    title:'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        description: 1,
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const ItemSchema = new Schema({
    item: {
        type: String
    },
    value: {
        type: String
    }
}, {
    collection: 'items'
});
ItemSchema.set('autoIndex', true);

const Item = mongoose.model('Item', ItemSchema);

module.exports = {
    ItemSchema, Item
};

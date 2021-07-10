const mongoose = require ("mongoose")

const orderSchema = new mongoose.Schema({
    name: String,
    item: String,
    quantity: [{type: Number}]
})

const ordermodel = mongoose.model("order",orderSchema)

module.exports= ordermodel
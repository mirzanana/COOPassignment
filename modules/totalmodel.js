const mongoose = require ("mongoose")

const totalSchema = new mongoose.Schema({
    name: String,
    item: String,
    quantity: [{type: Number}],
    total: [{type:String}]
})

const totalmodel = mongoose.model("total",totalSchema)

module.exports= totalmodel
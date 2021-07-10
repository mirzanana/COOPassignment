const mongoose= require("mongoose")

const userSchema = new mongoose.Schema({
    menu: [{
        food:[{type: String, Number}],
        Drinks:[{type: String,Number}],
        Icecream: [{type:String,Number}]
    }]
})

const menumodel1 = mongoose.model("menu",userSchema)

module.exports= menumodel1
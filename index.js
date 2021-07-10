const app =require ("express")()
const bodyParser = require ("body-parser")
const mongoose = require ("mongoose")
const menumodel1 = require("./module/menumodel1")
const ordermodel = require ("./module/ordermodel")
const totalmodel = require ("./module/totalmodel")



//connect to mongodb
mongoose.connect("mongodb+srv://m001-student:m001-mongodb-basics@sandbox.wvkua.mongodb.net/coopmenu?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("connected to mongodb")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


//POST menu 
app.post("/menu", async (req,res, next) => {
    try{
        const user = await menumodel1.create({
            menu: req.body.menu
        })
        res.json(user)
    } catch(e) {
        res.status(500).json({
            error: true,
            message: e.message
        })
    }
})

// GET menu 
app.get ("/menu", async (req,res, next)=> {
    try{
        const result =await menumodel1.find(req.params)
        res.json(result)
    } catch(e) {
        res.status(500).json({
            error: true,
            message: e.message
        })
    }
})


//POST order
app.post ("/order",async (req,res,next) =>{
    try{
        const ordering = await ordermodel.create({
            name: req.body.name,
            item: req.body.item,
            quantity: req.body.quantity

        })
        res.json(ordering)
    } catch(e) {
        res.status(500).json({
            error: true,
            message: e.message
        })
    }
})

//GET order
app.get("/order",async (req,res, next) =>{
    try{
        const result = await ordermodel.find(req.params)
        res.json (result)
    } catch (e) {
        res.status(500).json({
            eroor: true,
            message: e.message
        })
    }
})

//PUT order
app.put("/order/id", async (req, res, next) => {
    try{
        const ordering = await ordermodel.findOneAndUpdate({id: req.params.id}, {
            name: req.body.name,
            item: req.body.item,
            quantity: req.body.quantity

        },{
            new: true,
            useFindAndModify: false
        })
        res.json(ordering)
    } catch(e) {
        res.status(500).json({
            error: true,
            message: e.message
        })
    }
})

//DELETE order
app.delete("/order/:id", async (req,res,next)=>{
    try{
        const result = await ordermodel.deleteOne({_id: req.params.id})
        res.json(result)
    }catch (e){
        next (e)
    }
})

//POST total 
app.post ("/total",async (req,res,next) =>{
    try{
        const totalorder = await totalmodel.create({
            name: req.body.name,
            item: req.body.item,
            quantity: req.body.quantity,
            total: req.body.total

        })
        res.json(totalorder)
    } catch(e) {
        res.status(500).json({
            error: true,
            message: e.message
        })
    }
})

//GET total
app.get("/total",async (req,res, next) =>{
    try{
        const result = await totalmodel.find(req.params)
        res.json (result)
    } catch (e) {
        res.status(500).json({
            eroor: true,
            message: e.message
        })
    }
})

//PUT total
app.put("/total/id", async (req, res, next) => {
    try{
        const totalorder = await totalmodel.findOneAndUpdate({id: req.params.id}, {
            name: req.body.name,
            item: req.body.item,
            quantity: req.body.quantity,
            total: req.body.total
        },{
            new: true,
            useFindAndModify: false
        })
        res.json(totalorder)
    } catch(e) {
        res.status(500).json({
            error: true,
            message: e.message
        })
    }
})

//DELETE total
app.delete("/total/:id", async (req,res,next)=>{
    try{
        const result = await totalmodel.deleteOne({_id: req.params.id})
        res.json(result)
    }catch (e){
        next (e)
    }
})


//localhost:3000
const PORT = process.env.PORT || 5000
app.listen(5000,() =>{
    console.log ("listening to port 5000")
})



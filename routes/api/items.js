const express = require("express");
const router = express.Router();
const auth=require('../../middleware/auth')
//itemModel
const Item = require("../../models/Items");

//@route GET api/items
//@desc Get All items
//@access private

router.get('/',(req,res)=>{
    Item.find({})
    .sort({date:-1}) //descending sorting
    .then(items=>{
        res.json(items)
    })
})


//@route POST api/items
//@desc CREATE a post
//@access private

router.post('/',(req,res)=>{
   const newItem=new Item({
       name:req.body.name
   })
   newItem.save().then(item=>res.json(item))
   
})


//@route DELETE  api/items
//@desc DELETE a post
//@access Public

router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id).then(item=>item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}))
    
 })



module.exports=router;
import express from "express";
import mongoose from "mongoose";
import multer from "multer";
// import connectDB from "./db.js";
mongoose.set("strictQuery", false);
// connectDB();
const router=express.Router();
const teacherslistSchema=mongoose.Schema([{
    image:{
        data:String,
        contentType: String
    },
     name:{
        type:String,
        required:true
       },
   subject:{
        type:String,
        required:true
       }
}])
const Teacherslist = mongoose.model('Teacherslist',teacherslistSchema);
teacherslistSchema.plugin(Teacherslist);

const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});
const teacherslist=[{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_1234.jpg",
contentType:"image/png"
    },
    name:"Gowrishankar",
    subject:"English"
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_3901.JPG",
contentType:"image/png"
    },
    name:"Megha",
    subject:"Maths"
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4042.JPG",
contentType:"image/png"
    },
    name:"Nivesh",
    subject:"Science"
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4050.JPG",
contentType:"image/png"
    },
    name:"Aswini",
    subject:"Social"
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4073.png",
contentType:"image/png"
    },
    name:"Harishanakaran",
    subject:"Tamil"
}]
//get
// app.use(express.json());
router.get("/",(req,res)=>{
    try{
        res.status(200).send(teacherslist);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});
// specific data
router.get("/:id",(req,res)=>{
  console.log(req.params.id);
  Teacherslist.findById(req.params.id)
  
  .then(result=>{
      res.status(200).json({
          Teachers:result
      })
  })
  .catch(err=> {
  console.log(err);
  res.status(505).json({
      error:err
  })
  }
)
});
//post
router.post("/",async(req,res)=>{
    try{
      const teachers={
        image:{
            data:req.file.filename,
            contentType:'image/png'
        },
        name:req.body.name,
       subject:req.body.subject
      };
      console.log(teachers);
      const menu=new Teacherslist(teachers);
      const teachersCreated=await menu.save();
      if(teachersCreated){
        console.log("Created");
        res.status(201).json({message:"Profile available"});
    }else
    {
        res.status(401);
        throw new Error("not available");
    }
  } catch (err){
          return res.status(500).json({message: err.message});
        }});
//update
router.put('/:id',(req,res)=>{
  console.log(req.params.id);
  Teacherslist.findOneAndUpdate({_id:req.params.id},{
      $set:{
        image:{
            data:req.file.filename,
            contentType:'image/png'
        },
        name:req.body.name,
        subject:req.body.subject
      }
  })
  .then(result=>{
      res.status(200).json({
          updated_teachersDetails:result       
       })
  })
  .catch(err=>{
      console.log(err)
      res.status(500).json({
          error:err
      })
  })
  })      
       
  //delete
  router.delete('/:id',(req,res)=>{
    console.log(req.params.id);
    Teacherslist.deleteOne({_id:req.params.id},{
        $set:{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },
            name:req.body.name,
            subject:req.body.subject
        }
    })
    .then(result=>{
        res.status(200).json({
            Deleted_teachersDetails:result       
         })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    })
    router.delete("/",(req,res)=>{
    
        Teacherslist.deleteMany({}).then((result) => {
            res.send(result);
        })
    });

export default router;
import express from "express";
// import connectDB from "./teachersdb.js";
import multer from "multer";
import mongoose from "mongoose";
const router = express.Router();
const teachersSchema=mongoose.Schema(
    {
        
            image:{
                data:String,
             contentType: String
            },
    name:{
        type:String,
     
        },
    id:{
         type:String,
        
     },
   
            
           
     })

var Teachers = mongoose.model('Teachers', teachersSchema);
teachersSchema.plugin(Teachers);

const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
// connectDB();
const app=express();
app.use(express.json());

const teachers={
 teacherslist:[   {
     image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_7890.jpg",
contentType:"image/png"
    },
    name:"Harish",
    id:"101",
},
{   image:{
    data:"C:\Users\DELL\Desktop\school management\profile\IMG_4567.jpg",
contentType:"image/png"
},
    name:"Hem prashanth",
    id:"102",
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_1234.jpg",
    contentType:"image/png"
    },
    name:"Gowrishankar",
    id:"103",
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_3901.JPG",
    contentType:"image/png"
    },
    name:"Megha",
    id:"104",
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4042.JPG",
    contentType:"image/png"
    },
    name:"Nivesh",
    id:"105",
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4050.JPG",
    contentType:"image/png"
    },
    name:"Aswini",
    id:"106",
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4073.png",
    contentType:"image/png"
    },
    name:"Hari Shankaran",
    id:"107",
},

]
}


router.get('/',(req,res)=>{
    res.send(teachers);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Teachers.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            id:req.body.id,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    Teacherslist:result
                })
            })
            .catch(err=> {
            console.log(err);
            res.status(505).json({
                error:err
            })
            }
          )
        }
    })
    
})

router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new Teachers({
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                id:req.body.id,
            })
            newImage.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})
router.put('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Teachers.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                id:req.body.id,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Teacherslist:result       
                 })
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({
                    error:err
                })
            })
        
        }
    })
    
})
router.delete('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Teachers.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                id:req.body.id,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_Teacherslist:result       
                 })
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({
                    error:err
                })
            })
        
        }
    })

    
})


router.delete("/",async(req,res)=>{
    Teachers.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
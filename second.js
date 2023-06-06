import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const secondSchema=mongoose.Schema(
    {

   
image:{
    data:String,
    contentType: String
},
name:{
    type:String,
   required:true,
},
     
rollno:{
    type:String,
   required:true,
},
           
     })

const Second =mongoose.model("Second ",secondSchema);
secondSchema.plugin(Second);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const second={
secondlist:[{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_1234.jpg",
contentType:"image/png"
    },
    name:"Gowrishankar",
    rollno:"1"
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_3901.JPG",
contentType:"image/png"
    },
    name:"Megha",
    rollno:"2"
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4042.JPG",
contentType:"image/png"
    },
    name:"Nivesh",
    rollno:"3"
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4050.JPG",
contentType:"image/png"
    },
    name:"Aswini",
    rollno:"4"
}, 

{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4073.png",
contentType:"image/png"
    },
    name:"Hari Shankaran",
    rollno:"5"
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4567.jpg",
contentType:"image/png"
    },
    name:"Hem prashanth",
    rollno:"6"
},
{
    image:{
     data:"C:\Users\DELL\Desktop\school management\profile\IMG_7890.jpg",
contentType:"image/png"
    },
    name:"Harish",
    rollno:"7"
},
]
}
router.get('/',(req,res)=>{
    res.send(second);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Second.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            rollno:req.body.rollno,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    Secondstandard:result
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
            const newImage = new  Second({
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
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
            Second.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Secondstandard:result       
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
            Second.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_second:result       
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
   Second.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(second);
// });
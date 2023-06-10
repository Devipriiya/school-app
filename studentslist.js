import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const studentlistSchema=mongoose.Schema(
    {
 standard:{
    type:String,
    required:true,
 },
   
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

const Studentlist =mongoose.model("Studentlist ",studentlistSchema);
studentlistSchema.plugin(Studentlist);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const image={

firstlist:[{
 
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"Gowrishankar",
    rollno:"1"
},
{
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
contentType:"image/png"
    },
    name:"Megha",
    rollno:"2"
},
{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Nivesh",
    rollno:"3"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Aswini",
    rollno:"4"
}, 

{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"Hari Shankaran",
    rollno:"5"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"Hem prashanth",
    rollno:"6"
},
{
    image:{
     data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Harish",
    rollno:"7"
},


// {    
//     image:{
//         data:"https://png.pngtree.com/png-clipart/20220628/original/pngtree-female-student-lineal-icon-back-to-school-vector-illustration-png-image_8240071.png",
// contentType:"image/png"
//     },
//     name:"Megha",
//     rollno:"7"
// },

// {
//     image:{
//         data:"https://png.pngtree.com/png-clipart/20220628/original/pngtree-male-student-lineal-icon-back-to-school-vector-illustration-png-image_8240269.png",
// contentType:"image/png"
//     },
//     name:"Naveen",
//     rollno:"8"
// },
// {
//     image:{
//         data:"https://png.pngtree.com/png-vector/20230206/ourmid/pngtree-cute-cartoon-student-with-backpack-and-book-png-image_6585368.png",
// contentType:"image/png"
//     },
//     name:"Rathiga",
//     rollno:"9"
// },
]
}
router.get('/',(req,res)=>{
    res.send(image);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
           Studentlist.findById({_id:req.params.id},{
          
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            rollno:req.body.rollno,
               
            })
          
            .then(result=>{
                res.status(200).json({
                   images:result
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
            const newImage = new Studentlist({
           
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
            Studentlist.findOneAndUpdate({_id:req.params.id},{
          
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_image:result       
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
            Studentlist.deleteOne({_id:req.params.id},{
               
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_image:result       
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
    First.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(image);
// });

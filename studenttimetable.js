import express from "express";
import mongoose from "mongoose";
import multer from "multer";
// import connectDB from "./appdb.js";
// import connectDB from "./librarydb.js";

// connectDB();
const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const router =express.Router();
const studenttimetableSchema=mongoose.Schema({
 
    
    teacher:{
        type:String,
       required:true,
    },
 
    subject:{
        type:String,
       required:true,
    },
    schedule:{
        type:String,
       required:true,
    }
        
})
const Studenttimetable=mongoose.model("Studenttimetable",studenttimetableSchema);
studenttimetableSchema.plugin(Studenttimetable);

const studenttimetable={
    // standard:"1st standard",
    day:[
        {
    teacher:"Aswini",
    subject:"Tamil",
    schedule:"10.00-10.30"
    },
  {
        teacher:"Pavithra",
        subject:"English",
        schedule:"10.30-11.00"
    },
    {
        teacher:"Karthiga",
        subject:"Evs",
        schedule:"11.30-12.00"
    },
 {
        teacher:"Preethi",
        subject:"Maths",
        schedule:"1.00-1.30"
    }
  


   
]
 }


const app=express();
app.use(express.json());



router.get('/',(req,res)=>{
    res.send(studenttimetable);
})
// specific data
router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Studenttimetable.findById({_id:req.params.id},{
                // standard:req.body.standard,
                
                teacher:req.body.teacher,
                subject:req.body.subject,
                schedule:req.body.schedule
                
            })
          
            .then(result=>{
                res.status(200).json({
                    studenttimetable:result
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
            const newImage = new Studenttimetable({
            
                // standard:req.body.standard,
           
                teacher:req.body.teacher,
                subject:req.body.subject,
                schedule:req.body.schedule
                
            })
            newImage.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})
//update
router.put('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
          Studenttimetable.findOneAndUpdate({_id:req.params.id},{
            // standard:req.body.standard,
        
            teacher:req.body.teacher,
            subject:req.body.subject,
            schedule:req.body.schedule
            
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_studenttimetable:result       
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
           Studenttimetable.deleteOne({_id:req.params.id},{
             
            // standard:req.body.standard,
         
            teacher:req.body.teacher,
            subject:req.body.subject,
            schedule:req.body.schedule
            
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_studenttimetable:result       
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

router.delete('/',async(req,res)=>{
   Studenttimetable.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
export default router;

        // const port=4000;
        // app.listen(port,()=>{
        //     console.log(`server is running at ${port}`);
        //     console.log(firsttimetable);
        // });
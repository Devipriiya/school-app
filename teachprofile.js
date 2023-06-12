import express from "express";
import mongoose from "mongoose";
import multer from "multer";
const router=express.Router();

const teachprofileSchema=mongoose.Schema({
    image:{
        data:String,
     contentType: String
    },
    name:{
        type:String,
        // required:true
    },
    contactNo:{
        type:String,
    },
    faculty:{
        type:String,
        // required:true
    },
    department:{
        type:String,
        // required:true
    },
    bloodGroup:{
        type:String,
        // required:true
    },
    dob:{
        type:String,
        // required:true
    },
    fatherName:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    address:{
        type:String,
        // required:true
    },
  


})
const Teachprofile = mongoose.model('Teachprofile',teachprofileSchema);
teachprofileSchema.plugin(Teachprofile);

const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')


const user={
  
    image:{
        data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
       contentType:"image/png"
    }, 
    name     :"Harish",
    contactNo:"9876543210",
    faculty   :"Science and Social",
    department:"CSE",
    bloodGroup    :"O'+ve",
    dob  :"23/04/1998",
    fatherName:"Kasi",
    email     :"abc@gmail.com",
    address   :"Chennai",
 

}


// const app=express();
// app.use(express.json());

// get

router.get('/',(req,res)=>{
    try{
        res.status(200).send(user);
    }
    catch(error){
        res.json({message:"unable to create"});
    }
});

// specificData

router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Teachprofile.findByID({_id:req.params.id},{
                image:{
                    data:req.image.imagename,
                    contentType:'image'
                },
                name:req.body.name,
                contactNo:req.body.contactNo,
                faculty:req.body.faculty,
                department:req.body.department,
                bloodGroup:req.body.bloodGroup,
                dob:req.body.dob,
                fatherName:req.body.fatherName,
                email:req.body.email,
                address:req.body.address,
             
            })
                .then(result=>{
                    res.status(200).json({
                        files:result
                    })
                })
                .catch(err=>{
                    console.log(err);
                    res.status(505).json({
                        error:err
                    })
                }
    )}
    })
})

//post

router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newFile = new Teachprofile({
                image:{
                    data:req.file.filename,
                    contentType:'image'
                },
                name:req.body.name,
                contactNo:req.body.contactNo,
                faculty:req.body.faculty,
                department:req.body.department,
                bloodGroup:req.body.bloodGroup,
                dob:req.body.dob,
                fatherName:req.body.fatherName,
                email:req.body.email,
                address:req.body.address,
                
              
            })
            newFile.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})

 //put

 router.put('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Teachprofile.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image'
                },
                name:req.body.name,
                contactNo:req.body.contactNo,
                faculty:req.body.faculty,
                department:req.body.department,
                bloodGroup:req.body.bloodGroup,
                dob:req.body.dob,
                fatherName:req.body.fatherName,
                email:req.body.email,
                address:req.body.address,
             
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_user:result       
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
       
  //delete

  router.delete('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Teachprofile.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image'
                },
                name:req.body.name,
                contactNo:req.body.contactNo,
                faculty:req.body.faculty,
                department:req.body.department,
                bloodGroup:req.body.bloodGroup,
                dob:req.body.dob,
                fatherName:req.body.fatherName,
                email:req.body.email,
                address:req.body.address,
              
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_user:result       
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


//Delete many
    
router.delete('/',async(req,res)=>{
    Teachprofile.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
  

// const port=9532;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(profile);
// });
export default router;
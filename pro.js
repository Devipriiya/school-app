import express from "express";
import mongoose from "mongoose";
import multer from "multer";
// import connectDB from "./db.js";
mongoose.set("strictQuery", false);
// connectDB();
const router=express.Router();

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
const AddressSchema = mongoose.Schema({
    houseNumber: {
        type:String,
    },
    street: {
        type:String,

    },
    city: {
        type:String,

    },
    State:{
        type:String,
    },
    Pincode:{
        type:String
    }
  });
const profileSchema=mongoose.Schema([{
    image:{
        data:String,
        contentType: String
    },
    Name:{
        type:String,
        required:true
    },
    RollNo:{
        type:String,
        required:true
    },
    ContactNo:{
        type:String,
        required:true
    },
    standard:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    BloodGroup:{
        type:String,
        required:true
    },
    FatherName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Address:{
        type:AddressSchema,
        required:true
    }

}])
var Profile = mongoose.model('Profile',profileSchema);
profileSchema.plugin(Profile);
const profile={
  
    image:{
        data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
        contentType:"image/png",
    },
    Name     :"Harish",
    RollNo   :"6108181060",
    ContactNo:"9448983789",
    standard :"8th Standard",
    section  :"A",
    BloodGroup:"B+",
    FatherName:"Arron",
    Email     :"abc@gmail.com",
    Address   :{
        houseNumber:"G-36",
        street: "1st cross",
        city:"Chennai",
        State:"TamilNadu",
        Pincode:"5600035"
     }

}

// app.use(express.json());
router.get('/',(req,res)=>{
    res.send(profile);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Profile.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            Name     :req.body.Name,
            RollNo   :req.body.RollNo,
            ContactNo:req.body.ContactNo,
            standard    :req.body.standard,
            section  :req.body.section,
            BloodGroup:req.body.BloodGroup,
            FatherName:req.body.FatherName,
            Email     :req.body.Email,
            Address   :{
            houseNumber:req.body.houseNumber,
            street: req.body.street,
            city:req.body.city,
            State:req.body.State,
            Pincode:req.body.Pincode,
            }  
            })
          
            .then(result=>{
                res.status(200).json({
                    profile:result
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
//post
router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new Profile({
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                Name     :req.body.Name,
                RollNo   :req.body.RollNo,
                ContactNo:req.body.ContactNo,
                standard    :req.body.standard,
                section  :req.body.section,
                BloodGroup:req.body.BloodGroup,
                FatherName:req.body.FatherName,
                Email     :req.body.Email,
                Address   :{
                    houseNumber:req.body.houseNumber,
                    street: req.body.street,
                    city:req.body.city,
                    State:req.body.State,
                    Pincode:req.body.Pincode,
                    }
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
            Profile.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                Name     :req.body.Name,
                RollNo   :req.body.RollNo,
                ContactNo:req.body.ContactNo,
                standard    :req.body.standard,
                section  :req.body.section,
                BloodGroup:req.body.BloodGroup,
                FatherName:req.body.FatherName,
                Email     :req.body.Email,
                Address   :{
                    houseNumber:req.body.houseNumber,
                    street: req.body.street,
                    city:req.body.city,
                    State:req.body.State,
                    Pincode:req.body.Pincode,
                    }
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_profile:result       
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
            Profile.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                Name     :req.body.Name,
                RollNo   :req.body.RollNo,
                ContactNo:req.body.ContactNo,
                standard    :req.body.standard,
                section  :req.body.section,
                BloodGroup:req.body.BloodGroup,
                FatherName:req.body.FatherName,
                Email     :req.body.Email,
                Address   :{
                    houseNumber:req.body.houseNumber,
                    street: req.body.street,
                    city:req.body.city,
                    State:req.body.State,
                    Pincode:req.body.Pincode,
                    }
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_profile:result       
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
    Profile.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
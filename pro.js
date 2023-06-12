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
    studentprofile:[{
   id:1,
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
        contentType:"image/png",
    },
    Name     :"Gowrishankar",
    RollNo   :"1813011",
    ContactNo:"9948983789",
    standard :"8th Standard",
    section  :"A",
    BloodGroup:"A+",
    FatherName:"Sundharam",
    Email     :"gowrishankar@gmail.com",
    Address   :{
        houseNumber:"G-36",
        street: "1st cross",
        city:"Chennai",
        State:"TamilNadu",
        Pincode:"600006"
     }
},
{
  id:2,
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
        contentType:"image/png",
    },
    Name     :"Megha",
    RollNo   :"1813012",
    ContactNo:"9645983780",
    standard :"8th Standard",
    section  :"A",
    BloodGroup:"A+",
    FatherName:"Krishnan",
    Email     :"megha@gmail.com",
    Address   :{
        houseNumber:"D-36",
        street: "1st cross",
        city:"Krishnagiri",
        State:"TamilNadu",
        Pincode:"603256"
     }
},
{
  id:3,
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
        contentType:"image/png",
    },
    Name     :"Nivesh",
    RollNo   :"1813013",
    ContactNo:"9095783782",
    standard :"8th Standard",
    section  :"A",
    BloodGroup:"O+",
    FatherName:"Srinivasan",
    Email     :"nivesh@gmail.com",
    Address   :{
        houseNumber:"A-36",
        street: "Vinayagar street",
        city:"Chennai",
        State:"TamilNadu",
        Pincode:"600006"
     }
},
{
    id:4,
      image:{
          data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
          contentType:"image/png",
      },
      Name     :"Aswini",
      RollNo   :"1813014",
      ContactNo:"9095783782",
      standard :"8th Standard",
      section  :"A",
      BloodGroup:"O+",
      FatherName:"Gunasekaran",
      Email     :"aswini@gmail.com",
      Address   :{
          houseNumber:"A-96",
          street: "Shivan kovil street",
          city:"Tiruppur",
          State:"TamilNadu",
          Pincode:"666206"
       }
  },
  {
    id:5,
      image:{
          data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
          contentType:"image/png",
      },
      Name     :"Hari Shankaran",
      RollNo   :"1813015",
      ContactNo:"9995383799",
      standard :"8th Standard",
      section  :"A",
      BloodGroup:"B+",
      FatherName:"Shankar",
      Email     :"hari@gmail.com",
      Address   :{
          houseNumber:"D-96",
          street: "2nd cross",
          city:"Krishnagiri",
          State:"TamilNadu",
          Pincode:"603256"
       }
  },
  {
    id:6,
      image:{
          data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
          contentType:"image/png",
      },
      Name     :"Hem prashanth",
      RollNo   :"1813016",
      ContactNo:"9995383799",
      standard :"8th Standard",
      section  :"A",
      BloodGroup:"A+",
      FatherName:"Selvam",
      Email     :"hari@gmail.com",
      Address   :{
          houseNumber:"D-96",
          street: "1st cross",
          city:"Krishnagiri",
          State:"TamilNadu",
          Pincode:"603256"
       }
  },
  {
    id:7,
      image:{
          data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
          contentType:"image/png",
      },
      Name     :"Harish",
      RollNo   :"1813017",
      ContactNo:"7995383899",
      standard :"8th Standard",
      section  :"A",
      BloodGroup:"O+",
      FatherName:"Kasi",
      Email     :"harish@gmail.com",
      Address   :{
          houseNumber:"A-96",
          street: "1st cross",
          city:"Krishnagiri",
          State:"TamilNadu",
          Pincode:"603256"
       }
  },
]

}

// app.use(express.json());
router.get('/',(req,res)=>{
    res.send(profile);
})




router.get("/:id", (req, res) => {
    try {
        const individualImage =profile.studentprofile.find(
          (c) => c.id === Number(req.params.id)
        );
        if (individualImage) {
            res.json(individualImage);
          } else {
            res.status(404).json({ message: "Not found" });
          }
        } catch (error) {
          res.json({ message: 505 });
        }
    });
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
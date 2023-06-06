import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import connectDB from "./librarydb.js";

mongoose.set("strictQuery", false);
connectDB();
const router=express.Router();

const profileSchema=mongoose.Schema({
    profile:[{
        image:{
            data:String,
         contentType: String
        },
        email:{
            type:String,
        },
        contact_no:{

            type:String,
        },
        position:{
            type:String,
        },
        subject:{
            type:String,
        },
        department:{
            type:String,
        },
        group:{
            type:String,
        },
        BloodGroup:{
            type:String,
        },
        dob:{
            type:String,
        },
        date:{
            type:String,
        },
        name:{
            type:String,
        },
        FatherName:{
            type:String,
        },
        mail:{
            type:String,
        },
        mailid:{
            type:String,
        },
        address:{
            type:String,
        },
        add:{
            type:String,
        }
}]

})
var Profile = mongoose.model('Profile',profileSchema);
profileSchema.plugin(Profile);
const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const profile={
    profile:[{
     image:{
            data:"https://cdn-icons-png.flaticon.com/512/2784/2784403.png",
    contentType:"image/png"
        },
    name:"Damodaran",
    email    :"priya@gmail.com",
    contact_no:"9944556698",
    position:"Faculty",
    subject:"Science and Social",
    dep:"Department",
    department:"CSE",
    group:"Blood Group",
    BloodGroup:"B+",
    dob:"Date of birth",
    date:"29.01.1990",
    name:"Father name",
    FatherName:"Raj",
    mail:"Email",
    mailid:"priya@gmail.com",
    address:"Address",
    add:"G-36 'E' 1st cross street chennai"
}
]}

const app=express();
app.use(express.json());

// get

app.get('/profile',(req,res)=>{
    try{
        res.status(200).send(profile);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});

// specificData

app.get('/profile/:id',(req,res)=>{
    console.log(req.params.id);
    Profile.findById(req.params.id)

    .then(result=>{
        res.status(200).json({
            user:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(505).json({
            error:err
        })
    })
})

//post

app.post('/profile',async(req,res)=>{
    try{
      const details={
        profile:req.body.profile
      }
      console.log(details);
      const menu=new Profile(profile);
      const profileCreated=await menu.save();
      if(profileCreated){
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

 //put
app.put('/profile/:id',(req,res)=>{
  console.log(req.params.id);
  Profile.findOneAndUpdate({_id:req.params.id},{
      $set:{
        profile:req.body.profile
      }
  })
  .then(result=>{
      res.status(200).json({
          updated_profileDetails:result       
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

  app.delete('/profile/:id',(req,res)=>{
    console.log(req.params.id);
    Profile.findByIdAndRemove({_id:req.params.id},{
        $set:{
            profile:req.body.profile
        }
    })
    .then(result=>{
        res.status(200).json({
            Deleted_profileDetails:result       
         })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    })
    
    app.delete("/profile",(req,res)=>{
    
      Profile.deleteMany({profile},(err,result)=>{
      if(err) throw err
      res.send(result)
      })
  })  


const port=4000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    console.log(profile);
});

export default router;

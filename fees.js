import express from "express";
// import connectDB from "./db.js";
import mongoose from "mongoose";
import multer from "multer";
const router=express.Router();
mongoose.set("strictQuery", false);
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
const feesSchema=mongoose.Schema({
    fees:{
        type:String,
        required:true
    },
    totalFee:{
        type:String,
        required:true
    },
    paidFee:{
        type:String,
        required:true
    },
    lateFeeCharges:{
        type:String,
        required:true
    },
    dueFee:{
        type:String,
        required:true
    },
})
    

const FeeDetails=mongoose.model("FeeDetails",feesSchema);
feesSchema.plugin(FeeDetails);

const feeDetails={
    feeslist:[{
        fees:"Admission Fee",
        totalFee:"Rs.500",
        paidFee:"Rs.100",
        lateFeeCharges:"Rs.00.00",
        dueFee :"Rs.400",
    },

{
         fees:"Examination Fee",
         totalFee:"Rs.500",
         paidFee:"Rs.100",
         lateFeeCharges:"Rs.00.00",
         dueFee :"Rs.400",
    },

{
        fees:"Library Fee",
        totalFee:"Rs.500",
        paidFee:"Rs.100",
        lateFeeCharges:"Rs.00.00",
        dueFee :"Rs.400",
    
},
{
        fees:"Miscellaneous Fee",
        totalFee:"Rs.500",
        paidFee:"Rs.100",
        lateFeeCharges:"Rs.00.00",
        dueFee :"Rs.400",
    
}
    ]
}
     

// app.use(express.json());
router.get("/",(req,res)=>{
    try{
        res.status(200).send(feeDetails);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});
// specific data
router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            FeeDetails.findById({_id:req.params.id},{
                fees:req.body.fees,
                totalFee:req.body.totalFee,
                paidFee:req.body.paidFee,
                lateFeeCharges:req.body.lateFeeCharges,
                dueFee : req.body.dueFee
            })
          
            .then(result=>{
                res.status(200).json({
                    feesdetails:result
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
            const newImage = new FeeDetails({
                fees:req.body.fees,
                totalFee:req.body.totalFee,
                paidFee:req.body.paidFee,
                lateFeeCharges:req.body.lateFeeCharges,
                dueFee : req.body.dueFee
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
            FeeDetails.findOneAndUpdate({_id:req.params.id},{
                fees:req.body.fees,
                totalFee:req.body.totalFee,
                paidFee:req.body.paidFee,
                lateFeeCharges:req.body.lateFeeCharges,
                dueFee : req.body.dueFee,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_feesdetails:result       
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
            FeeDetails.deleteOne({_id:req.params.id},{
                fees:req.body.fees,
                totalFee:req.body.totalFee,
                paidFee:req.body.paidFee,
                lateFeeCharges:req.body.lateFeeCharges,
                dueFee : req.body.dueFee
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_feesdetails:result       
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
    FeeDetails.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(ninth);
// });
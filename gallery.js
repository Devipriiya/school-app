import express from 'express';

const app = express();
import multer from "multer";
import path from "path";

const router =express.Router();

import ImageModel from './imagemodel.js';


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
image:[{

    image:{
        
data:"C:\Users\DELL\Desktop\school management\gallery\IMG_1.jpg",
contentType:"image/png"
    }
},
{

        image:{
            
    data:"C:\Users\DELL\Desktop\school management\gallery\IMG_2.jpg",
    contentType:"image/png"
        
    }  
},
{
  
    image:{
        
data:"C:\Users\DELL\Desktop\school management\gallery\IMG_3.jpg",
contentType:"image/png"
    }
},
{
  
    image:{
        
data:"C:\Users\DELL\Desktop\school management\gallery\IMG_4.jpg",
contentType:"image/png"
    }
},{
    image:{
        
        data:"C:\Users\DELL\Desktop\school management\gallery\WhatsApp Image 2023-02-24 at 11.39.33 AM (5).jpeg",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"C:\Users\DELL\Desktop\school management\gallery\WhatsApp Image 2023-02-24 at 11.39.33 AM (15).jpeg",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"C:\Users\DELL\Desktop\school management\gallery\WhatsApp Image 2023-02-24 at 11.39.33 AM (32).jpeg",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"C:\Users\DELL\Desktop\school management\events\IMG_3982.JPG",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"C:\Users\DELL\Desktop\school management\events\WhatsApp Image 2023-02-24 at 11.39.33 AM (8).jpeg",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"C:\Users\DELL\Desktop\school management\events\WhatsApp Image 2023-02-24 at 11.39.33 AM (11).jpeg",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"C:\Users\DELL\Desktop\school management\events\WhatsApp Image 2023-02-24 at 11.39.33 AM (12).jpeg",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"C:\Users\DELL\Desktop\school management\events\WhatsApp Image 2023-02-24 at 11.39.33 AM (20).jpeg",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"C:\Users\DELL\Desktop\school management\events\WhatsApp Image 2023-02-24 at 11.39.33 AM (28).jpeg",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"C:\Users\DELL\Desktop\school management\events\WhatsApp Image 2023-02-24 at 11.39.33 AM (30).jpeg",
        contentType:"image/png"
            } 
},

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
            ImageModel.findById({_id:req.params.id},{
           
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
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
            const newImage = new ImageModel({
            
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
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
            ImageModel.findOneAndUpdate({_id:req.params.id},{
             
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
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
            ImageModel.deleteOne({_id:req.params.id},{
            
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
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

router.delete('/',async(req,res)=>{
    ImageModel.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
export default router;


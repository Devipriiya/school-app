import express from 'express';
import mongoose from "mongoose";
const app = express();
import multer from "multer";
import path from "path";

const router =express.Router();



const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')

const gallerySchema=mongoose.Schema(
    {
 
   id:{
    type:String,
    required:true,
   },
image:{
    data:String,
    contentType: String
},
day:{
    type:String,
    required:true,
},
name:{
    type:String,
   required:true,
},
    
description:{
    type:String,
    required:true,
}


           
     })
     
const Gallery =mongoose.model("Gallery",gallerySchema);
gallerySchema.plugin(Gallery);



const gallerypage={
   gallerylist:[
    {
   id:1,
    image:{
        
data:"https://www.mountpleasantjuniors.co.uk/_images/1445100_l.png",
contentType:"image/png"
    },
    day:"Sports Day",
    name:"By Devipriya",
    description:"This image was taken in the year 2023 during the occassion of annual sports event which was held at chennai"
},
{
    id:2,
        image:{
            
    data:"https://w7.pngwing.com/pngs/4/364/png-transparent-culture-day-cultural-day-2018-cultural-diversity-cultures-culture-globe-world.png",
    contentType:"image/png"
        
    },
    day:"Culture Day",
    name:"By Deepika",
    description:"This image was taken in the year 2023 during the occassion of annual sports event which was held at chennai"
},
{
    id:3,
    image:{
        
data:"https://www.citypng.com/public/uploads/preview/first-day-of-school-back-to-school-cartoon-png-316295863040lf5ls6il9.png",
contentType:"image/png"
    },
    day:"School Day",
    name:"By Prashanth",
    description:"This image was taken in the year 2023 during the occassion of annual sports event which was held at chennai"
},
{
    id:4,
   
    image:{
        
data:"https://png.pngtree.com/png-clipart/20220120/ourmid/pngtree-celebration-of-happy-republic-day-of-india-balloon-flag-png-image_4342227.png",
contentType:"image/png"
    },
    day:"Independance Day",
    name:"By Megha",
    description:"This image was taken in the year 2023 during the occassion of annual sports event which was held at chennai"
},{
    id:5,
    image:{
        
        data:"https://w7.pngwing.com/pngs/537/592/png-transparent-children-s-day-banner-childrens-day-child-lovely.png",
        contentType:"image/png"
            } ,
            day:"Children's Day",
            name:"By Hari",
            description:"This image was taken in the year 2023 during the occassion of annual sports event which was held at chennai"
},
{   
    id:6,
    image:{
        
        data:"https://e7.pngegg.com/pngimages/610/226/png-clipart-blue-green-and-orange-illustration-indian-independence-day-august-15-flag-of-india-independence-day-bubble-wish-culture.png",
        contentType:"image/png"
            },
            day:"Independance Day",
            name:"By Aswini",
            description:"This image was taken in the year 2023 during the occassion of annual sports event which was held at chennai"
},
{   
    id:7,
    image:{
        
        data:"https://toppng.com/uploads/preview/happy-teachers-day-transparent-happy-teachers-day-11563045098jkhxonw803.png",
        contentType:"image/png"
            },
            day:"Teacher's Day",
            name:"By Sridhar",
            description:"This image was taken in the year 2023 during the occassion of annual sports event which was held at chennai"
},
{   
    id:8,
    image:{
        
        data:"https://w7.pngwing.com/pngs/841/26/png-transparent-pongal-festival-thumbnail.png",
        contentType:"image/png"
            },
            day:"Pongal",
            name:"By Sridhar",
            description:"This image was taken in the year 2023 during the occassion of annual sports event which was held at chennai"
},
{
    id:9,
    image:{
        
        data:"https://e7.pngegg.com/pngimages/76/991/png-clipart-silhouette-of-people-dancing-silhouette-celebrate-carnival-holidays-text-thumbnail.png",
        contentType:"image/png"
            },
            day:"Annual Day",
            name:"By Rathiga",
            description:"This image was taken in the year 2023 during the occassion of annual sports event which was held at chennai"
},
{
    id:10,
    image:{
        
        data:"https://www.hindugirlscollege.com/wp-content/uploads/2021/10/Founders-Day.png",
        contentType:"image/png"
            },
            day:"Founder Day",
            name:"By Karthiga",
            description:"This image was taken in the year 2023 during the occassion of annual sports event which was held at chennai"
},
{
    id:11,
    image:{
        
        data:"https://w7.pngwing.com/pngs/853/610/png-transparent-christmas-and-holiday-season-merry-christmas-food-holidays-decor-thumbnail.png",
        contentType:"image/png"
            } ,
            day:"Merry Christmas",
            name:"By Joys",
            description:"This image was taken in the year 2023 during the occassion of annual sports event which was held at chennai"

},
{
    id:12,
    image:{
        
        data:"https://img.lovepik.com/element/45000/9387.png_860.png",
        contentType:"image/png"
            },
            day:" Eid Mubarak",
            name:"By Amitha",
            description:"This image was taken in the year 2023 during the occassion of annual sports event which was held at chennai"
},
]
}
router.get('/',(req,res)=>{
    res.send(gallerypage);
})

router.get("/:id", (req, res) => {
    try {
        const individualImage = gallerypage.gallerylist.find(
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
    router.post('/',(req,res)=>{
        upload(req,res,(err)=>{
            if(err){
                console.log(err)
            }
            else{
                const newImage = new Gallery({
                    id:req.body.id,
                    image:{
                        data:req.file.filename,
                        contentType:'image/png'
                    },
                    day:req.body.day,
                    name:req.body.name,
                    description:req.body.description,
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
          Gallery.findOneAndUpdate({_id:req.params.id},{
            id:req.body.id,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },
                day:req.body.day,
                name:req.body.name,
                description:req.body.description,
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
           Gallery.deleteOne({_id:req.params.id},{
            id:req.body.id,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },
                day:req.body.day,
                name:req.body.name,
                description:req.body.description,
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
   Gallery.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
export default router;


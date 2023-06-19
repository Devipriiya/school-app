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
const image=[
    {
    id:1,
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
}

]
},
{
    id:2,
    firstlist:[{
          
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"shankar",
    rollno:"1"
},
{
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
contentType:"image/png"
    },
    name:"Rathiga",
    rollno:"2"
},
{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Naveen",
    rollno:"3"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Shalini",
    rollno:"4"
}, 

{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"Hari ",
    rollno:"5"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"prashanth",
    rollno:"6"
},
{
    image:{
     data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Vivek",
    rollno:"7"
}

    ]
},
{
    id:3,
    firstlist:[{  
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"Deepak",
    rollno:"1"
},
{
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
contentType:"image/png"
    },
    name:"Ashwini",
    rollno:"2"
},
{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Nanthakumar",
    rollno:"3"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Priya",
    rollno:"4"
}, 

{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"karthik",
    rollno:"5"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"Sri",
    rollno:"6"
},
{
    image:{
     data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Harish",
    rollno:"7"
}
    ]
},{
    id:4,
    firstlist:[{  
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"Hariprashanth",
    rollno:"1"
},
{
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
contentType:"image/png"
    },
    name:"Priyanka",
    rollno:"2"
},
{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Gokul",
    rollno:"3"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Deepika",
    rollno:"4"
}, 

{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"Manikandan",
    rollno:"5"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"Srivishnu",
    rollno:"6"
},
{
    image:{
     data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Krithik",
    rollno:"7"
}
    ]
}
,{
    id:5,
    firstlist:[{  
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"Rithik",
    rollno:"1"
},
{
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
contentType:"image/png"
    },
    name:"Karthiga",
    rollno:"2"
},
{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Santhosh",
    rollno:"3"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Diya",
    rollno:"4"
}, 

{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"Vinoth",
    rollno:"5"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"Viswajith",
    rollno:"6"
},
{
    image:{
     data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Nithwin",
    rollno:"7"
}
    ]
},
{
    id:6,
    firstlist:[{  
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"Ram",
    rollno:"1"
},
{
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
contentType:"image/png"
    },
    name:"Preethi",
    rollno:"2"
},
{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Dinesh",
    rollno:"3"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Kavi",
    rollno:"4"
}, 

{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"Balaji",
    rollno:"5"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"Ajith",
    rollno:"6"
},
{
    image:{
     data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Vivek",
    rollno:"7"
}
    ]
},
{
    id:7,
    firstlist:[{  
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"Deepak",
    rollno:"1"
},
{
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
contentType:"image/png"
    },
    name:"Ashwini",
    rollno:"2"
},
{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Nanthakumar",
    rollno:"3"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Priya",
    rollno:"4"
}, 

{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"karthik",
    rollno:"5"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"Sri",
    rollno:"6"
},
{
    image:{
     data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Harish",
    rollno:"7"
}
    ]
},
{
    id:8,
    firstlist:[{  
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"Chandru",
    rollno:"1"
},
{
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
contentType:"image/png"
    },
    name:"Sandhiya",
    rollno:"2"
},
{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Pranav",
    rollno:"3"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Kanika",
    rollno:"4"
}, 

{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"Nishanth",
    rollno:"5"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"David",
    rollno:"6"
},
{
    image:{
     data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Rithwin",
    rollno:"7"
}
    ]
},
{
    id:9,
    firstlist:[{  
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"Santhosh",
    rollno:"1"
},
{
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
contentType:"image/png"
    },
    name:"Kalai",
    rollno:"2"
},
{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Rithvik",
    rollno:"3"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Divya",
    rollno:"4"
}, 

{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"Tharan",
    rollno:"5"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"Satheesh",
    rollno:"6"
},
{
    image:{
     data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Prakash",
    rollno:"7"
}
    ]

},
{
    id:10,
    firstlist:[{  
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"Nilan",
    rollno:"1"
},
{
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
contentType:"image/png"
    },
    name:"Yazhini",
    rollno:"2"
},
{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Bharath",
    rollno:"3"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Shalini",
    rollno:"4"
}, 

{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"Vijay",
    rollno:"5"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"Prasanna",
    rollno:"6"
},
{
    image:{
     data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Hariharan",
    rollno:"7"
}
    ]
},
{
    id:11,
    firstlist:[{  
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"Arjun",
    rollno:"1"
},
{
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
contentType:"image/png"
    },
    name:"Boomika",
    rollno:"2"
},
{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Varun",
    rollno:"3"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Priyadharshini",
    rollno:"4"
}, 

{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"Vikram",
    rollno:"5"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"Suresh",
    rollno:"6"
},
{
    image:{
     data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Vinoth",
    rollno:"7"
}
    ]
},
{
    id:12,
    firstlist:[{  
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"Aravind",
    rollno:"1"
},
{
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
contentType:"image/png"
    },
    name:"Banu",
    rollno:"2"
},
{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Prabhu",
    rollno:"3"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Pallavi",
    rollno:"4"
}, 

{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"Varun",
    rollno:"5"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"Sridhar",
    rollno:"6"
},
{
    image:{
     data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Harikarthik",
    rollno:"7"
}
    ]
}

]

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

router.get('/',(req,res)=>{
    res.send(image);
})



router.get("/:id", (req, res) => {
    try {
        const individualImage = image.find(
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

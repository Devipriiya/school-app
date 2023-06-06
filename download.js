import express from "express";
// import connectDB from "./librarydb.js";
import multer from "multer";
import Library from "./libraryModel.js";
import mongoose from "mongoose";
const router =express.Router();
// connectDB();
Library
const app=express();
app.use(express.json());

const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const filesSchema=mongoose.Schema(
    {
   files:[{
        file:{
            data:String,
         contentType: String
        }
           }]          })

var Files= mongoose.model('Files', filesSchema);
filesSchema.plugin(Files);



const files={
 files:[ {
    file:{
        data:"https://publuu.com/flip-book/107330/288496",
       contentType:"file/pdf"
    }
  
},{
    file:{
        data:"https://publuu.com/fhjkj/576326948",
       contentType:"file/pdf"
    }


},{
    
        file:{
            data:"https://publuu.com/flip-book/107330/288511",
           contentType:"file/pdf"
        }
    
        
    
}
]
}
// connectDB();

app.use(express.json());

app.set("view engine","ejs");


app.get('/upload',(req,res) =>
{
    try{
        res.status(200).send(files);
    }
    catch(error){
        res.json({message:"not available"});
    }
});



app.get('/upload/:id',(req,res)=>{
    console.log(req.params.id);
 Files.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            files:result
        })
    })
    .catch(err=> {
    console.log(err);
    res.status(505).json({
        error:err
    })
    }
  )
})

app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newFile = new Files({
             files:req.body.files
            })
            newFile.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})

app.put('/upload/:id',(req,res)=>{
    console.log(req.params.id);
    Files.findOneAndUpdate({_id:req.params.id},{
        $set:{
            files:req.body.files
          

        }
    })
    .then(result=>{
        res.status(200).json({
            updated_files:result       
         })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    })
    app.delete('/upload/:id',(req,res)=>{
        console.log(req.params.id);
        Files.deleteOne({_id:req.params.id},{
            $set:{
               
                files:req.body.files
    
            }
        })
        .then(result=>{
            res.status(200).json({
                deleted_files:result       
             })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
        })
       app.delete('/upload',(req,res)=>{
    
         Files.deleteMany({files},(err,result)=>{
            if(err) throw err
            res.send(files)
            })
        })

const library={
collections:[
    {
    image:{
    data:"https://mlhshv2aawfz.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://mbabookstore.com/wp-content/uploads/2022/02/the-blue-book.png" , 
    contentType:"image/png" 
    },
    bookname:"Bluebook",
    category:"Grammer",
    authorname:"steephan"
},
{
    image:{
        data:"https://ramapublishinghouse.com/wp-content/uploads/2021/02/310-1.png",
        contentType:"image/png"
    },
    bookname:"planatation",
    category:"science",
    authorname:"josh evans"
},
{
    image:{
        data:"https://e7.pngegg.com/pngimages/919/266/png-clipart-catrike-brand-logo-appseconnect-mockup-success-stories-text-bicycle-thumbnail.png",
        contentType:"image/png"
    },
    bookname:"the key of success",
    category:"story",
    authorname:"jerry clifford"
},
{
    image:{
        data:"https://n1.sdlcdn.com/imgs/j/p/6/The-Discovery-of-India-by-SDL953668032-1-27cfd.png",
        contentType:"image/png"
    },
    bookname:"Discovery of India",
    category:"history",
    authorname:"Jawaharlal Nehru"
},
{
    image:{
        data:"https://m.media-amazon.com/images/I/5153EFaOnXL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
        contentType:"image/png"
    },
    bookname:"The magic mango",
    category:"picture book",
    authorname:"josh evans"
},
{
    image:{
        data:"https://n1.sdlcdn.com/imgs/k/f/z/WORD-POWER-MADE-EASY-Norman-SDL961987150-4-1c1d0.png",
        contentType:"image/png"
    },
    bookname:"Word power made easy",
    category:"vocabulary",
    authorname:"Norman lewis"
},
{
    image:{
        data:"https://99bookscart-assets.s3.ap-south-1.amazonaws.com/9788183225090.png",
        contentType:"image/png"
    },
    bookname:"Believe in Yourself",
    category:"biography",
    authorname:"josheph murphy"
},
{
    image:{
        data:"https://0.academia-photos.com/attachment_thumbnails/43972911/mini_magick20190215-18997-1cwtgzv.png?1550238059",
        contentType:"image/png",
    },
    bookname:"polynomials",
    category:"mathematics",
    authorname:"Victory V.Prasolov"
}
]
}

app.set("view engine","ejs");

app.use(express.static("public"));
router.get('/data',(req,res)=>{``
res.render("data");
})
app.get('/download-file',(req,res)=>{
    res.download("./book/Nodejs contents 1.pdf");
})

router.get('/',(req,res) =>
{
    try{
        res.status(200).send(library);
    }
    catch(error){
        res.json({message:"not available"});
    }
});

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
  Library.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            library:result
        })
    })
    .catch(err=> {
    console.log(err);
    res.status(505).json({
        error:err
    })
    }
  )
})
router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new Library({
               collections:req.body.collections
            })
            newImage.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})
router.post('/download-file',(req,res)=>{
    res.download("./book/Nodejs contents 1.pdf");
})
router.put('/:id',(req,res)=>{
    console.log(req.params.id);
    Library.findOneAndUpdate({_id:req.params.id},{
        $set:{
            collections:req.body.collections
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_library:result       
         })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    })
    router.delete('/:id',(req,res)=>{
        console.log(req.params.id);
        Library.deleteOne({_id:req.params.id},{
            $set:{
                collections:req.body.collections
    
            }
        })
        .then(result=>{
            res.status(200).json({
                deleted_library:result       
             })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
        })
        router.delete('/',(req,res)=>{
    
            Library.deleteMany({library},(err,result)=>{
            if(err) throw err
            res.send(library)
            })
        })

        export default router;
const port=4000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    console.log(library);
});
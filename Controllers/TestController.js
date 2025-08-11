const Test = require('../Models/testModels')// error start from here

exports.postTest=async(req,res)=>{
try {
    const body=req.body;
    // console.log(body);/
    const isDataexist=await Test.findOne({name:body.name})
    if(isDataexist){
             res.status(202).json({
            "status":"fail",
    'message':'Data already exisr=t'})
    }
    else{
    const Dataenter=await Test.create(body)
    res.status(200).json({
        message:"added Successfully",
        status:"success",
        data: Dataenter
    })
    }
    
} catch (err) {
    res.status(404).json({error:err,
        "status":"failed",
    'message':'Techinical fault'})
    
}

}

exports.getTest=async(req,res)=>{
    try {
        const TestData=await Test.find({});
        if(TestData){
             res.status(201).json({
        message:"Test available",
        status:"success",
        data: TestData
    })
        }
        else{
            res.status(404).json({
                message:'No Test available',
                status:"fail",
                data: TestData,

            })
        }
    }
    catch (err) {
    res.status(404).json({error:err,
        "status":"failed",
    'message':'Techinical fault'})
    
}

}

exports.getTestByid=async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    
    try {
        const TestData=await Test.findById(id);
        if(TestData){
             res.status(201).json({
        message:"ID available",id,
        status:"success",
        data: TestData
    })
        }
        else{
            res.status(404).json({
                message:`this id ${id} not available`,
                status:"fail",
                data: TestData,

            })
        }
    }
    catch (err) {
    res.status(404).json({error:err,
        "status":"failed",
    'message':'Techinical fault'})
    
}

}
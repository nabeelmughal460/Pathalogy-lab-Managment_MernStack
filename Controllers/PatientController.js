const Patient = require("../Models/patientModel");
const Test = require('../Models/testModels')

exports.PostPatient = async (req, res) => {
  try {
    const body = req.body;
    const newUser = await Patient.create(body);
    if (newUser) {
      res.status(200).json({
        data:newUser,
        message: "Patient Added Successfully",
      });
    }
    else{
        res.json({
            "error" :"Some technical Issue",
            "message":"Failed in Patient Posting",
        })
    }
  } catch (err) {
    res
      .status(404)
      .json({ error: err, status: "failed", message: "Techinical fault" });
  }
};

exports.GetpatientByID =async (req,res)=>{
    try {
        const {id}=req.params
        console.log(id,"GetpatientByID");
        const IsUser=await Patient.findById(id)
        if(IsUser){
            res.status(200).json({
        data:IsUser,
        message: "Patient GET Successfully",
      });
        }
        else{
            res.status(404).status({
                message:"No Such Patient Exist"
            })
        }
        
        
    } catch (err) {
    res
      .status(404)
      .json({ error: err, status: "failed", message: "Techinical fault" });
  }
}

exports.GetpatientByStatus= async(req,res)=>{
    try {
        const {statusfind}=req.params;
        const IsData= await Patient.find({status:statusfind})
        console.log(statusfind,'sasasasas');
        res.status(200).json({
        message: "fetched Successfully",
        data:IsData,
      });
        
    } catch (err) {
    res
      .status(404)
      .json({ error: err, status: "failed", message: "Techinical fault" });
  }
}
exports.UpdatepatientByID=async(req,res)=>{
    try {
        const body =req.body // to get the body
        const {id}=req.params // to get the id

        const updatedpatient =await Patient.updateOne({_id:id},body);//_id because of mongodb compass table use _id
        // console.log(updatedpatient,id,body);
        
        if(updatedpatient){
        res.status(200).json({
        message: "Updated  Successfully",
        data:updatedpatient,
      });       
     }

        // console.log(body,'body');
        // console.log(id,'id');
        // const IsUser=Patient.findByIdAndUpdate(id,body,{new:true})
        // res.status(200).json({
        //     message:"Patient Updated Successfully",
        //     data:IsUser
        //     })
        
    } catch (err) {
    res
      .status(404)
      .json({ error: err, status: "failed", message: "Techinical fault" });
  }
}


exports.GetpatientTestDetails=async(req,res)=>{

    try {
        const {id} =req.params;
        const IsPatientData =await Patient.findById(id)
        console.log(IsPatientData);
        
        if(IsPatientData)
            {
            
            const testdetails=await Test.findById(IsPatientData.test);
            console.log(testdetails,'test detailhiiiii');
             res.status(200).json({
            message: "Get Data   Successfully",
            // data:updatedpatient,
            patient :IsPatientData,
            test:testdetails,
                }); 
            

            }
        else{
             res.status(404).status({
                message:"No Such Patient Exist"
            })
        }
        
    } catch (err) {
    res
      .status(404)
      .json({ error: err, status: "failed", message: "Techinical fault" });
  }
}


exports.DeletePatientByID=async(req,res)=>{
    try {
    const {id} =req.params;
    const DeletedUser =await Patient.deleteOne({_id:id})// ({_id:id}) _id by mongo db and pass it in object
    if(DeletedUser.deletedCount>0){
        res.status(200).json({message:"Patient Deleted Successfully",status:"success",data:
            DeletedUser})

    }    
    else{
        res.status(404).json({message:"No Such Patient Exist",status:"failed"})
    }
    }
    catch (err) {
    res
      .status(404)
      .json({ error: err, status: "failed", message: "Techinical fault" });
  }

}
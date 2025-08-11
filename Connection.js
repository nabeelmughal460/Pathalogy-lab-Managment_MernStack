const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/Human-Test-Backend').then(()=>{
    console.log('MongoDB Connected Successfully');

    
})
.catch(err=>{
    console.log('Error in MongoDB Connection');
})
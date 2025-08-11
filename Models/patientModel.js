// in controllers ka hum lo jo bhi mongo db ka data or jo bhi router  bany ga routes ma
// us ka ander ka function ka ager wo router mera call ho or us router ka ander ka function ka ager wo route mera call ho or call hony pa kya function chly or us function ko hum is controller ma define kry a
// a
// is controller ma app.getrequest, post request,putrequest delete request ,
// us sab ka function hum is controller folder ma daly ga ager test hoga to test.js or ager patient ka higa to pateint ka kry ga

// ab database ka lya RTCPeerConnection,js file ha wo use hogi
// ab models banaye ga usmy hum schema daly ga




// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  status: {
    default: 'Pending',
    type: String,
  },
  age: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  mobileNumber: {
    required: true,
    type: String,
  },
  examineby: {
    required: true,
    type: String,
  },
  examinedate: {
    required: true,
    type: String,
  },
  test: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
  reporteddate: {
    required: true,
    type: String,
  },
  result: [
    {
      name: {
        type: String,
        required: true,
      },
      range: {
        type: String,
        required: true,
      },
      unit: {
        type: String,
        required: true,
      },
      result: {
        type: String,
        required: true,
      },
    },
  ]
}, {
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
});

const repo = mongoose.model('patient', Schema);
module.exports = repo;

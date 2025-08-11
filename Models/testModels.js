// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },

  description: {
    required: true,
    type: String,
  },

   price: {
    required: true,
    type: String,
  },

  //  imgLink: {
  //   required: true,
  //   type:"https://www.freeiconspng.com/img/41634",
  // }
  imgLink: {
  type:String,
  default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAgwCAYAAAD9ctBfAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABpxJREFUeJzt3YEJgDAQRNE8/59dM9zAQQlYu2bZcnAAECBAgQIECAAAECBAgQIECAwGwr3M+9mRROXsS1cJ28Bx7X5YGr2C/xA7bMf+Psl/YiLhXJvv+s7HKDuA6DIF/wOwgXYe7Pvhq5fBHBCBnBmDm8A5hhVYC8zDAhQH9FvFg59uTzA2hcK3zJQLcS75u/G5dRA7SvCEw1Afz7RzW0+jOXcTjmvRc7RzE1B/jcw41av6NlG3j/A9d9QvD1zDduD/AziXFtB9EugJQHg3gXJ9yFz7bcNc5v0PrCEAAQIECBAgQIAAAQIECBAgQIAAgXeCDtRnc22vdvJAAAAAElFTkSuQmCC",
},

   fasting: {
    required: true,
    type: String,
    // type: "data:image/jpeg;base64,/9j/https://www.freeiconspng.com/img/41634",
  },

   normalrange: {
    required: true,
    type: String,
  },

   abnormalrange: {
    required: true,
    type: String,
  },
},
    {
        timestamps:{
            createdAt:true,
            updatedAt:true
        }
    });
const repo=mongoose.model('Test',Schema)
module.exports = repo;
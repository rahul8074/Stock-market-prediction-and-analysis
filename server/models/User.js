var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema=new Schema({
  name:{type:String, required:true},
  email:{type:String, required:true},
  mobile:{type:String,require:true},
  password:{type:String,required:true},
  admin:{type:Boolean,default:false},
  status:{type:Boolean,default:false},
   token:{
        type:String,
        default:''
    },
  id:{type:String},
  date:Date,
  payment:{type:Boolean,default:false},
  adminpayment:{type:Boolean,default:false},
})

module.exports = mongoose.model('User',userSchema);
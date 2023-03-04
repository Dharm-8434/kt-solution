const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {type: String,required: true,trim: true,unique:true},
  email: {type: String,require:true,trim: true,unique:true},
  phone: {type: String,require:true,trim: true,unique:true},
  address:{type:String,require:true,unique:true},
  status:{type:[String],enum:["Active","InActive"],default:'Active'}
}, { timestamps: true });

module.exports = mongoose.model('employee', employeeSchema);

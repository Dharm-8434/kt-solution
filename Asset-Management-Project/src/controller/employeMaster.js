const employeeModel = require('../models/employeeModel')


const createUser = async (req, res) => {
    try {
      let data = req.body;
      let { name, email, phone, address,status } = data;
     
      if (!name) 
        return res.status(400).send({
          status: false,
          message: " name is required and should not be an empty string",
        });
  
      if (!email)
        return res
          .status(400)
          .send({ status: false, message: "User email-id is required" });
         
          let checkEmail = await employeeModel.findOne({ email: email });
          if (checkEmail)
            return res
              .status(409)
              .send({ status: false, message: "Email already exist" });

          if (!phone)
        return res
          .status(400)
          .send({ status: false, message: "User phone number is required" });
  
      
    let checkPhone = await employeeModel.findOne({ phone: phone });
          if (checkPhone)
            return res
              .status(409)
              .send({ status: false, message: "Phone number already exist" });
    
  
if(!address)
return res.status(400).send({status:false,message:"address must be field"})

let responseData = await employeeModel.create(data);

res.status(201).send({
    status: true,
    message: "User created successfully",
    data: responseData,
  });
   } catch (err) {
      res.status(500).send({ status: false, error: err.message });
    }
  };


  //------------------------getEmployeeData-----------------------//.find({ isDeleted: false

  const getEmployee = async function(req,res){
    try {
            let employee = req.params.employeeId
            console.log(employee)
            // if (!employeeId) {
            //   return res 
            //     .status(400)
            //     .send({ status: false, message: "please enter a employeeId ! " });
            // }
          
            // let employee = await employeeModel.findOne({ _id: employeeId });
            // if (!employee) {
            //   return res.status(404).send({
            //     status: false,
            //     message: "this employee id is not found in employee collection ",
            //   });
            // }
            
          
            return res
              .status(200)
              .send({ status: true, message: "Success", data:employee });
    } catch (error) {
       res.status(500).send({status:false,error:error.message});
    }
  }
  
  module.exports= {createUser,getEmployee}
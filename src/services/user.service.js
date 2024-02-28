import User from '../models/user.model';
import bcrypt from 'bcrypt'

//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user
export const createUser = async (body) => {
  const email = body.email
  const password = body.password
  const phone = body.mobile
  const userCheck = await User.findOne({email})
  if (!userCheck){
    const salt = 10
    const hash = bcrypt.hashSync(body.password, salt);
    body.password=hash
    if(password.length>=8&&phone.length>=10){
      const data = await User.create(body)
      return data;
    } else if(password.length<8){
      let err = {};
      err.msg = "Password is too small!";
      err.param = "password";
      throw err;
    } else if(phone.length<10){
      let err = {};
      err.msg = "Enter a valid Mobile Number!";
      err.param = "phone";
      throw err;
    }
  }
  else{
    let err = {};
    err.msg = "User Email Already Exists!";
    err.param = "email";
    throw err;
  }
};

export const userLogin = async (email,password) => {
  const data = await User.findOne({email})
  if(data!=null){
  if(bcrypt.compareSync(password,data.password)){
      return data
    }else{
      let err = {};
      err.msg = "Password does not Match!";
      err.param = "password";
      throw err;
    }
  }else{
    let err = {};
    err.msg = "Email does not Exists!";
    err.param = "email";
    throw err;
  }
};
import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
import jwt from 'jsonwebtoken';

export const getAllUsers = async (req, res, next) => {
  try {
    const data = await UserService.getAllUsers();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
      const data = await UserService.createUser(req.body);
      res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User Created Successfully!'
    });
  } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message:error
    });
  }
};

export const userLogin = async (req, res, next) => {
  try {
        const data = await UserService.userLogin(req.body.email,req.body.password);
        jwt.sign({data},process.env.ACCESS_TOKEN,(err,token)=>{
          res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Login Successfully!',
            token: token
          });
      })
  } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error
    });
  }
};
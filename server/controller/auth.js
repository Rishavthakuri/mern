import { request } from "express";
import Users from "../model/user";

export const login = async (req,res) =>{
    console.log('MVC!!!!');
    res.status(200).send("request sucess !!!This response from login api");
}

export const register = async (req,res) =>{
   console.log(req.body);
   const {name,email,address}=req.body;
   console.log(name);

   const userData=new Users(
       {
           name,
           email,
           address
       })
   await userData.save()
   return res.json({Message:"User has been registered."})

}


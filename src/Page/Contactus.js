import React from "react";
import { useState,useEffect } from "react";

const Contactus = (props) => {
 
  const[data,setdata] =useState("");
  useEffect(()=>{
    // console.log(props.passingvalue.name)
    console.log(data)
  },[data]);
  const changeHandler =(e) => {
  //  setdata()
  console.log(e.target.value)
  setdata(e.target.value);
  }
  return <div>
      <h4>Contact me! Hey This is {props.passingvalue.name} </h4>
      <form>
      <input type="text" placeholder="Name"  value={data} onChange={changeHandler}></input>
      <input type="text" placeholder="Address"></input>
      <input type="text" placeholder="Rollno"></input>
      <button type="submit" > submit </button>
      </form>
      </div>;
};

export default Contactus;

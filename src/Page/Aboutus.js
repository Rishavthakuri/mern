import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";


 const Aboutus = () => {
  const[data,setData] =useState([]);

  const func = async()=>
{
// console.log("This is function")
const apiData=await axios.get('http://localhost:8000/api/admin-dash');
// console.get(apidata.data);
setData(apiData.data);
  
};

useEffect(()=>{
  func();
},[]);


  return(
    
      

      
      <div>
        <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title"> <p key={data.id}>{data.id}</p></span>
          <p> Hello this is {data.name}</p>
          
        </div>
      
      </div>
    </div>
  </div>
            
       
      </div>
 
 

  )
}
export default Aboutus;
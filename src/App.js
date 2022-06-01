import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Nav/index";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Aboutus from "./Page/Aboutus";
import Contactus from "./Page/Contactus";
import Notices from "./Page/Notices";
import { useState } from 'react';


function App() {
  const [myVariable,setmyVariable] =useState(
    {
      sn:"one",
      name:"Rishav"
    }
  )

  return (
    <div className="App">
      {/* <p>{myVariable.name}</p> */}
      {/* <Router>
      <Navbar></Navbar>
        <Routes>
    
          <Route path="/aboutus" element={<Aboutus/>}></Route>
          <Route path="/contactus" element={<Contactus/>}></Route>
          <Route path="/notices" element={<Notices/>}></Route>
        </Routes>
      </Router> */}

<Aboutus passingvalue={myVariable}/>
   
    </div>
  );
}

export default App;

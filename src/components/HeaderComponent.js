import React, { useState,useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


export default function HeaderComponent() {
    // you can not change name useing normal js. js needs to refresh or reload.
    // there is no track of update the variable that why react used the useState() it will do render process
    // let btnName = 'Login';
   
    // whenever the state variable will be change using the setBtnNameReact. React will re-render/refresh the header component and all the update the value there
  const [btnNameReact,setBtnNameReact] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext)
  // useEffect(()=>{
  //   console.log('render header');
  // },[btnNameReact])

  

  return (
    <div className="header flex justify-between bg-gray-50 shadow mb-2">
      <div className="logo-container">
        <img className="logo w-32 p-2" src={LOGO_URL}></img>
      </div>
      <div className="nav-item flex items-center p-4">
        <ul className="flex items-center">
        {/* <li><a href="/"> Home </a></li>
        <li><a href="/about"> About Us </a></li>
          <li><a href="/contact"> Contact Us </a></li> */}
          <li className="px-2">  Online Status : {onlineStatus ?  "Green":"Red"}</li>
          <li className="px-2"> <Link to="/"> Home </Link></li>
          <li className="px-2"> <Link to="/about"> About Us </Link></li>
          <li className="px-2"> <Link to="/contact"> Contact Us </Link></li>
          <li className="px-2"> <Link to="/grocery"> Grocery </Link></li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            <button className="login-btn" onClick={()=>{ 
              if(btnNameReact == 'Login'){
                setBtnNameReact('logout')
                console.log(btnNameReact);
              }else{
                setBtnNameReact('Login')
                console.log(btnNameReact);
              } 
              
             
            }}> {btnNameReact} </button>
          </li>
          <li className="font-medium"> {loggedInUser}   </li>
        </ul>
        
      </div>
    </div>
  );
}

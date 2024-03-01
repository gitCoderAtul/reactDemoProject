import React, { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function HeaderComponent() {
    // you can not change name useing normal js. js needs to refresh or reload.
    // there is no track of update the variable that why react used the useState() it will do render process
    // let btnName = 'Login';
   
    // whenever the state variable will be change using the setBtnNameReact. React will re-render/refresh the header component and all the update the value there
  const [btnNameReact,setBtnNameReact] = useState('Login');
  const onlineStatus = useOnlineStatus();
  // useEffect(()=>{
  //   console.log('render header');
  // },[btnNameReact])

  

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-item">
        <ul>
        {/* <li><a href="/"> Home </a></li>
        <li><a href="/about"> About Us </a></li>
          <li><a href="/contact"> Contact Us </a></li> */}
           <li>  Online Status : {onlineStatus ?  "Green":"Red"}</li>
          <li> <Link to="/"> Home </Link></li>
          <li> <Link to="/about"> About Us </Link></li>
          <li> <Link to="/contact"> Contact Us </Link></li>
          <li> <Link to="/grocery"> Grocery </Link></li>
          <li>Cart</li>
          <li>
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
        </ul>
        
      </div>
    </div>
  );
}

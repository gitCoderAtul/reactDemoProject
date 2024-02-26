import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";

export default function HeaderComponent() {
    // you can not change name useing normal js. js needs to refresh or reload.
    // there is no track of update the variable that why react used the useState() it will do render process
    // let btnName = 'Login';
   
    // whenever the state variable will be change using the setBtnNameReact. React will re-render/refresh the header component and all the update the value there
  const [btnNameReact,setBtnNameReact] = useState('Login');
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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

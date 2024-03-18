import React, { useState,useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"; 

export default function HeaderComponent() {
    // you can not change name useing normal js. js needs to refresh or reload.
    // there is no track of update the variable that why react used the useState() it will do render process
    // let btnName = 'Login';
   
    // whenever the state variable will be change using the setBtnNameReact. React will re-render/refresh the header component and all the update the value there
  const [btnNameReact,setBtnNameReact] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext); 
  const [location, setLocation] = useState(null); 

  // useEffect(()=>{
  //   console.log('render header');
  // },[btnNameReact])


  //subscribing to the store using a selector
  const cartItem = useSelector((state)=>state.cart.items)
  console.log('header cart', cartItem, cartItem.length);

  handleClickLocation = (e)=>{
    console.log(this);
    console.log(e);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }  

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }
  
  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <div className="header flex justify-between bg-gray-50 shadow mb-2">
      <div className="logo-container flex items-center">
        <img className="logo w-32 p-2" src={LOGO_URL}></img>
        {/* <p><button className="px-3 py-2 bg-slate-200 rounded-sm" onClick={handleClickLocation}>Get location </button></p> */}
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
          <li className="px-2"> <Link to="/cart"> <strong> Cart - {cartItem.length}</strong> </Link> </li>
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

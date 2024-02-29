import { useEffect, useState } from "react";

const UserComponent = (props) =>{
    console.log(props);
    const {name,location,contact} = props;
    const [count,setCounter] = useState(1);
    const [count2, setCount2] = useState(5)
    // const count = 0;
    // const count2 = 1;
useEffect(()=>{
   const timer = setInterval(()=>{
        console.log('1s interval call');
   },1000) 

   return()=> {
    clearInterval(timer)
    console.log('distory use effect');
   }
},[])

    return(
        <div>
            <h5>Count : {count}  |  multiple number :{count2}  
            <button style={{margin:'0 0 0 10px',padding:'5px 10px'}}
                onClick={(e)=>{
                    console.log(e);
                    //  count + 1;
                    setCounter(count + 1)
                    setCount2(count2 * 2)
                    console.log('ok'); 
                }}
            > Count Increase </button> 
            </h5>
            
            <p> <strong> Name </strong>: {name}</p>
            <p><strong> Location: </strong>{location}</p>
            <p><strong> Contact : </strong>{contact}</p>
        </div>
    )
}
export default UserComponent;
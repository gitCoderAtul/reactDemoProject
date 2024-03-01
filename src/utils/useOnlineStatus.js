// import React from 'react'

import { useEffect, useState } from "react";

// export default function useOnlineStatus() {
//   return (
//     <div>useOnlineStatus</div>
//   )
// }

const useOnlineStatus = () =>{
    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(()=>{
        
        window.addEventListener('offline',()=>{
           setOnlineStatus(false)
        })
        window.addEventListener('online', ()=>{
             setOnlineStatus(true)
        }) 
            // window.addEventListener('online',function (){
            //     return setOnlineStatus(true)
            // })
         
            // window.addEventListener('offline',function (){
            //     return setOnlineStatus(false)
            // })
        
    },[])
    
    return onlineStatus;
}
export default useOnlineStatus;
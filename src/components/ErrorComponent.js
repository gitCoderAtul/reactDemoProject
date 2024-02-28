import React from 'react'
import { useRouteError } from 'react-router-dom'


export const ErrorComponent = () => {
    const err = useRouteError();
    console.log(err);
  return (
     <div>
        <h1>OOPS! Something went wrong</h1>
        <p>{err.status} </p>
         <p>{err.statusText}</p>
     </div>
  )
}

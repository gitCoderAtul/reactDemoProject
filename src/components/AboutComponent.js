import React, { Component }from "react";
import UserClass from "./UserClass";
import UserComponent from "./UserComponent";

const AboutComponent = ()=>{
    console.log('Abt comp call');
return(
    <div> 
        about us
  <UserComponent name="akansha" location="mumbai" contact="@akanshaKhule"></UserComponent> 
    {/* <UserClass name="atul" location="mumbai" contact="@atulKhule"></UserClass> */}
    </div>
)
} 

export default AboutComponent;

// export default class AboutComponent extends Component {
//     constructor(){
//     super();
//      console.log('parent const call');
//     }

//     componentDidMount(){
//         console.log('parent did mount call');
//     }

//   render() {
// console.log('parent render call');

//     return (
//         <div> 
//         about us
//             {/* <UserComponent name="akansha" location="mumbai" contact="@akanshaKhule"></UserComponent> */}
//             {/* <UserClass name="1 atul" location="mumbai" contact="@atulKhule"></UserClass> */}
//              <UserClass name="2 Akashy" location="mumbai" contact="@Akashy"></UserClass>
//            {/* <UserClass name="3 Sudesh" location="mumbai" contact="@Akashy"></UserClass> */}
//         </div>
//     )
//   }
// }

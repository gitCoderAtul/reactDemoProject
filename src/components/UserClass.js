// import React, { Component } from 'react'

// export default class UserClass extends Component {
//   render() {
//     return (
//       <div>UserClass</div>
//     )
//   }
// }

import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)        
        this.state = {
            // count1:1,
            // count2:2
            userInfo:{
                name:'DemoUser',
                avatar_url:'',
                location: 'Maharashtra'

            }
        }

        console.log('child class comp call',props);
    }
   
    async componentDidMount(){
        // console.log('child did mount call', this.props.name);
        //api call
        
        const data = await fetch('https://api.github.com/users/gitcoderatul');
         
        const json = await data.json();
          console.log(json);
          this.setState({
            userInfo:json
          })

          this.timer = setInterval(()=>{
                console.log('interal call');
          },1000)
                 
    }

    componentDidUpdate(){
        console.log('child did update comp call');
    }

    componentWillUnmount(){
           clearInterval(this.timer)
        console.log('child will unmount call');
    }

    render(){
        console.log('child render');
        // const {name,location}=this.props;
        // const {count1,count2} = this.state;
        const {name, location,avatar_url} = this.state.userInfo

        return(
            <div>
                {/* <hr></hr>
                UserClass
                <h5>Count : {count1} ------------ Count : {count2} </h5> 
                <button onClick={()=>{ 
                    this.setState({
                        count1: this.state.count1 + 2,
                      
                    });
                    console.log(this); 
                    // console.log(this); 
                    }}>
                    Count Increase</button> */}
                  <img src={avatar_url} alt="" style={{width:'100px', borderRadius:'50px'}}></img>  
                <p><strong> Name : </strong> {name} </p> 
                <p><strong> Location : </strong> {location} </p>
                {/* <p><strong> Contact : </strong> {this.props.contact}</p> */}
            </div>
        )
    }
}
export default UserClass

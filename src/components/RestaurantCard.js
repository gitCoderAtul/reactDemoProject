import React from "react"; 
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{
    // const {name,cuisine} = props;
    const {restData} = props;
    const {
        aggregatedDiscountInfoV3,
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        sla,
        costForTwo
    } = restData?.info
    return( 
        <div className=" p-2" style={{ backgroundColor: "#fdfdfd", borderRadius:"5px"}}>
              <img className="res-logo w-[100%] h-[250px] object-cover shadow-inner" src={CDN_URL + cloudinaryImageId } alt=""></img>  
            <h3 className="font-semibold text-lg my-1"> {name}</h3>
            <h4 className="text-gray-500">  {cuisines.join(" , ").slice(0,35)+ '..'}</h4>
            <h4 className="text-gray-900"> Avg Rating : {avgRatingString} | <span> {sla.slaString} </span></h4>
            <h4 className="text-gray-500"> {costForTwo} </h4>
         </div>

        // <div className="res-card" style={styleCard}>

        // <div className="res-card" style={{ backgroundColor: "#fdfdfd", borderRadius:"5px"}}>
        //     <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restData.info.cloudinaryImageId } alt=""></img>
        //     <h3> {restData.info.name}</h3>
        //     <h4>  {restData.info.cuisines.join(" , ")}</h4>
        //     <h4> Avg Rating : {restData.info.avgRatingString} | <span> {restData.info.sla.slaString} </span></h4>
        //     <h4> {restData.info.costForTwo} </h4>
        // </div>
    )
}

//higher order component
// inpute - restaurant card => restaurant card discount

export const withDiscountLabel = (RestaurantCard) =>{
    return (props)=>{ 
        console.log(props);
        const {restData} = props;
    const {
        aggregatedDiscountInfoV3 
    } = restData?.info
        return(
            <div className="w-[100%]" > 
            <div className="relative w-[100%]">
                <label style={ { background: 'linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27 30 36 / 53%) 84.21%)', width: '94%', margin: 'auto',
    left: '9px', height: '260px', display: 'flex', alignItems: 'self-end', justifyContent: 'center', paddingBottom: '10px'}} 
    className="absolute text-gray-50 text-2xl font-semibold hover:cursor-pointer ">
        {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}</label>
            </div>
                {/* <label>{aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}</label> */}
                <RestaurantCard {...props}></RestaurantCard>
            </div>
            )
        
    }

}

export default RestaurantCard;
import React from "react"; 
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{
    // const {name,cuisine} = props;
    const {restData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        sla,
        costForTwo
    } = restData?.info
    return( 
        <div style={{ backgroundColor: "#fdfdfd", borderRadius:"5px"}}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId } alt=""></img>
            <h3> {name}</h3>
            <h4>  {cuisines.join(" , ")}</h4>
            <h4> Avg Rating : {avgRatingString} | <span> {sla.slaString} </span></h4>
            <h4> {costForTwo} </h4>
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

export default RestaurantCard;
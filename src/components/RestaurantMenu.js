import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () =>{

    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);

    // const resId= params;

// const API = " https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2467218&lng=72.9759713&restaurantId=552383&catalog_qa=undefined&submitAction=ENTER";
    useEffect(()=>{
        console.log('useEffect call');
        fetchData();        
    },[])
    const fetchData = async ()=>{
        const data = await fetch(MENU_API+ resId );        
        console.log(data);
        const json = await data.json();

        console.log('api json data ',json);
    //    console.log(json?.data?.cards[0]?.card?.card?.info); 
          setResInfo(json.data)

    };
    if(resInfo == null) return <ShimmerComponent></ShimmerComponent>;
    
    // console.log(resInfo?.cards[0]?.card?.card?.info);
      const {name,cuisines,areaName,sla,costForTwoMessage,feeDetails,totalRatingsString,avgRatingString} = 
    resInfo?.cards[0]?.card?.card?.info;
    // const{name} = json?.data?.cards[0]?.card?.card?.info;

    const{itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
//    const{myitemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//      console.log('new card ', myitemCards);
    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2467218&lng=72.9759713&restaurantId=552383&catalog_qa=undefined&submitAction=ENTER
    return(
        <div>
       
         <div className="Rest-name">
            <div>
             <h1>{name}</h1>
             <p>{cuisines.join(',')}</p>   
            <p>{areaName}</p>   
            <p> {feeDetails.message} </p>  
             <p> <span> Delivery Time :{sla.deliveryTime} Mins </span> | <span>Price{costForTwoMessage} </span> </p>
             </div>
             <div>
                <p> {avgRatingString} </p>
                <p> {totalRatingsString} </p>
             </div>
            </div> 
        <div className="Rest-title">
                <h4>Restaurant title</h4>
               {
                    itemCards.map((res)=>(
                        <div key={res.card.info.id}>
                            <div>                            
                        <h5> {res.card.info.name}</h5>
                        <p> Rs: {res.card.info.price || res.card.info.defaultPrice} </p> 
                     </div>
                     <div>
                     <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/'+ res.card.info.imageId}></img>
                        </div>
                        </div>
                    ))
                }     
                <div>
                    <h5>Restaurant food name</h5>
                    <p></p>
                </div>
        </div>
        </div>
    )
}

export default RestaurantMenu;
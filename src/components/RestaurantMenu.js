import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

    // const [resInfo,setResInfo] = useState(null); 
    const {resId} = useParams();
    // console.log(resId);

    const resInfo = useRestaurantMenu(resId); 
    const [showIndex, setShowIndex] = useState(2)

    if(resInfo == null) return <ShimmerComponent></ShimmerComponent>;
    
    // console.log(resInfo?.cards[0]?.card?.card?.info);
      const {name,cuisines,areaName,sla,costForTwoMessage,feeDetails,totalRatingsString,avgRatingString} = 
    resInfo?.cards[0]?.card?.card?.info;
    // const{name} = json?.data?.cards[0]?.card?.card?.info;

    //  const{itemCards} = 
    //  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //  console.log('card ', resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

     const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(cat => cat.card?.['card']?.['@type'] == ['type.googleapis.com/swiggy.presentation.food.v2.ItemCategory']);
          console.log(categories);

    // const{myCards} = cat?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    //  console.log('new card ', myCards);
   
    return(
        <div className="body flex flex-col flex-wrap mx-auto max-w-[1280px]">
       
         <div className="flex flex-row justify-between pt-10">
            <div>
             <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
             <p className="text-gray-500">{cuisines.join(',')}</p>   
            <p className="text-gray-500">{areaName}</p>   
            <p className="text-gray-500 py-3"> {feeDetails.message} </p>              
             </div>
             <div className="border border-solid rounded-sm border-green-600 shadow-md shadow-green-50 p-3 place-self-start">
                <p> {avgRatingString} </p>
                <p> {totalRatingsString} </p>
             </div>  
            </div> 
        <div className="border-t border-dashed border-gray-300 bo py-2"> 
             <p className="py-3 font-bold text-gray-800"> <span className="uppercase"> Delivery Time :{sla.deliveryTime} Mins </span> | <span className="uppercase">Price {costForTwoMessage} </span> </p>
        </div>            
        <hr className="border-gray-300"></hr>
        <div className="Rest-title py-4">
                {/* <h4 className="font-semibold text-xl py-2">Restaurant title</h4> */}
                  {
                    //showItems={index === 0 ? true : false} now this is control component and state lift using porps
                    
                    categories.length>0 && categories.map((category, index)=>(
                        <RestaurantCategory  key={category?.card?.card?.title}                      
                        data={category.card.card}
                        index={index}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={()=> setShowIndex(index) }
                    ></RestaurantCategory>
                    ))
                }  
                 {/* {
                    itemCards.length > 0 && itemCards.map((res)=>(
                        <div className="flex justify-between my-4 py-5 border-t border-solid border-gray-200" key={res.card.info.id}>
                            <div>                            
                                <h5 className="font-semibold text-md py-1"> {res.card.info.name}</h5>
                                <p className="text-gray-600"> Rs: {(res.card.info.price/100) || res.card.info.defaultPrice} </p> 
                                <p className="text-gray-500 py-5"> {res.card.info.description || ('An alternate fun way to enjoy food.')}</p>
                            </div>
                        <div className="shadow-md"> 
                                 
                              <img className="w-[160px] h-[120px] rounded-md object-cover" src={('https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/'+ res.card.info.imageId) || ('https://www.flaticon.com/free-icon/bibimbap_2276931?term=food&page=1&position=6&origin=tag&related_id=2276931')}></img>
                           
                        </div>
                        </div>
                    ))
                }       */}
                <div>
                    <h5>Restaurant food name</h5>
                    <p></p>
                </div>
        </div>
        </div>
    )
}

export default RestaurantMenu;
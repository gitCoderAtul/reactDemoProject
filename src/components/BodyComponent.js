import  React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import restList from '../utils/mockData';


export default function BodyComponent() {
//
//It maintained the state of component or state of function or state of the variable
    // local stater variable - super powerful variable
    const [listRestaurant, setListRestaurant] = useState(restList);

    // const [listRestaurant, setListRestaurant] = useState(listRestaurant1);
    
    // normal js variable
    //  let listRestaurant = [];

    //nomral js variable
    // let listRestaurant = [
    // let listRestaurant1 = [
    //     {
    //         "info": {
    //           "id": "32133",
    //           "name": "Wow Momos",
    //           "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    //           "locality": "Thane West",
    //           "areaName": "Thane West",
    //           "costForTwo": "₹300 for two",
    //           "cuisines": [
    //             "Pizzas"
    //           ],
    //           "avgRating": 4,
    //           "parentId": "721",
    //           "avgRatingString": "4.0",
    //           "totalRatingsString": "5K+",
    //           "sla": {
    //             "deliveryTime": 28,
    //             "lastMileTravel": 1.5,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "25-30 mins",
    //             "lastMileTravelString": "1.5 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //           } 
    //         } 
    //     },
    //     {
    //         "info": {
    //           "id": "32132",
    //           "name": "Wow Momos",
    //           "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    //           "locality": "Thane West",
    //           "areaName": "Thane West",
    //           "costForTwo": "₹300 for two",
    //           "cuisines": [
    //             "Pizzas"
    //           ],
    //           "avgRating": 3.4,
    //           "parentId": "721",
    //           "avgRatingString": "3.4",
    //           "totalRatingsString": "5K+",
    //           "sla": {
    //             "deliveryTime": 28,
    //             "lastMileTravel": 1.5,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "25-30 mins",
    //             "lastMileTravelString": "1.5 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //           } 
    //         } 
    //     },
    // ];
 
    
  return (
    <div className="body">
                <div className="search">
                    Search
                    <div className='filter'>
                        <button className='filter-btn' onClick={()=> {  
                            const filteredList = listRestaurant.filter(
                               (res) => ( res.info.avgRating >4 
                            )); 
                            console.log("button click");
                            console.log(filteredList);
                            setListRestaurant(filteredList);
                        }}

                            > Top Rated Restaurant </button>
                    </div>
                </div>
                <div className="restaurantContainer">
                    {/* restaurant card */}  
                    {
                        listRestaurant.map((restaurant) =>(
                           <RestaurantCard key={restaurant.info.id} restData={restaurant}></RestaurantCard> 
                            )
                    )}


                    {/* <RestaurantCard name="KFC" cuisine="Burger, Fast Food"></RestaurantCard>
                    <RestaurantCard name="Pizza hut" cuisine="Pizza, Fast Food"></RestaurantCard> */}
                    
                    {/* <RestaurantCard restData={restObj} ></RestaurantCard> */}
                    
                {/*                    
                    <RestaurantCard restData={restList[0]} ></RestaurantCard>
                    <RestaurantCard restData={restList[1]} ></RestaurantCard>
                    <RestaurantCard restData={restList[2]} ></RestaurantCard>
                    <RestaurantCard restData={restList[3]} ></RestaurantCard>
                    <RestaurantCard restData={restList[4]} ></RestaurantCard>
                    <RestaurantCard restData={restList[5]} ></RestaurantCard>
                    <RestaurantCard restData={restList[6]} ></RestaurantCard> */}

                   

                </div>
            </div>
  )
}


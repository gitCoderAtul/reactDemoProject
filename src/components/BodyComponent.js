import { useEffect, useState } from "react";
import RestaurantCard, { withDiscountLabel, withDiscountLabel } from "./RestaurantCard";
import restList from "../utils/mockData";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import LocationContext from "../utils/LocationContext";
 
export default function BodyComponent() {
  
console.log('location context', LocationContext);
  //
  //It maintained the state of component or state of function or state of the variable
  // local stater variable - super powerful variable
  const [searchText, setSearchText] = useState("");
const [filterRestaurant,setFilterRestaurant] = useState([])
  const [listRestaurant, setListRestaurant] = useState([]); 
  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard)
   
//whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  
useEffect(() => {
    console.log('useEffect called 2nd so over here we fetch the data');
    fetchData();
},[])

const fetchData = async () =>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2467218&lng=72.9759713&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //optional chaining
    setListRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}
console.log('body render 1st');

const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1> Looks like you're offline !! Please check your internet connection</h1>;

//conditional rendering
if(listRestaurant.length == 0){
    return(
        <ShimmerComponent></ShimmerComponent>
    )
}

//ternary operator
return listRestaurant.length == 0 ? (<ShimmerComponent></ShimmerComponent>) : (
//   return (
    <div className="body flex flex-col flex-wrap mx-auto max-w-[1280px]">
      <div className="search flex  my-5">
        <input className="border border-solid border-gray-400 rounded-[5px]"
          type="text"
          placeholder="Search Box"
          value={searchText}
          onChange={(ev)=>{
            setSearchText(ev.target.value)
          }}
          
        />
        <button onClick={()=>{
            //filter list update
            console.log('click',searchText, setSearchText);
            console.log(listRestaurant); 
            const filteredRestaurant = listRestaurant.filter((res) =>  
              // console.log('value of res ',res?.info?.name?.includes(searchText) ),
              res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
               
            )
             console.log(filteredRestaurant);
             setFilterRestaurant(filteredRestaurant);

        }}> Search </button> {searchText}
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              // console.log(listRestaurant);
              const filteredList = listRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              console.log("button click");
              console.log(filteredList);
              setFilterRestaurant(filteredList);
            }}
          >
            {" "}
            Top Rated Restaurant{" "}  
          </button>
        </div>
      </div>
      <div className="restaurantContainer flex flex-wrap">
        {/* restaurant card */}
        {filterRestaurant.map((restaurant) => (
          <Link to={'/restaurants/'+ restaurant.info.id} key={restaurant.info.id}  className="res-card flex w-[24%] max-lg:w-[49%] max-sm:w-[99%] border border-solid border-gray-200 rounded-sm m-1 hover:cursor-pointer" > 
          {/* discount card */}
          { 
              (restaurant.info.aggregatedDiscountInfoV3) ?
               ( <RestaurantCardDiscount restData={restaurant}></RestaurantCardDiscount>) : (<RestaurantCard 
                  restData={restaurant} ></RestaurantCard>)   
          }
          
          {/* <RestaurantCard 
                  restData={restaurant} ></RestaurantCard> */}
          </Link>
        ))} 
      </div>
    </div>
  );
}

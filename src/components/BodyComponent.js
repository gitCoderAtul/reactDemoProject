import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";

export default function BodyComponent() {
  //
  //It maintained the state of component or state of function or state of the variable
  // local stater variable - super powerful variable
  const [searchText, setSearchText] = useState("");
const [filterRestaurant,setFilterRestaurant] = useState([])
  const [listRestaurant, setListRestaurant] = useState([]); 
   
//whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  
useEffect(() => {
    console.log('useEffect called 2nd so over here we fetch the data');
    fetchData();
},[])

const fetchData = async () =>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2467218&lng=72.9759713&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log(json);
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    //optional chaining
    setListRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}
console.log('body render 1st');

//conditional rendering
if(listRestaurant.length == 0){
    return(
        <ShimmerComponent></ShimmerComponent>
    )
}

//ternary operator
return listRestaurant.length == 0 ? (<ShimmerComponent></ShimmerComponent>) : (
//   return (
    <div className="body">
      <div className="search">
        <input
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
      <div className="restaurantContainer">
        {/* restaurant card */}
        {filterRestaurant.map((restaurant) => (
          <Link to={'/restaurants/'+ restaurant.info.id} key={restaurant.info.id}  className="res-card" > 
          <RestaurantCard 
            restData={restaurant}
          ></RestaurantCard>
          </Link>
        ))} 
      </div>
    </div>
  );
}

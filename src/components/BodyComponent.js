import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import ShimmerComponent from "./ShimmerComponent";

export default function BodyComponent() {
  //
  //It maintained the state of component or state of function or state of the variable
  // local stater variable - super powerful variable
  const [searchText, setSearchText] = useState("");
const [filterRestaurant,setFilterRestaurant] = useState([])
  const [listRestaurant, setListRestaurant] = useState([]);
 

 /* const searchHandleChange = function (event) {
    console.log(event.target.value);
    if(searchText != ''){
      setSearchText(event.target.value);
      console.log(setSearchText);
    }else{
      
    }
    
  };
  const searchHandleClick = function (event) {
    const filteredList = listRestaurant.filter((res) =>
      res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    console.log("button click");
    console.log(filteredList);
    setListRestaurant(filteredList); 
    //    if(searchText == ''){
    //     console.log(empty);
    //     const restList = listRestaurant.map((res) =>
    //         console.log(res)
    //     )
    //       setListRestaurant(restList);
    //    }else{
    //     const filteredList = listRestaurant.filter((res) =>
    //         res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    //         )
    //     console.log("button click");
    //     console.log(filteredList);
    //     setListRestaurant(filteredList);
    //    }
  };
*/
   
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
          <RestaurantCard
            key={restaurant.info.id}
            restData={restaurant}
          ></RestaurantCard>
        ))}

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
  );
}

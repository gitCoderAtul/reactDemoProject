import { useState } from "react";
import ItemsList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex}) =>{
    // console.log('itemCards', data);
    
    const handClick = (ev)=>{
        console.log(ev);
        setShowIndex();
    }

    //this is uncontrol component bcoz we cannot handle when one is div is visible and other div is hide
    // how we can do this accordion - using state lift we can do this
   /* const [showItems,setShowItems] = useState(false);
    const handClick = (ev)=>{
        console.log('click',ev);
        // setShowItems(!showItems);
        if(showItems == false){
            setShowItems(true);
        }else{
            setShowItems(false);
        }
        // {showItems ? setShowItems(true) : setShowItems(false)}  
    } */
    return(
        <div className="max-w-full mx-auto my-4 p-4 bg-gray-50 shadow-lg flex flex-col ">
            <div className="flex justify-between cursor-pointer" onClick={handClick}>
                <h4 className="font-xxl font-semibold">
                    {data.title} ({data.itemCards.length}) 
                </h4>
                <span>
                Down Arrow
                </span>
            </div>
            <div>
                { showItems && <ItemsList items={data.itemCards}></ItemsList>}
            </div>
        </div>
    )
}
export default RestaurantCategory;
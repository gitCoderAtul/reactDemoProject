import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../Redux/reducer/cartSlice";
 

const ItemsList = ({items}) =>{
    console.log('item list',items);
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    return(
        <div>
            {
                items.map((item)=>  (
                    <div className="flex justify-between my-4 py-5 border-t border-solid border-gray-200" key={item.card.info.id}>
                            <div className="px-5">                            
                                <h5 className="font-semibold text-md py-1"> {item.card.info.name} 
                                <span className="text-gray-600"> ₹ { item.card.info.price ? 
                                (item.card.info.price/100) :
                                 (item.card.info.defaultPrice/100)} 
                                 </span> </h5>
                                {/* <p className="text-gray-600"> ₹ {(item.card.info.price/100) || item.card.info.defaultPrice} </p>  */}
                                <p className="text-gray-500 py-5"> {item.card.info.description || ('An alternate fun way to enjoy food.')}</p>
                            </div>
                        <div className="shadow-md relative">  
                              <img className="min-w-[160px] h-[120px] rounded-md object-cover" src={(CDN_URL+ undefined) ? (CDN_URL+ item.card.info.imageId) : ('https://www.flaticon.com/free-icon/bibimbap_2276931?term=food&page=1&position=6&origin=tag&related_id=2276931')}></img>
                                <button className=" w-[100px] py-2 px-4 bg-white shadow absolute -bottom-4 rounded-md -translate-x-2/4 left-2/4 " onClick={() => {handleAddItem(item)}}>ADD + </button>
                        </div>
                        </div>

                // <div>{item.card.info.name}
                //         item
                //     </div>
                    )
                 )
            }
        </div>
    )
} 
export default ItemsList;
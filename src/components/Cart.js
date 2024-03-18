import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemList";
import { clearCart } from "../Redux/reducer/cartSlice";

const Cart = () =>{  
    //write this way. you can say like that you subscribeing to the store
    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items;

    // you are selecting specific portion of the store
    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);
    const dispatch = useDispatch();
    handleClear =() =>{
        dispatch(clearCart())
    }
return(
    <div className="body flex flex-col flex-wrap mx-auto max-w-[1280px]"> 
           <div className="flex justify-between items-center"> 
            <h1 className="text-center p-4 font-bold text-2xl"> CART </h1>
            <button className="py-2 px-4 bg-orange-400 rounded-md text-white" onClick={ handleClear }> Clear Cart </button>
           </div>
           {cartItems.length === 0 && (
                <h1> Cart is empty. Add Items to the cart!</h1>
            ) 
           }
           <ItemsList items={cartItems}></ItemsList> 
      
    </div>
)
}
export default Cart;
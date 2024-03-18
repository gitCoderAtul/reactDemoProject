import React, { Suspense, lazy, useContext, useEffect, useState } from "react"; 
import ReactDOM from 'react-dom/client';
import HeaderComponent from "./components/HeaderComponent"; 
import BodyComponent from "./components/BodyComponent";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import { ErrorComponent } from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appstore from "./Redux/store.js";
import Cart from "./components/Cart.js";
 
// import GroceryComponent from "./components/GroceryComponent";
   
    //internal css - create the object to call internal css
    // const styleCard = {
    //     backgroundColor: "#fdfdfd",
    //     borderRadius:"5px"
    // } 
    // single data example
    // const restObj = {
    //     "info": {
    //         "id": "32133",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    //         "locality": "Thane West",
    //         "areaName": "Thane West",
    //         "costForTwo": "₹300 for two",
    //         "cuisines": [
    //           "Pizzas", "Burger"
    //         ],
    //         "avgRating": 4,
    //         "parentId": "721",
    //         "avgRatingString": "4.0",
    //         "totalRatingsString": "5K+",
    //         "sla": {
    //           "deliveryTime": 28,
    //           "lastMileTravel": 1.5,
    //           "serviceability": "SERVICEABLE",
    //           "slaString": "25-30 mins",
    //           "lastMileTravelString": "1.5 km",
    //           "iconType": "ICON_TYPE_EMPTY"
    //         },
    //         "availability": {
    //           "nextCloseTime": "2024-02-22 23:00:00",
    //           "opened": true
    //         },
    //         "badges": {
              
    //         },
    //         "isOpen": true,
    //         "type": "F",
    //         "badgesV2": {
    //           "entityBadges": {
    //             "imageBased": {
                  
    //             },
    //             "textBased": {
                  
    //             },
    //             "textExtendedBadges": {
                  
    //             }
    //           }
    //         },
    //         "aggregatedDiscountInfoV3": {
    //           "header": "50% OFF",
    //           "subHeader": "UPTO ₹100"
    //         },
    //         "orderabilityCommunication": {
    //           "title": {
                
    //           },
    //           "subTitle": {
                
    //           },
    //           "message": {
                
    //           },
    //           "customIcon": {
                
    //           }
    //         },
    //         "differentiatedUi": {
    //           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //           "differentiatedUiMediaDetails": {
    //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //             "lottie": {
                  
    //             },
    //             "video": {
                  
    //             }
    //           }
    //         },
    //         "reviewsSummary": {
              
    //         },
    //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //         "restaurantOfferPresentationInfo": {
              
    //         }
    //       }
    // }
 
   const AppLayout = () =>{
    const [userName,setUserName] = useState(); 
useEffect(()=>{
    //make an api call and send username and password
    const data = {
        name:'Atul Khule'
    };
    setUserName(data.name)
},[])
    return(
        <Provider store={appstore}>
        <UserContext.Provider  value={{loggedInUser: userName }}>
        <div className="app">
            <HeaderComponent></HeaderComponent> 
            <Outlet></Outlet>
        </div>
        </UserContext.Provider>
        </Provider>
    )
   }

   const Grocery = lazy(()=> import('./components/GroceryComponent.js'))

   const router = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout></AppLayout>,
        children:[
            {
                path:'/',
                element:<BodyComponent></BodyComponent>
            },
            {
                path:'/about',
                element:<AboutComponent></AboutComponent>
            },
            {
                path:'/contact',
                element: <ContactComponent></ContactComponent>
            },
            {
                path:'/cart',
                element: <Cart></Cart>
            },
            {
                path:'/grocery',
                element: <Suspense fallback={<h1>Loading ....</h1>}> <Grocery/> </Suspense>
            },
            {
                path:'/restaurants/:resId',
                element: <RestaurantMenu></RestaurantMenu>
            }
        ],
        errorElement:<ErrorComponent></ErrorComponent>
    }
   ])


//    const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<BodyComponent></BodyComponent>
//     },  {
//         path:'/about',
//         element:<AboutComponent></AboutComponent>
//     },{
//         path:'/contact',
//         element:<ContactComponent></ContactComponent>
//     }
//    ]);
   
    

    const root = ReactDOM.createRoot(document.getElementById('root'));
    // console.log(root);

    // root.render(<AppLayout />)
    root.render(<RouterProvider router={router}></RouterProvider>)
 
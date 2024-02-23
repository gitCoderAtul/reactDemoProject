import React from "react"; 
import ReactDOM from 'react-dom/client';
import HeaderComponent from "./components/HeaderComponent"; 
import BodyComponent from "./components/BodyComponent";
  

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
    return(
        <div className="app">
            <HeaderComponent></HeaderComponent>
            <BodyComponent></BodyComponent>
        </div>
    )
   }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    // console.log(root);

    root.render(<AppLayout />)
 
import React from "react"; 
import ReactDOM from 'react-dom/client' 



   const HeaderComponent = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-clipart/20230520/original/pngtree-burger-logo-png-image_9166715.png"></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>    
     )
    }

    //internal css - create the object to call internal css
    // const styleCard = {
    //     backgroundColor: "#fdfdfd",
    //     borderRadius:"5px"
    // }

    const RestaurantCard = (props) =>{
        // const {name,cuisine} = props;
        const {restData} = props;
        return( 
            // <div className="res-card" style={styleCard}>
            <div className="res-card" style={{ backgroundColor: "#fdfdfd", borderRadius:"5px"}}>
                <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restData.info.cloudinaryImageId } alt=""></img>
                <h3> {restData.info.name}</h3>
                <h4>  {restData.info.cuisines.join(" , ")}</h4>
                <h4> Avg Rating : {restData.info.avgRatingString} | <span> {restData.info.sla.slaString} </span></h4>
                <h4> {restData.info.costForTwo} </h4>
            </div>
        )
    }
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

    const restList = [
        {
            "info": {
              "id": "32133",
              "name": "Pizza Hut",
              "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
              "locality": "Thane West",
              "areaName": "Thane West",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Pizzas"
              ],
              "avgRating": 4,
              "parentId": "721",
              "avgRatingString": "4.0",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-02-22 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-32f049af-9f87-4e7e-bf56-63cad4d063b7"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/pizza-hut-thane-west-mumbai-32133",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "624736",
              "name": "Wow! Momo",
              "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
              "locality": "Lodha Amara",
              "areaName": "Kolshet",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 3.9,
              "parentId": "1776",
              "avgRatingString": "3.9",
              "totalRatingsString": "500+",
              "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-02-22 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-32f049af-9f87-4e7e-bf56-63cad4d063b7"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/wow-momo-lodha-amara-kolshet-mumbai-624736",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "692094",
              "name": "BOOM Sandwich - Sub of India",
              "cloudinaryImageId": "96aaf72372ad1b0297b7cc304ced7e33",
              "locality": "Hiranandani Thane",
              "areaName": "Thane West",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Snacks",
                "Indian",
                "Desserts"
              ],
              "avgRating": 4.4,
              "parentId": "401169",
              "avgRatingString": "4.4",
              "totalRatingsString": "50+",
              "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "1.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-02-23 02:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹129"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-32f049af-9f87-4e7e-bf56-63cad4d063b7"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/boom-sandwich-sub-of-india-hiranandani-thane-thane-west-mumbai-692094",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "783180",
              "name": "Chicago pizza",
              "cloudinaryImageId": "80f040545552605e33eba09f8fa30be9",
              "locality": "Amrapali Arcade",
              "areaName": "Thane",
              "costForTwo": "₹450 for two",
              "cuisines": [
                "Fast Food",
                "Pizzas"
              ],
              "avgRating": 3.9,
              "parentId": "60277",
              "avgRatingString": "3.9",
              "totalRatingsString": "20+",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-02-22 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-32f049af-9f87-4e7e-bf56-63cad4d063b7"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/chicago-pizza-amrapali-arcade-thane-mumbai-783180",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "228368",
              "name": "Dabba Garam (Homestyle,Combo, Thali & More)",
              "cloudinaryImageId": "yos6iis0esznbameudd6",
              "locality": "Majiwada",
              "areaName": "Thane West",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Home Food",
                "North Indian",
                "Thalis"
              ],
              "avgRating": 4.5,
              "veg": true,
              "parentId": "67608",
              "avgRatingString": "4.5",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-02-22 22:50:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ],
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-32f049af-9f87-4e7e-bf56-63cad4d063b7"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/dabba-garam-homestyle-combo-thali-and-more-majiwada-thane-west-mumbai-228368",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "131601",
              "name": "McDonald's",
              "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
              "locality": "Opp.Thane Municipal Commissioner Bungalow",
              "areaName": "Thane West",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
              ],
              "avgRating": 4.4,
              "parentId": "630",
              "avgRatingString": "4.4",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 0.3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-02-23 02:45:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-32f049af-9f87-4e7e-bf56-63cad4d063b7"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/mcdonalds-opp-thane-municipal-commissioner-bungalow-thane-west-mumbai-131601",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "552383",
              "name": "Burger King",
              "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
              "locality": "Hiranandani",
              "areaName": "Thane Hiranandani Estate",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.3,
              "parentId": "166",
              "avgRatingString": "4.3",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 0.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-02-23 03:45:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-32f049af-9f87-4e7e-bf56-63cad4d063b7"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/burger-king-hiranandani-thane-hiranandani-estate-mumbai-552383",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "578579",
              "name": "Bakingo-Cakes & Desserts",
              "cloudinaryImageId": "fa68ac0434f668bba1322abda36570b3",
              "locality": "Kolungade Estate",
              "areaName": "Kolbad Road",
              "costForTwo": "₹299 for two",
              "cuisines": [
                "Bakery",
                "Desserts",
                "Beverages",
                "Snacks"
              ],
              "avgRating": 4.5,
              "parentId": "3818",
              "avgRatingString": "4.5",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 5.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "5.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-02-23 00:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                    "shortDescription": "Perfect Cake Delivery",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                          "shortDescription": "Perfect Cake Delivery"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-32f049af-9f87-4e7e-bf56-63cad4d063b7"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/bakingo-cakes-and-desserts-kolungade-estate-kolbad-road-mumbai-578579",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "39677",
              "name": "KFC",
              "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
              "locality": "The Walk",
              "areaName": "Thane Hiranandani Estate",
              "costForTwo": "₹750 for two",
              "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
              ],
              "avgRating": 4.2,
              "parentId": "547",
              "avgRatingString": "4.2",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-02-23 04:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-32f049af-9f87-4e7e-bf56-63cad4d063b7"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/kfc-the-walk-thane-hiranandani-estate-mumbai-39677",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          }
        ]

//  not using keys (not acceptable) <<<<< index as key <<<<<<<< unique id (best practice)
    const BodyComponent = () =>{
        return(
            <div className="body">
                <div className="search">
                    Search
                </div>
                <div className="restaurantContainer">
                    {/* restaurant card */} 
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

                    {
                        restList.map(restaurant =>
                           <RestaurantCard restData={restaurant}></RestaurantCard> 
                            )
                    }

                </div>
            </div>
        )
    }

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
 
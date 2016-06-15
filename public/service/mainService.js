angular.module('app').factory('mainService', function ($http, $q) {

//   var travelPlanObject=[
//   {
//     "type": "location",
//     "essential": {
//         "noDependencyData": {
//           "cityName": "Bangalore"
//         }
//         ,
//         "modesToSelectTheServices": {
//           "basicServices": ["stay","localTravel"]
//         }
//     },
//     "childServices": {
//       "stay": [
//                 {
//                   "state": "selection",
//                   "requested": {
//                     "location": "Bangalore",
//                     "area": "MadiWala",
//                     "checkinDate": "01/04/2016",
//                     "checkOutDate": "02/04/2016",
//                     "checkinTime": "5:00 AM",
//                     "preferences": "ac",
//                     "rating": ["oneStar","threeStar"],
//                     "nearBy": "5",
//                     "typeOfProperty": "guestHouse",
//                     "stars":["twoStar", "threeStar"],
//                     "amenities":["meetingRooms","swimmingPools"]
//                   },
//                   "selected": {
//                     "image": "public/assets/images/taj1.png",
//                     "name": "JW Mariott",
//                     "rating": "5",
//                     "location": "hotel's exact address",
//                     "roomType": "Deluxe",
//                     "checkinDate": "4/30/2016",
//                     "checkinTime": "2:00 PM",
//                     "checkoutDate": "5/01/2016",
//                     "checkoutTime": "3:00 PM",
//                     "price": "9000 INR",
//                     "comments": "Some useful comment which you may want to convey to the hotel"
//                   }
//                 },
//                 {
//                   "state": "selection",
//                   "requested": {
//                     "location": "Bangalore",
//                     "area": "MadiWala",
//                     "checkinDate": "01/04/2016",
//                     "checkOutDate": "02/04/2016",
//                     "checkinTime": "5:00 AM",
//                     "preferences": "ac",
//                     "rating": ["oneStar","threeStar"],
//                     "nearBy": "5",
//                     "typeOfProperty": "guestHouse",
//                     "stars":["twoStar", "threeStar"],
//                     "amenities":["meetingRooms","swimmingPools"]
//                   },
//                   "selected": {
//                     "image": "public/assets/images/taj1.png",
//                     "name": "JW Mariott",
//                     "rating": "5",
//                     "location": "hotel's exact address",
//                     "roomType": "Deluxe",
//                     "checkinDate": "4/30/2016",
//                     "checkinTime": "2:00 PM",
//                     "checkoutDate": "5/01/2016",
//                     "checkoutTime": "3:00 PM",
//                     "price": "9000 INR",
//                     "comments": "Some useful comment which you may want to convey to the hotel"
//                   }
//                 }
//               ],
//       "localTravel": [
//           {
//             "state": "selection",
//             "selected":{
//
//                 "source": "Rajiv nagar Chowk",
//                 "destination": "New Delhi IGI Airport",
//                 "type": "localBus",
//                 "pickupDate": "4/30/2016",
//                 "pickupTime": "10:00 AM",
//                 "dropDate": "4/30/2016",
//                 "dropTime": "12:00 PM",
//                 "localBus": {
//                   "image": "public/assets/images/localBus.png",
//                   "companyName": "red bus",
//                   "busNumber": "AB 327014",
//                   "busType": "AC bus",
//                   "seatsType": "sleeper",
//                   "price": "100 INR"
//                 }
//             }
//           },
//           {
//             "state": "selection",
//             "selected":{
//
//                 "source": "Rajiv nagar Chowk",
//                 "destination": "New Delhi IGI Airport",
//                 "type": "cab",
//                 "pickupDate": "4/30/2016",
//                 "pickupTime": "10:00 AM",
//                 "dropDate": "4/30/2016",
//                 "dropTime": "12:00 PM",
//                 "cab": {
//                   "image": "public/assets/images/ola.png",
//                   "companyName": "Uber",
//                   "cabNumber": "DL AJ 5034",
//                   "driverDetails": {
//                     "name": "Job Elton"
//                   },
//                   "estimatedPrice": "800 INR",
//                   "cabType": "sedan"
//                 }
//             }
//           }
//       ]
//     }
//   },
//   {
//     "type": "transit",
//     "essential": {
//       "noDependencyData": {
//           "travelStartDate":"02/04/2016"
//         },
//       "modesToSelectTheServices": {
//         "mode": "flight",
//         "otherAddOnServices": ["visa","translator"]
//       }
//     }
//     ,
//     "childServices": {
//       "flight": {
//         "state": "selection",
//         "selected": {
//           "image":"public/assets/images/indigo.png",
//           "companyName": "Air Costa",
//           "flightID": "AC2456",
//           "seatNumber": "45H",
//           "sourceAirport":"koramangala airport",
//           "destinationAirport":"delhi airport",
//           "price": "876547 INR",
//           "travelStartDate":"02/04/2016",
//           "preferences": {
//             "class": "Bussiness",
//             "Nonstop": "true",
//             "meals": "Non Veg",
//             "extraBaggage": "14 Kg"
//           },
//           "travelStartTime": "2:00 AM",
//           "travelEndDate": "5/2/2016",
//           "travelEndTime": "3:00 AM"
//         }
//       }
//     }
//   },
//   {
//     "type": "location",
//     "essential": {
//       "noDependencyData": {
//         "cityName": "Bangalore"
//       }
//       ,
//       "modesToSelectTheServices": {
//         "basicServices": ["stay", "localTravel"]
//       }
//
//     }
//     ,
//     "childServices": {
//       "stay": [
//                 {
//                   "state": "selection",
//                   "requested": {
//                     "location": "Bangalore",
//                     "area": "MadiWala",
//                     "checkinDate": "01/04/2016",
//                     "checkOutDate": "02/04/2016",
//                     "checkinTime": "5:00 AM",
//                     "preferences": "ac",
//                     "rating": ["oneStar","threeStar"],
//                     "nearBy": "5",
//                     "typeOfProperty": "guestHouse",
//                     "stars":["twoStar", "threeStar"],
//                     "amenities":["meetingRooms","swimmingPools"]
//                   },
//                   "selected": {
//                     "image": "public/assets/images/taj1.png",
//                     "name": "JW Mariott",
//                     "rating": "5",
//                     "location": "hotel's exact address",
//                     "roomType": "Deluxe",
//                     "checkinDate": "4/30/2016",
//                     "checkinTime": "2:00 PM",
//                     "checkoutDate": "5/01/2016",
//                     "checkoutTime": "3:00 PM",
//                     "price": "9000 INR",
//                     "comments": "Some useful comment which you may want to convey to the hotel"
//                   }
//                 }
//               ],
//       "localTravel": [
//           {
//             "state": "selection",
//             "selected":{
//
//                 "source": "Rajiv nagar Chowk",
//                 "destination": "New Delhi IGI Airport",
//                 "type": "cab",
//                 "pickupDate": "4/30/2016",
//                 "pickupTime": "10:00 AM",
//                 "dropDate": "4/30/2016",
//                 "dropTime": "12:00 PM",
//                 "cab": {
//                   "image": "public/assets/images/ola.png",
//                   "companyName": "Uber",
//                   "cabNumber": "DL AJ 5034",
//                   "driverDetails": {
//                     "name": "Job Elton"
//                   }
//                   ,
//                   "estimatedPrice": "800 INR",
//                   "cabType": "sedan"
//                 }
//             }
//           }
//       ]
//     }
//   },
//   {
//     "type": "transit",
//     "essential": {
//       "noDependencyData": {
//         "travelStartDate":"02/04/2016"
//       },
//       "modesToSelectTheServices": {
//         "mode": "train",
//         "otherAddOnServices": ["visa","translator"]
//       }
//     }
//     ,
//     "childServices": {
//       "train": {
//         "state": "selection",
//         "selected": {
//           "image":"public/assets/images/rail.png",
//           "companyName": "Air Costa",
//           "trainNumber": "AC2456",
//           "seatNumber": "45H",
//           "coachNumber": "7A",
//           "sourceStation":"koramangala railway station",
//           "destinationStation":"new delhi railway station",
//           "price": "876547 INR",
//           "travelStartDate":"02/04/2016",
//           "preferences": {
//             "class": "2 AC"
//           },
//           "travelStartTime": "2:00 AM",
//           "travelEndDate": "5/2/2016",
//           "travelEndTime": "3:00 AM"
//         }
//       }
//     }
//   },
//   {
//     "type": "location",
//     "cityName": "Bangalore",
//     "basicServices": "",
//     "childServices": {
//       "stay": [
//                 {
//                   "state": "selection",
//                   "requested": {
//                     "location": "Bangalore",
//                     "area": "MadiWala",
//                     "checkinDate": "01/04/2016",
//                     "checkOutDate": "02/04/2016",
//                     "checkinTime": "5:00 AM",
//                     "preferences": "ac",
//                     "rating": ["oneStar","threeStar"],
//                     "nearBy": "5",
//                     "typeOfProperty": "guestHouse",
//                     "stars":["twoStar", "threeStar"],
//                     "amenities":["meetingRooms","swimmingPools"]
//                   },
//                   "selected": {
//                     "image": "public/assets/images/taj1.png",
//                     "name": "JW Mariott",
//                     "rating": "5",
//                     "location": "hotel's exact address",
//                     "roomType": "Deluxe",
//                     "checkinDate": "4/30/2016",
//                     "checkinTime": "2:00 PM",
//                     "checkoutDate": "5/01/2016",
//                     "checkoutTime": "3:00 PM",
//                     "price": "9000 INR",
//                     "comments": "Some useful comment which you may want to convey to the hotel"
//                   }
//                 }
//               ],
//       "localTravel": [
//           {
//             "state": "selection",
//             "selected":{
//
//                 "source": "Rajiv nagar Chowk",
//                 "destination": "New Delhi IGI Airport",
//                 "type": "cab",
//                 "pickupDate": "4/30/2016",
//                 "pickupTime": "10:00 AM",
//                 "dropDate": "4/30/2016",
//                 "dropTime": "12:00 PM",
//                 "cab": {
//                   "image": "public/assets/images/ola.png",
//                   "companyName": "Uber",
//                   "cabNumber": "DL AJ 5034",
//                   "driverDetails": {
//                     "name": "Job Elton"
//                   }
//                   ,
//                   "estimatedPrice": "800 INR",
//                   "cabType": "sedan"
//                 }
//             }
//           }
//       ]
//     }
//   },
//   {
//     "type": "transit",
//     "travelStartDate":"02/04/2016",
//     "mode": "bus",
//     "otherAddOnServices": ["visa","translator"],
//     "childServices": {
//       "bus": {
//         "state": "selection",
//         "selected": {
//           "image":"public/assets/images/bus.png",
//           "companyName": "Air Costa",
//           "busNumber": "AC2456",
//           "seatNumber": "45H",
//           "sourceBusStop":"koramangala bus stop",
//           "destinationBusStop":"delhi bus stop",
//           "price": "876547 INR",
//           "travelStartDate":"02/04/2016",
//           "preferences": {
//             "class": "Deluxe AC",
//             "seatType": "sleeper"
//           },
//           "travelStartTime": "2:00 AM",
//           "travelEndDate": "5/2/2016",
//           "travelEndTime": "3:00 AM"
//         }
//       }
//     }
//   },
//   {
//     "type": "location",
//     "cityName": "Bangalore",
//     "basicServices": "",
//     "childServices": {
//       "stay": [
//                 {
//                   "state": "selection",
//                   "requested": {
//                     "location": "Bangalore",
//                     "area": "MadiWala",
//                     "checkinDate": "01/04/2016",
//                     "checkOutDate": "02/04/2016",
//                     "checkinTime": "5:00 AM",
//                     "preferences": "ac",
//                     "rating": ["oneStar","threeStar"],
//                     "nearBy": "5",
//                     "typeOfProperty": "guestHouse",
//                     "stars":["twoStar", "threeStar"],
//                     "amenities":["meetingRooms","swimmingPools"]
//                   },
//                   "selected": {
//                     "image": "public/assets/images/taj1.png",
//                     "name": "JW Mariott",
//                     "rating": "5",
//                     "location": "hotel's exact address",
//                     "roomType": "Deluxe",
//                     "checkinDate": "4/30/2016",
//                     "checkinTime": "2:00 PM",
//                     "checkoutDate": "5/01/2016",
//                     "checkoutTime": "3:00 PM",
//                     "price": "9000 INR",
//                     "comments": "Some useful comment which you may want to convey to the hotel"
//                   }
//                 }
//               ],
//       "localTravel": [
//           {
//             "state": "selection",
//             "selected":{
//
//                 "source": "Rajiv nagar Chowk",
//                 "destination": "New Delhi IGI Airport",
//                 "type": "cab",
//                 "pickupDate": "4/30/2016",
//                 "pickupTime": "10:00 AM",
//                 "dropDate": "4/30/2016",
//                 "dropTime": "12:00 PM",
//                 "cab": {
//                   "image": "public/assets/images/ola.png",
//                   "companyName": "Uber",
//                   "cabNumber": "DL AJ 5034",
//                   "driverDetails": {
//                     "name": "Job Elton"
//                   }
//                   ,
//                   "estimatedPrice": "800 INR",
//                   "cabType": "sedan"
//                 }
//             }
//           }
//       ]
//     }
//   }
// ]

   var travelPlanObject = [
      {
         "type": "location",
         "essential": {
            "noDependencyData": {
               "location": "Bangalore"
            }
            ,
            "modesToSelectTheServices": {
               "basicServices": ["stay", "localTravel"]
            }
         },
         "childServices": {
            "stay": {
              "state":"",
              "individualChildServices":[

               {
                  "state": "request",
                  "requested": {
                     "location": "Bangalore",
                     "area": "MadiWala",
                     "checkinDate": "01/04/2016",
                     "checkinDate": "02/04/2016",
                     "checkinTime": "5:00 AM",
                     "checkoutTime": "7:00 AM",
                     "preferences": "ac",
                     "rating": ["oneStar", "threeStar"],
                     "nearBy": "5",
                     "typeOfProperty": "guestHouse",
                     "stars": ["twoStar", "threeStar"],
                     "amenities": ["meetingRooms", "swimmingPools"]
                  },
                  "selected": {
                     "image": "public/assets/images/taj1.png",
                     "name": "JW Mariott",
                     "rating": "5",
                     "location": "hotel's exact address",
                     "roomType": "Deluxe",
                     "checkinDate": "4/30/2016",
                     "checkinTime": "2:00 PM",
                     "checkoutDate": "5/01/2016",
                     "checkoutTime": "3:00 PM",
                     "price": "9000 INR",
                     "comments": "Some useful comment which you may want to convey to the hotel"
                  }
               },
               {
                  "state": "request",
                  "requested": {
                     "location": "Bangalore",
                     "area": "MadiWala",
                     "checkinDate": "01/04/2016",
                     "checkOutDate": "02/04/2016",
                     "checkinTime": "5:00 AM",
                     "preferences": "ac",
                     "rating": ["oneStar", "threeStar"],
                     "nearBy": "5",
                     "typeOfProperty": "guestHouse",
                     "stars": ["twoStar", "threeStar"],
                     "amenities": ["meetingRooms", "swimmingPools"]
                  },
                  "selected": {
                     "image": "public/assets/images/taj1.png",
                     "name": "JW Mariott",
                     "rating": "5",
                     "location": "hotel's exact address",
                     "roomType": "Deluxe",
                     "checkinDate": "4/30/2016",
                     "checkinTime": "2:00 PM",
                     "checkoutDate": "5/01/2016",
                     "checkoutTime": "3:00 PM",
                     "price": "9000 INR",
                     "comments": "Some useful comment which you may want to convey to the hotel"
                  }
               }
            ]},
            "localTravel": {
              "state":"",
              "individualChildServices":[
               {
                  "state": "select",
                  "requested": {},
                  "selected": {
                     "source": "Rajiv nagar Chowk",
                     "destination": "New Delhi IGI Airport",
                     "type": "localBus",
                     "pickupDate": "4/30/2016",
                     "pickupTime": "10:00 AM",
                     "dropDate": "4/30/2016",
                     "dropTime": "12:00 PM",
                     "localBus": {
                        "image": "public/assets/images/localBus.png",
                        "companyName": "red bus",
                        "busNumber": "AB 327014",
                        "busType": "AC bus",
                        "seatsType": "sleeper",
                        "price": "100 INR"
                     }
                  }
               },
               {
                  "state": "request",
                  "requested": {},
                  "selected": {

                     "source": "Rajiv nagar Chowk",
                     "destination": "New Delhi IGI Airport",
                     "type": "cab",
                     "pickupDate": "4/30/2016",
                     "pickupTime": "10:00 AM",
                     "dropDate": "4/30/2016",
                     "dropTime": "12:00 PM",
                     "cab": {
                        "image": "public/assets/images/ola.png",
                        "companyName": "Uber",
                        "cabNumber": "DL AJ 5034",
                        "driverDetails": {
                           "name": "Job Elton"
                        },
                        "estimatedPrice": "800 INR",
                        "cabType": "sedan"
                     }
                  }
               }
            ]}
         }
      },
      {
         "type": "transit",
         "essential": {
            "noDependencyData": {
               "travelStartDate": "02/04/2016"
            },
            "modesToSelectTheServices": {
               "mode": "flight",
               "otherAddOnServices": ["visa", "translator"]
            }
         }
         ,
         "childServices": {
            "flight": {
               "state": "select",
               "requested": {},
               "selected": {
                  "image": "public/assets/images/indigo.png",
                  "companyName": "Air Costa",
                  "flightID": "AC2456",
                  "seatNumber": "45H",
                  "sourceAirport": "koramangala airport",
                  "destinationAirport": "delhi airport",
                  "price": "876547 INR",
                  "travelStartDate": "02/04/2016",
                  "preferences": {
                     "class": "Bussiness",
                     "Nonstop": "true",
                     "meals": "Non Veg",
                     "extraBaggage": "14 Kg"
                  },
                  "travelStartTime": "2:00 AM",
                  "travelEndDate": "5/2/2016",
                  "travelEndTime": "3:00 AM"
               }
            }
         }
      },
      {
         "type": "location",
         "essential": {
            "noDependencyData": {
               "location": "Pune"
            }
            ,
            "modesToSelectTheServices": {
               "basicServices": ["stay", "localTravel"]
            }

         }
         ,
         "childServices": {
            "stay":{
              "state":"",
              "individualChildServices":[
               {
                  "state": "select",
                  "requested": {
                     "location": "Bangalore",
                     "area": "MadiWala",
                     "checkinDate": "01/04/2016",
                     "checkOutDate": "02/04/2016",
                     "checkinTime": "5:00 AM",
                     "preferences": "ac",
                     "rating": ["oneStar", "threeStar"],
                     "nearBy": "5",
                     "typeOfProperty": "guestHouse",
                     "stars": ["twoStar", "threeStar"],
                     "amenities": ["meetingRooms", "swimmingPools"]
                  },
                  "selected": {
                     "image": "public/assets/images/taj1.png",
                     "name": "JW Mariott",
                     "rating": "5",
                     "location": "hotel's exact address",
                     "roomType": "Deluxe",
                     "checkinDate": "4/30/2016",
                     "checkinTime": "2:00 PM",
                     "checkoutDate": "5/01/2016",
                     "checkoutTime": "3:00 PM",
                     "price": "9000 INR",
                     "comments": "Some useful comment which you may want to convey to the hotel"
                  }
               }
            ]},
            "localTravel":{
              "state":"",
              "individualChildServices":[
               {
                  "state": "select",
                  "requested": {},
                  "selected": {

                     "source": "Rajiv nagar Chowk",
                     "destination": "New Delhi IGI Airport",
                     "type": "cab",
                     "pickupDate": "4/30/2016",
                     "pickupTime": "10:00 AM",
                     "dropDate": "4/30/2016",
                     "dropTime": "12:00 PM",
                     "cab": {
                        "image": "public/assets/images/ola.png",
                        "companyName": "Uber",
                        "cabNumber": "DL AJ 5034",
                        "driverDetails": {
                           "name": "Job Elton"
                        }
                        ,
                        "estimatedPrice": "800 INR",
                        "cabType": "sedan"
                     }
                  }
               }
            ]}
         }
      }
   ]





   var travelPlanObject1 = [{
	"type": "location",
	"essential": {
		"noDependencyData": {
		},
		"modesToSelectTheServices": {
		}
	},
	"childServices": {
		"stay": {
			"state": "preInitial",
			"individualChildServices": []
		},
		"localTravel": {
			"state": "preInitial",
			"individualChildServices": []
		}

	}
}, {
	"type": "transit",
	"essential": {
		"noDependencyData": {
			"travelStartDate": "02/04/2016"
		},
		"modesToSelectTheServices": {
			"mode": "flight",
			"otherAddOnServices": ["visa", "translator"]
		}
	},
	"childServices": {
		"mode": {
      "state": "preInitial",
			"individualChildServices": []
    }
	}
}, {
	"type": "location",
	"essential": {
		"noDependencyData": {
		},
		"modesToSelectTheServices": {
		}

	},
	"childServices": {
		"stay": {
			"state": "preInitial",
			"individualChildServices": [

			]
		},
		"localTravel": {
			"state": "preInitial",
			"individualChildServices": [

			]
		}
	}
}];

   var travelPlanObjectInitial = [
      // {
      //   "essential": {
      //   },
      //   "childServices": {},
      //   "type": "location",
      //   "state": "initial"
      // },
      // {
      //   "essential": {
      //   },
      //   "childServices": {},
      //   "type": "transit",
      //   "state": "initial"
      // },
      // {
      //   "essential": {
      //   },
      //   "childServices": {},
      //   "type": "location",
      //   "state": "initial"
      // }

   ];
   var elementMasters = {};
   var nodeMaster = {};
   var edgeMaster = {};
   // var someData;
   var subFactories = {

      travelPlanElementInitializer: function (elementType) {

         travelPlanObjectInitial.push({
            "type": elementType,
                "essential": {
                  "noDependencyData": {},
                  "modesToSelectTheServices": {

                  }
                },
            "childServices": {},
            "state": "initial"
         });
         console.log("I am inside travelPlanElementInitializer");
      },

      travelPlanInitializer: function (indexForTravelMode) {
         travelPlanObjectInitial = [];
         var modeOfTravel = ["oneWay", "twoWay", "multiWay"];
         console.log("I am in travelPlanInitializer");
         console.log(indexForTravelMode);
         var i = 0;
         if (indexForTravelMode >= 0) {
            while (i <= indexForTravelMode) {
               console.log("I am inside loop", i, indexForTravelMode);
               subFactories.travelPlanElementInitializer('location');
               subFactories.travelPlanElementInitializer('transit');
               i += 1;
            }
            subFactories.travelPlanElementInitializer('location');
            return true;
         }
         else {
            return false;
         }
      },

      getTravelPlanObject: function () {
         return travelPlanObject1;
      },
      getTravelPlanObjectInitial: function () {
         return travelPlanObjectInitial;
      }
      ,

      getElementData: function (elementType, elementId) {
         return travelPlanObject[elementType][elementId];

      },

      getEdgeMaster: function () {
         return $http.get('public/data/configjsons/edgemaster.json');
      },

      getNodeMaster: function () {
         console.log('I am in getNodeMaster');
         return $http.get('public/data/configjsons/nodemaster.json');
      },

      getPrerequisites: function () {
         return $q.all([subFactories.getNodeMaster(), subFactories.getEdgeMaster()]);
      },

      travelPlanExists: function () {
         if (travelPlanObject == null || travelPlanObject.length == 0) {
            return false;
         }
         else {
            return true;
         }
      }

   }
   return subFactories;
});

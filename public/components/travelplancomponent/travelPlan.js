/**
 * Created by lenovo on 09-05-2016.
 */
angular.module("app").component("travelPlan", {

   templateUrl: "public/components/travelplancomponent/travelPlanDiv.html",
   controllerAs: "plan",
   controller: travelPlanController,
   bindings: {
      travelplanobject: '<',
      locationchildservices: '<',
      transitchildservices:'<',
      currentnodeedgebooking: '&',
      nodetype: '@',
      edgetype: '@',
      metadataoflocation: "<",
      metadataoftransit: "<",
      currentselectedobj: "<",
      selectedchildren: "<",
      reflectselectedchild: "&",
      reflectchildcreation: "&"
   }
}).filter('keylength', function () {
   return function (input) {
      if (!angular.isObject(input)) {
         throw Error("Usage of non-objects with keylength filter!!")
      }
      return Object.keys(input).length;
   }
});

function travelPlanController() {

   var plan = this;

   plan.createChildService = function(childId) {

   }
   plan.reflectChildCreationWrapper = function(currentElement, currentElementIndex, selectedChild, metadata) {
     var selectedChildDetails = {
       "currentObject": currentElement,
       "index": currentElementIndex,
       "selectedChild": selectedChild,
       "metaData": metadata
     }
     plan.reflectchildcreation({"createdChildDetails":selectedChildDetails});
   }
  plan.reflectselectedchildwrapper = function(currentElement, currentElementIndex, selectedChild, metadata, childServicesData) {
    console.log("I am inside reflectselectedchildwrapper");
    console.log(currentElement, currentElementIndex, selectedChild, metadata, childServicesData);
    var selectedChildDetails = {
      "currentObject": currentElement,
      "index": currentElementIndex,
      "selectedChild": selectedChild,
      "metaData": metadata,
      "childServicesData": childServicesData
    }
    plan.reflectselectedchild({"selectedChildDetails":selectedChildDetails});
  }

  plan.reflectchildcreationwrapper  = function(currentElement, currentElementIndex, createdChild, metadata) {
    console.log("I am inside reflectchildcreationwrapper");
    console.log(currentElement, currentElementIndex, createdChild, metadata);
    var selectedChildDetails = {
      "currentObject": currentElement,
      "index": currentElementIndex,
      "createdChild": createdChild,
      "metaData": metadata
    }
    plan.reflectselectedchild({"selectedChildDetails":selectedChildDetails});
  }
  plan.currentnodeedgetravel1 = function(clicked) {

  }
  plan.currentnodeedgetravel = function (currentElement,currentElementIndex,selectedChildren, metadata) {
    console.log("in travel plan");
    console.log(currentElement,currentElementIndex,selectedChildren);
    // console.log(value);
    // console.log(plan.travelplanobject[value.index]);

    plan.currentselectedobj = currentElement;
    plan.selectedchildren = selectedChildren;
    var currentObjectDetails = {
      "currentObject": currentElement,
      "index": currentElementIndex,
      "selectedChildren": selectedChildren,
      "metadata": metadata
    };
    console.log("currentObjectDetails : ",currentObjectDetails);

         console.log(plan.locationchildservices);
    plan.currentnodeedgebooking({"value2":currentObjectDetails});
  };
  plan.addNode = function () {
    plan.newNode = {
      type:"location",
      cityName:" "
    };
    plan.newEdge = {
      type:"transit",
      childServices:
      {}
    };
    plan.travelplanobject.push(plan.newEdge);
    plan.travelplanobject.push(plan.newNode);
  }
  plan.subNode = function () {
    plan.travelplanobject.splice(plan.travelplanobject.length-1,1);
    plan.travelplanobject.splice(plan.travelplanobject.length-1,1);

  }

}

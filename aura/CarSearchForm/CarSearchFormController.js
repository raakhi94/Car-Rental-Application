({
    doInit : function(component, event, helper){
        
        /* When the copmonent is initialised, two things are done by doInit method
        1. Checks if the "new" button should be displayed or not
        2.Fetches all the available cartypes from server 
        For this purpose server side controller is being called from helper method */
        
        var createCarRecord = $A.get("e.force:createRecord");
        if(createCarRecord){
            component.set("v.showNew", true);
        }else{
            component.set("v.showNew", false);
            console.log('event is not supported');
        }
        helper.getCarType(component, helper);
    },
    
    newValueSelected : function(component, event, helper){
        var carTypeID = component.find("carTypeList").get("v.value");
        alert(carTypeID + " option was selected");
    },
    
    onSearchClick : function(component, event, helper) {
		helper.helperOnSearch(component, event, helper);
	},
    
    createRecord : function(component, event, helper){
        var createCarRecord = $A.get("e.force:createRecord");
        createCarRecord.setParams({
            "entityApiName" : "Car_Type__c"
        });
        createCarRecord.fire();
    },
    
})

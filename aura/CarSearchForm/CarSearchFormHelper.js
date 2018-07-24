({
	helperOnSearch : function() {
		alert('Search button was clicked');
	},
    
    getCarType : function(component, helper){
        var action = component.get("c.getCarTypes");
        action.setCallback(this, function(data) {
            var state = data.getState();
            if(state == "SUCCESS"){
                component.set("v.carTypes", data.getReturnValue()); // please check for () at end of every method
            }else if(state =="ERROR"){
                alert('unknown error');
            }
        });
        $A.enqueueAction(action);
    }
})

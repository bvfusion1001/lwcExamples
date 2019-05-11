({
    init: function(component, event, helper) {
        var action = component.get('c.getAccountContacts')
        action.setParams({
            accountId: component.get('v.recordId')
        })
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                var contacts = response.getReturnValue();

                component.set('v.contacts', contacts);
            }
        })
        $A.enqueueAction(action);
    }
})

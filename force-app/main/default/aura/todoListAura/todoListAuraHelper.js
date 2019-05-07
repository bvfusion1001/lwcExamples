({
    getAccountContactsPromise: function(component, accountId) {
        return new Promise($A.getCallback((resolve, reject) => {
            var action = component.get('c.getAccountContacts')
            action.setParams({
                accountId: accountId
            });
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    resolve(response.getReturnValue());
                } else {
                    reject(response.getError());
                }
            });
            $A.enqueueAction(action);
        }));
    }
})

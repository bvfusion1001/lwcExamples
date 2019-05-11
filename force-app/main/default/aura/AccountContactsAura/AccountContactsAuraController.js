({
    init: function(component, event, helper) {
        var dummyContacts = component.find('dummyContactsProviderLwc').getDummyContacts();
        component.set('v.contacts', dummyContacts);
    }
})

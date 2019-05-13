({
    init: function(component, event, helper) {
        var contacts = component.find('dummyContactsProviderAura').getContacts();
        component.set('v.contacts', contacts);
    }
})

public with sharing class contactRepository {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAccountContacts(String accountId) {
        List<Contact> contacts = [SELECT Id, Name, FirstName, LastName, Email FROM Contact WHERE AccountId = :accountId];
        System.debug(contacts);
        return contacts;
    }
}

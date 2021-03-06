public with sharing class ContactRepository {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAccountContacts(String accountId) {
        return [SELECT Id, Name, Email FROM Contact WHERE AccountId = :accountId];
    }
}
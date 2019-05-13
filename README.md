# Aura vs LWC

The branch `aura-vs-lwc` walks through the creation of some Aura and LWC components. Look at individual commits to compare each step between frameworks.

## Steps

1. Create ContactListAura and expose to record page.
2. Create contactListLwc and expose to record page.
3. Add dummy data to both components.
4. Iterate over dummy data in both components.
5. Create DummyContactsProviderAura and dummyContactsProviderLwc service components.
6. Replace hardcoded data with dummy data from service components.
7. Create ContactRepository to query Contacts related to an Account.
8. Expose recordId to both components.
9. Call getAccountContacts in both components replacing dummy data with real data.

## Useful Links

* Migrate Aura Components to Lightning Web Components: https://developer.salesforce.com/docs/component-library/documentation/lwc/migrate_introduction
* Component Library: https://developer.salesforce.com/docs/component-library/


import { LightningElement,track, wire, api } from 'lwc';
import getAccountContacts from '@salesforce/apex/ContactRepository.getAccountContacts'

export default class AccountContactsLwc extends LightningElement {
    @api recordId;

    @track contacts;
    @wire(getAccountContacts, {accountId: '$recordId'})
    accountContacts({data}) {
        if (data) {
            this.contacts = data.map(contact => {
                return {
                    ...contact,
                    Greeting: `Hello, my name is ${contact.FirstName} and my email is ${contact.Email}.`
                };
            });
        }
    }
}
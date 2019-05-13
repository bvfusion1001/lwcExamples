import { LightningElement, track, api, wire } from 'lwc';
import getAccountContacts from '@salesforce/apex/ContactRepository.getAccountContacts';

export default class ContactListLwc extends LightningElement {
    @api recordId;

    @track contacts;
    @wire(getAccountContacts, {accountId: '$recordId'})
    accountContacts({data}) {
        if (data) {
            this.contacts = data;
        }
    }
}
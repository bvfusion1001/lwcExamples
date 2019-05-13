import { LightningElement, track, api } from 'lwc';
import { getContacts } from 'c/dummyContactsProviderLwc';

export default class ContactListLwc extends LightningElement {
    @api recordId;
    
    @track contacts = getContacts();
}
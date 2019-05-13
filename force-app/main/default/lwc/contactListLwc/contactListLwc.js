import { LightningElement, track } from 'lwc';
import { getContacts } from 'c/dummyContactsProviderLwc';

export default class ContactListLwc extends LightningElement {
    @track contacts = getContacts();
}
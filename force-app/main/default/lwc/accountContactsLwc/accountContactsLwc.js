import { LightningElement, track } from 'lwc';
import { getDummyContacts } from 'c/dummyContacts';

export default class AccountContactsLwc extends LightningElement {
    @track contacts = getDummyContacts();
}
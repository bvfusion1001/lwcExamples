import { LightningElement, track } from 'lwc';
import { getDummyContracts } from 'c/dummyContacts';

export default class AccountContactsLwc extends LightningElement {
    @track contacts = getDummyContracts();
}
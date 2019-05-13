import { LightningElement, track } from 'lwc';

export default class ContactListLwc extends LightningElement {
    @track contacts = [{Id:'1',Name:'one'},{Id:'2',Name:'two'},{Id:'3',Name:'three'}];
}
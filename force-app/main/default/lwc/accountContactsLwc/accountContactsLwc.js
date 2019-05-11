import { LightningElement, track } from 'lwc';

export default class AccountContactsLwc extends LightningElement {
    @track contacts = [{id:'1',name:'one'},{id:'2',name:'two'},{id:'3',name:'three'}];
}
import { LightningElement, api, track } from 'lwc';

export default class ContactTile extends LightningElement {
    connectedCallback() {
        this.link = `/${this.contact.Id}`;
        this.name = this.contact.Name;
        this.greeting = this.contact.Greeting;
    }
    @api contact;

    @track link;
    @track name;
    @track greeting;
}
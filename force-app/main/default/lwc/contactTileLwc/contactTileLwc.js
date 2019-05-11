import { LightningElement, track, api } from 'lwc';

export default class ContactTileLwc extends LightningElement {
    connectedCallback() {
        this.contactInfo = {
            ...this.contact,
            Link: `/${this.contact.Id}`
        }
    }

    @api contact;

    @track contactInfo;
}
import { LightningElement, track, wire, api } from 'lwc';
import getAccountContacts from '@salesforce/apex/contactRepository.getAccountContacts';

export default class TodoList extends LightningElement {
    constructor() {
        super();
        this.store = [
            {
                id: 1,
                value: 'clean1'
            },
            {
                id: 2,
                value: 'clean3'
            },
            {
                id: 3,
                value: 'clean3'
            },
        ];
    }
    
    @api recordId;
    @track loading;
    @track store;

    @track error;
    @track contacts;
    @wire(getAccountContacts, {accountId: '$recordId'})
    accountContacts({error, data}) {
        if (data) {
            this.contacts = data.map(({Id, FirstName, LastName}) => {
                return {
                    Id,
                    Name: `${FirstName} ${LastName}`
                };
            })
        } else if (error) {
            this.error = error;
        }
    }

    getResource() {
        return new Promise((resolve) => {
            setTimeout(() => {
                fetch('https://jsonplaceholder.typicode.com/todos/1')
                    .then(response => resolve(response.json()))
            }, 1500);
        });
        
    }

    @track title;
    async doStuff() {
        this.loading = true;
        this.title = (await this.getResource()).title;
        // this.title = result.title;
        this.loading = false;
    }

    updateStore = () => {
        let newStore = this.store.map((item, i) => {
            return {
                ...item,
                value: i === this.store.length - 1 ? 'updated' : item.value
            }
        });
        this.store = newStore;
    }
}
({
    init: function(component, event, helper) {
        helper.getAccountContactsPromise(component, component.get('v.recordId'))
            .then(response => component.set('v.contacts', response));
    },
    addWord: function(component) {
        // var words = [{
        //     id: '10',
        //     value: 'ten'
        // },{
        //     id: '11',
        //     value: 'eleven'
        // },{
        //     id: '12',
        //     value: 'twelve'
        // },{
        //     id: '13',
        //     value: 'thirteen'
        // }];
        var words = [...component.get('v.words')];
        words.push({
            id: '5',
            value: 'five'
        });
        component.set('v.words', words);
    }
})

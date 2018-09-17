export default function(store = [], action) {
    // console.log('action!!', action)

    switch(action.type) {
        case 'ADD': {
            return [
                ...store,
                action.payload
            ]
        }
        case 'LOAD': {
            console.log('WE ARE HERE!!!')
            return [
                ...action.payload
            ]
        }

        default: return store;
    };
}

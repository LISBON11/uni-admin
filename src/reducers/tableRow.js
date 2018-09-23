export default function(store = null, action) {
    switch(action.type) {
        case 'CHANGE_ACTIVE_ROW': {
            return action.payload
        }

        default: return store;
    };
}

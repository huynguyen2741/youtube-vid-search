export default (state = null, action) => {
    switch (action.type) {
        case 'SET_SEARCHTERM':
            return action.payload;
        default:
            return state;
    }
}
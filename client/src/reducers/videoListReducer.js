export default (state = [], action) => {
    switch (action.type) {
        case 'GET_VIDEOS':
            return action.payload;
        default:
            return state;
    }
}
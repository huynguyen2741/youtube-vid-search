export default (vids = [], action) => {
    switch (action.type) {
        case 'GET_VIDEOS':
            return action.payload;
        default:
            return vids;
    }
}
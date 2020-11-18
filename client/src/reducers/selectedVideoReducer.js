export default (state = null, action) => {
    switch (action.type) {
        case 'SELECTED_VIDEO':
            // console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
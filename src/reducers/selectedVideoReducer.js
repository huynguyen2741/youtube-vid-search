export default (selectedVid = null, action) => {
    switch (action.type) {
        case 'SELECTED_VIDEO':
            return action.payload;
        default:
            return selectedVid;
    }
}
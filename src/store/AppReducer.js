const initialState = {
    photos: [],
    isFavoritedArr: [],
    hovered: false,
};

const AppReducer = (state = initialState, action) => {
    let photosArrCopy = [...state.photos];
    switch (action.type) {
        case "GET_PHOTOS":
            const getPhotos = action.response;
            return {
                ...state,
                photos: getPhotos,
            };

        case "SET_HOVERED":
            const ishovered = action.chnghoverd;
            return {
                ...state,
                hovered: ishovered,
            };

        case "IS_SHOW_ICONS":
            const showIcon = action.showIcon;
            return {
                ...state,
                isShowIcons: showIcon,
            };

        case "TOGGLE_FAVOURITE":
            const current_photo_ind = action.isFavObj.ind;
            photosArrCopy[current_photo_ind].isFavorite = true;
            const FavoritedArr = photosArrCopy.find(photo => photo.id === action.isFavObj.id);
            return {
                ...state,
                photos: photosArrCopy,
                isFavoritedArr: [...state.isFavoritedArr, FavoritedArr],
            }

        default:
            return state;
    }
};

export default AppReducer; 
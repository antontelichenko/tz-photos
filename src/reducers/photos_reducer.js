export default function (state={}, action) {

    switch(action.type){
        case'GET_PHOTOS_ALL':
            return{...state,photosList:action.payload}
            default:
            return state;
    }
}
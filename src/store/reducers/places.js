import {ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE} from '../action/actionTypes'

const initialState = {
    places : [],
    selectedPlace : null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE : 
            return{
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name : action.placeName,
                    image : {
                      uri : "https://i.pinimg.com/736x/8b/b4/1c/8bb41cd3738254e52808707eb737c43f.jpg"
                    }
                  })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places : state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                  }),
                  selectedPlace : null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace : state.places.find(place => {
                    return place.key === action.placeKey;
                  })
            };
        case DESELECT_PLACE:
            return{
                ...state,
                selectedPlace : null
            };
        default:
            return state;
    }
};

export default reducer;
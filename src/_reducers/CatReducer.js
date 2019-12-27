import initialState from "./initialState";

const CatReducer = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type) {
        case 'GET_CATEGORY_FULFILLED' :
            return {
                ...state,
                isFinish: true,
                cats: action.payload.data
            }

            default:
                return state;
    }
};

export default CatReducer;
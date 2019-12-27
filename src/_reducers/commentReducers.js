import initialState from "./initialState";

const commentReducers = (state = initialState, action) => {
    console.log(action.type)
      switch(action.type) {
          case 'GET_COMMENTART_FULFILLED':
              return {
                  ...state,
                  isFinish: true,
                  comment: action.payload.data,
              };
              default:
                  return state;
      }
  };
  
  export default commentReducers;
import initialState from "./initialState";

import {
    SET_ARTICLES,
    API_START,
    API_END,
    FETCH_ARTICLE_DETAILS
  } from "../_actions/actionTypes";
  
  // export default function(state = initialState, action) {
  //   console.log("action type => ", action.type);
  //   switch (action.type) {
  //     case SET_ARTICLES:
  //       return { data: action.payload };
  //     // case API_START:
  //     //   if (action.payload === FETCH_ARTICLE_DETAILS) {
  //     //     return {
  //     //       ...state,
  //     //       isLoadingData: true
  //     //     };
  //     //   }
  //     //   break;
  //     // case API_END:
  //     //   if (action.payload === FETCH_ARTICLE_DETAILS) {
  //     //     return {
  //     //       ...state,
  //     //       isLoadingData: false
  //     //     };
  //     //   }
  //     //   break;
  //     default:
  //       return state;
  //   }
  // };

const ArticlesReducer = (state = initialState, action) => {
  console.log(action.type)
    switch(action.type) {
        case 'GET_ARTICLES_FULFILLED':
            return {
                ...state,
                isFinish: true,
                articles: action.payload.data,
            };
        case 'GET_POPULAR_FULFILLED':
          return{
            ...state,
            isFinish: true,
            pop: action.payload.data
          };
          case'GET_ARTDETAIL_FULFILLED':
          return{
            ...state,
            isFinish: true,
            detail: action.payload.data
          };    
            default:
                return state;
    }
};

export default ArticlesReducer;
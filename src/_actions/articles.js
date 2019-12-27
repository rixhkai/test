import axios from 'axios';
import { SET_ARTICLES } from './actionTypes';
import Api from '../utils/Api';

export function fecthArticles() {
    return function(dispatch) {
        return axios.get('http://localhost:5000/api/v1/articles')
        .then((response) => {
            dispatch(setArticles(response.data.data));
        });
    }
}

function setArticles(data){
    return {
        type: SET_ARTICLES,
        payload: data
    };
}

export const AllArticles = () => {
    return{
        type: "GET_ARTICLES",
        payload: Api.get("articles")
    };
}

export const PopArticles = () => {
    return {
        type: "GET_POPULAR",
        payload: Api.get("posts")
    }
}

export const ArticlesDetail = (id) => {
    console.log(id)
    return {
        type: "GET_ARTDETAIL",
        payload: Api.get("article/" + id)
    }
}
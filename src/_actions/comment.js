import axios from 'axios';
import Api from '../utils/Api';

export const CommentsArt = (id) => {
    return {
        type: "GET_COMMENTART",
        payload: Api.get("article/" + id +"/comments")
    }
}
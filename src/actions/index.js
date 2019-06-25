import {GET_USER_DETAIL} from '../constants';
import {config} from '../config';
import axios from 'axios';

// export function getAllRepos() {
//     return {
//         type: GET_USER_DETAIL,
//     }
// }

export const getUserDetail = (username) => {
    return  function(dispatch){
        axios(`https://api.github.com/users/${username}?access_token=${config.token}`)
        .then((result) => {
            dispatch({type: GET_USER_DETAIL, payload: result.data})
        })
        
}}
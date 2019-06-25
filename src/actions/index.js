import {GET_USER_DETAIL, GET_ALL_REPOS} from '../constants';
import {config} from '../config';
import axios from 'axios';

export const getAllRepos = (username) => {
    return  function(dispatch){
        axios(`https://api.github.com/users/${username}/repos?access_token=${config.token}`)
        .then((result) => {
            dispatch({type: GET_ALL_REPOS, payload: result})
        })
        
}}

export const getUserDetail = (username) => {
    return  function(dispatch){
        axios(`https://api.github.com/users/${username}?access_token=${config.token}`)
        .then((result) => {
            dispatch({type: GET_USER_DETAIL, payload: result.data})
        })
        
}}
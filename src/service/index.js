import {config} from '../config';
import axios from 'axios';

export const getUserDetail = function (name) {
    return axios(`https://api.github.com/users/${name}?access_token=${config.token}`)

}

export const getAllRepos = function (name) {
    return axios(`https://api.github.com/users/${name}/repos?access_token=${config.token}`)
}

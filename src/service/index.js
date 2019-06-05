import {config} from '../config';
import axios from 'axios';

/**
 * This method is use to get user detail from the github
 * @param {string} name 
 */

export const getUserDetail = function (name) {
    return axios(`https://api.github.com/users/${name}?access_token=${config.token}`)

}

/**
 * This method is use to get all the repos of the user
 * @param {string} name 
 */
export const getAllRepos = function (name) {
    return axios(`https://api.github.com/users/${name}/repos?access_token=${config.token}`)
}

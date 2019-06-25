import  {GET_USER_DETAIL, GET_ALL_REPOS}  from '../constants';

const iniitialState = {
    userData: {}
}
export default (state= iniitialState, action) => {    
    switch(action.type) {
        case GET_USER_DETAIL:
        return {
            ...state,
            userData: {name:action.payload.name, username:action.payload.login}
        }
        default :
        return state
    }
}
import {GET_BY_ID, ADD_USRE, UPDATE_USER, DELETE_USER }  from "../typs/typs";


export default function userReducer({user}, action){
    switch(action.type){
        case GET_BY_ID:
            return [...user]
        case ADD_USRE:
            return [...user, action.payload]
        case UPDATE_USER:
            return
        case DELETE_USER:
            return
        default:
            return {user}
            // state
    }

}
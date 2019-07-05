import { combineReducers } from 'redux'
import {
    CREATE_USER, UPDATE_USER, DELETE_USER, VIEW_USERS
} from '../actions';

const initialState = {
    form: {
        name: '',
        status: ''
    },
    users: {
        isFetching: false,
        users: []
    }
}

const formReducer = (state = initialState.from, action) => {
    switch(action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.name
            }
        case CHANGE_STATUS: 
            return {
                ...state,
                status: action.status
            }
        case INITIALIZE_FORM:
            return initialState.form
        default:
            return state
    }
}

const usersReducer = (state = initialState.users, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}


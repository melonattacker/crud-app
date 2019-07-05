import axios from 'axios';
export const CREARTE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const VIEW_USERS = 'VIEW_USERS';

const ROOT_ENDPOINT = 'http://localhost:3000';

export const createUser = (name, status) => async dispatch => {
    axios({
        method: 'post',
        url: ROOT_ENDPOINT + '/user/create',
        data: {
            name: name,
            status: status
        }
    })
    .then(res => {
        dispatch({ type: CREARTE_USER, res: res })
    })
    .catch(err => {
        dispatch({ type: CREARTE_USER, res: err })
    })
}

export const updateUser = (name, status) => async dispatch => {
    axios({
        method: 'post',
        url: ROOT_ENDPOINT + '/user/update',
        data: {
            name: name,
            status: status
        }
    })
    .then(res => {
        dispatch({ type: UPDATE_USER, res: res })
    })
    .catch(err => {
        dispatch({ type: UPDATE_USER, res: err })
    })
}

export const deleteUser = (name) => async dispatch => {
    axios({
        method: 'post',
        url: ROOT_ENDPOINT + '/user/delete',
        data: {
            name: name
        }
    })
    .then(res => {
        dispatch({ type: DELETE_USER, res: res })
    })
    .catch(err => {
        dispatch({ type: DELETE_USER, res: err })
    })
}

export const viewUsers = () => async dispatch => {
    axios.get(ROOT_ENDPOINT + '/user')
    .then(res => {
        dispatch({ type: VIEW_USERS, users: res })
    })
}
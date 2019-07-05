export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const INITIALIZE_FORM = 'INITIALIZE_FORM';

export const changeName = (name) => ({
    type: CHANGE_NAME,
    name
})

export const changeStatus = (status) => ({
    type: CHANGE_STATUS,
    status
})

export const initializeForm = () => ({
    type: INITIALIZE_FORM
})
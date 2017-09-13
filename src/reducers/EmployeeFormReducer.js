import { EMPLOYEE_FORM_UPDATED, EMPLOYEE_CREATED } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FORM_UPDATED:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATED:
            return INITIAL_STATE;
        default:
            return state;
    }
};

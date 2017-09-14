import { 
    EMPLOYEE_FORM_UPDATED, 
    EMPLOYEE_CREATED, 
    EMPLOYEE_UPDATED,
    EMPLOYEE_FORM_CANCELED
} from '../actions/types';

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
        case EMPLOYEE_UPDATED:
        case EMPLOYEE_FORM_CANCELED:
            return INITIAL_STATE;
        default:
            return state;
    }
};

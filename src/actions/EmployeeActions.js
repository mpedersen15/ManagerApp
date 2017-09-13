import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
    EMPLOYEE_FORM_UPDATED,
    EMPLOYEE_CREATED,
    EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeFormUpdated = ({ prop, value }) => {
    return {
        type: EMPLOYEE_FORM_UPDATED,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATED });
                Actions.employeeList({ type: 'reset' });
            });
    };
};

export const employeesFetch = () => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

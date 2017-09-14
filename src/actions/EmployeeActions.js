import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
    EMPLOYEE_FORM_UPDATED,
    EMPLOYEE_CREATED,
    EMPLOYEE_UPDATED,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_FORM_CANCELED
} from './types';

export const employeeFormUpdated = ({ prop, value }) => {
    return {
        type: EMPLOYEE_FORM_UPDATED,
        payload: { prop, value }
    };
};

export const employeeFormCanceled = () => {
    return {
        type: EMPLOYEE_FORM_CANCELED
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
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const employeeEdit = ({ name, phone, shift, uid }) => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_UPDATED });
                Actions.employeeList({ type: 'reset' });
            });
    };
};

export const employeeDelete = ({ uid }) => {
    return () => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.employeeList({ type: 'reset' });
            });
    };
};

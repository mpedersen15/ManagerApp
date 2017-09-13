import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login" initial />
            </Scene>
            <Scene key="main">
                <Scene 
                    key="employeeList" 
                    component={EmployeeList} 
                    title="Employee List" 
                    onRight={() => console.log('right!!')} 
                    rightTitle="Add" 
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;

import React, { Component } from 'react';
import { View, Text  } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { CardSection } from './components/common';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDNH18h9WKwKgeyUphQFSZpJq7hFfV_6-E',
            authDomain: 'managerap-e6953.firebaseapp.com',
            databaseURL: 'https://managerap-e6953.firebaseio.com',
            projectId: 'managerap-e6953',
            storageBucket: 'managerap-e6953.appspot.com',
            messagingSenderId: '873067342203'
          };
          
        firebase.initializeApp(config);
    }
    
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <CardSection>App Component</CardSection>
                    <LoginForm />
                </View>
            </Provider>
        );
    }

    
}

export default App;


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, FormField, Spinner } from './common';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        const { email, password, error, loading } = this.props;
        return (
            <Card>

                <CardSection>
                    <FormField 
                        label="email" 
                        placeholder="test@test.com" 
                        onChangeText={this.onEmailChange.bind(this)}
                        value={email}
                    />  
                </CardSection>

                <CardSection>
                    <FormField 
                        label="password" 
                        placeholder="password" 
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={password}
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    const { email, password, loading, error } = state.auth;

    return {
        email,
        password,
        loading,
        error
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);

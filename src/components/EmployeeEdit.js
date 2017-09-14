import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

import _ from 'lodash';

import { 
    employeeFormUpdated,
    employeeFormCanceled,
    employeeEdit, 
    employeeDelete 
} from '../actions';

import { 
    Button, 
    Card, 
    CardSection, 
    Confirm 
} from './common';

import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeFormUpdated({ prop, value });
        });
    }

    componentWillUnmount() {
        this.props.employeeFormCanceled();
    }

    onSaveButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeEdit({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextButtonPress() {
        console.log('Text button pressed!');
        const { phone, shift } = this.props;
        Communications.text(phone, `Your next shift is on ${shift}`);
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onSaveButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextButtonPress.bind(this)}>
                        Text
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire
                    </Button>
                </CardSection>

                <Confirm 
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this employee?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeFormUpdated, employeeFormCanceled, employeeEdit, employeeDelete 
})(EmployeeEdit);


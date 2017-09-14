import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeFormUpdated, employeeEdit } from '../actions';

import { Button, Card, CardSection } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeEdit({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        // const { name, phone } = this.props;
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeFormUpdated, employeeEdit })(EmployeeEdit);


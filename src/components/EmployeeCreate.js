import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeFormUpdated, employeeCreate } from '../actions';

import { Button, Card, CardSection, FormField } from './common';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        const { name, phone } = this.props;
        return (
            <Card>
                <CardSection>
                    <FormField 
                        label="Name" 
                        placeholder="Sarah"
                        value={name}
                        onChangeText={value => this.props.employeeFormUpdated({ prop: 'name', value })}
                    />
                </CardSection>
                <CardSection>
                    <FormField 
                        label="Phone" 
                        placeholder="111-555-1234"
                        value={phone}
                        onChangeText={value => this.props.employeeFormUpdated({ prop: 'phone', value })}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column', height: 70 }}>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={(value) => this.props.employeeFormUpdated({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeFormUpdated, employeeCreate })(EmployeeCreate);


import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';

import { CardSection, FormField } from './common';
import { employeeFormUpdated } from '../actions';

class EmployeeForm extends Component {
    render() {
        const { name, phone, shift } = this.props;
        return (
            <View>
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
                        selectedValue={shift}
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
            </View>
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

export default connect(mapStateToProps, { employeeFormUpdated })(EmployeeForm);

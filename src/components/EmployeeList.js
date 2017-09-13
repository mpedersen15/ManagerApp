import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // next props are the next set of props that component will be rendered with
        // this.props is CURRENT/OLD props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    render() {
        return (
            <View>
                <Text>Employee</Text>
                <Text>Employee</Text>
                <Text>Employee</Text>
                <Text>Employee</Text>
                <Text>Employee</Text>
                <Text>Employee</Text>
                <Text>Employee</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

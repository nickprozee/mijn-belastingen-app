import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Dashboard extends React.Component {

    render() {
        return <View style={styles.root}>
            <Text>Hello World</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Dashboard;

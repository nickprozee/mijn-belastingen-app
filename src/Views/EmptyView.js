import * as React from 'react';
import { View } from 'react-native';

export default class EmptyView extends React.Component {
    render() {
        return <View style={styles.root} />
    }
}

const styles = {
    root: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#57606f'
    }
}
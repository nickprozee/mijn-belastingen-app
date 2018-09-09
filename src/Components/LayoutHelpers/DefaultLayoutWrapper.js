import React from 'React';
import { View } from 'react-native';

class DefaultLayoutWrapper extends React.Component {
    render() {

        return (
            <View style={[styles.container, { ...this.props.style }]}>
                <View style={styles.wrapper}>
                    {
                        this.props.children
                    }
                </View>
            </View>
        );
    }
}

const styles = {

    container: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 4
    },

    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'transparent'
    },
}

export default DefaultLayoutWrapper;
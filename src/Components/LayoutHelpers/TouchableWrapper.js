import React from 'React';
import { TouchableOpacity, View } from 'react-native';

class TouchableWrapper extends React.Component {
    render() {

        return (
            <View style={[styles.container, {...this.props.style}]}>
                <TouchableOpacity activeOpacity={0.2} style={styles.touchableWrapper} onPress={this.props.onPress}>
                    <View style={styles.touchableWrapper}>
                        {
                            this.props.children
                        }
                    </View>
                </TouchableOpacity>
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

    touchableWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        height: 35,
        backgroundColor: 'transparent'
    },
}

export default TouchableWrapper;
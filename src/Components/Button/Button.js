import React from 'React';
import { Text, View } from 'react-native';
import TouchableWrapper from '../LayoutHelpers/TouchableWrapper';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
        return (
            <TouchableWrapper style={styles.button}>

                <View style={styles.contentWrapper}>

                    <Text style={styles.content}>
                        {this.props.label}
                    </Text>

                </View>

            </TouchableWrapper>
        );
    }
}

Button.propTypes = {
    onPress: PropTypes.func,
    label: PropTypes.string.isRequired,
}

const styles = {
    button: {
        borderWidth: 1,
        borderColor: 'rgba(255,255,255, .5)',
        borderRadius: 4,
    },

    contentWrapper: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    content: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: 'rgba(255,255,255,.8)'
    }

}

export default Button;
import React from 'React';
import { TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements'
import TouchableWrapper from '../LayoutHelpers/TouchableWrapper';
import PropTypes from 'prop-types';

class TextField extends React.Component {
    render() {

        return (
            <TouchableWrapper style={this.props.style}>

                <View style={styles.iconWrapper}>
                    <Icon color="rgba(0,0,0,.5)" name={this.props.icon} />
                </View>

                <TextInput
                    onChangeText={value => this.props.onChange && this.props.onChange(value)}
                    placeholder={this.props.placeholder}
                    placeholderTextColor='gray'
                    style={styles.input}
                    value={this.props.value}
                    secureTextEntry={this.props.secured}
                    underlineColorAndroid='transparent' />

            </TouchableWrapper>
        );
    }
}

TextField.propTypes = {
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    secured: PropTypes.bool,
    onChange: PropTypes.func
}

const styles = {

    iconWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, .5)',

        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,

        width: 40,
        height: 35
    },

    input: {
        paddingHorizontal: 8,
        flex: 1,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        backgroundColor: '#FFF'
    }

}

export default TextField;
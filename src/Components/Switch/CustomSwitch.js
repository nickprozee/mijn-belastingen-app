import React from 'react';
import { Text, View, LayoutAnimation, TouchableOpacity } from 'react-native';
import DefaultLayoutWrapper from '../LayoutHelpers/DefaultLayoutWrapper';
import PropTypes from 'prop-types';

class CustomSwitch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enabled: false
        }
    }

    componentWillReceiveProps(nextProps) {
        LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.easeInEaseOut, duration: 200 });
        this.setState({
            enabled: nextProps.enabled
        });
    }

    onPress() {
        this.props.onChange(!this.state.enabled);
    }

    render() {

        const left = this.state.enabled ? (WIDTH - BUTTON_SIZE) : 0;
        const color = this.state.enabled ? '#2ecc71' : '#e74c3c';

        return <DefaultLayoutWrapper style={styles.container}>

            <View style={styles.flex} />
            <View style={styles.labelWrapper}>
                <Text style={styles.label}>
                    {
                        this.props.label
                    }
                </Text>
            </View>
            <TouchableOpacity onPress={() => this.onPress()} activeOpacity={.6} style={styles.aligner}>

                <View style={[styles.line, { backgroundColor: color }]} />

                <View style={[styles.button, { left: left }]}>
                    <View style={styles.button} />
                </View>

            </TouchableOpacity>


        </DefaultLayoutWrapper>
    }
}

CustomSwitch.propTypes = {
    label: PropTypes.string,
    enabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default CustomSwitch;


const WIDTH = 40;
const BUTTON_SIZE = WIDTH / 2;

const styles = {
    container: {
        display: 'flex',
        height: BUTTON_SIZE,
    },

    aligner: {
        position: 'relative',
        width: WIDTH,
        marginTop: 0
    },

    button: {
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        borderRadius: BUTTON_SIZE,
        backgroundColor: 'silver',
        position: 'absolute'
    },

    line: {
        position: 'absolute',
        left: 0,
        top: BUTTON_SIZE / 4,
        width: WIDTH,
        height: BUTTON_SIZE / 2,
        borderRadius: BUTTON_SIZE / 2
    },
    labelWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginRight: 8,
        height: BUTTON_SIZE - 4,
    },
    label: {
        color: '#FFF'
    },
    flex: {
        flex: 1
    }
}
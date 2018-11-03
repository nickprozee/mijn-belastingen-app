
import React from 'React';
import { KeyboardAvoidingView, Keyboard } from 'react-native';
import { onOpenKeyboard, onCloseKeyboard } from '../../Actions/KeyboardActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class KeyboardAvoidingViewHandler extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.props.onOpenKeyboard);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.props.onCloseKeyboard);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.avoid}>
                {
                    this.props.children
                }
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({ onOpenKeyboard: onOpenKeyboard, onCloseKeyboard: onCloseKeyboard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardAvoidingViewHandler);

const styles = {
    avoid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}
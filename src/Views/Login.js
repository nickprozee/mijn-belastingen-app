
//Components
import React from 'React';
import { View, LayoutAnimation, Text, Keyboard } from 'react-native';
import Logo from '../Components/Logo/Logo';
import TextField from '../Components/TextInput/TextField';
import MarginComponent from '../Components/LayoutHelpers/MarginComponent';
import Button from '../Components/Button/Button';
import CustomSwitch from '../Components/Switch/CustomSwitch';
import KeyboardAvoidingViewHandler from '../Components/LayoutHelpers/KeyboardAvoidingViewHandler';
import FullScreenSpinner from '../Components/Spinner/FullScreenSpinner';

//Simple state changes - Redux
import { setRememberCredentials, setPassword, setUsername } from '../Actions/AuthenticationActions';
import { setShowFullContent } from '../Actions/screenActions';

//Combined actions
import { authenticateUser } from '../ViewActions/LoginActions'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showFullContent: true, storeCredentials: false }
    }

    //Authenticate user on login clicked
    onLoginClicked() {
        Keyboard.dismiss();
        this.props.onAuthenticateUser(this.props.authentication.username, this.props.authentication.password);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.keyboard.isOpen !== this.props.keyboard.isOpen) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.props.onShowFullContentChanged(!nextProps.keyboard.isOpen)
        }
    }

    render() {
        let { showFullContent } = this.props.screen
        let { isAuthenticating, storeCredentials, password, username } = this.props.authentication;
        const spaceBetweenComponents = showFullContent ? 5 : 3;
        const appTitle = showFullContent ? 'MIJN-BELASTINGEN' : 'IDENTIFICATIE'

        return (
                <View style={styles.root}>
                    <MarginComponent space={spaceBetweenComponents} />
                    {
                        this.props.screen.showFullContent &&
                        <Logo maxWidthPercentage={30} />
                    }

                    <Text style={[styles.title]}>{appTitle}</Text>

                    <MarginComponent space={spaceBetweenComponents} />

                    <KeyboardAvoidingViewHandler >

                        <TextField onChange={this.props.onUsernameChanged} placeholder="Gebruikersnaam" value={username} icon="perm-identity" />

                        <MarginComponent space={1} />

                        <TextField onChange={this.props.onPasswordChanged} placeholder="Wachtwoord" value={password} secured icon="lock" />

                        <MarginComponent space={1} />

                        <CustomSwitch onChange={this.props.onRememberCredetialsChanged} label="Inloggegevens onthouden" enabled={storeCredentials} />

                        <MarginComponent space={1} />

                        <Button onPress={() => this.onLoginClicked()} label="INLOGGEN" />

                    </KeyboardAvoidingViewHandler>

                    {
                        isAuthenticating && <FullScreenSpinner text="Gegevens ophalen..." />
                    }
                </View>
        );
    }
}

const mapStateToProps = state => ({
    keyboard: state.keyboard,
    authentication: state.authentication,
    screen: state.screen
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onRememberCredetialsChanged: setRememberCredentials,
    onPasswordChanged: setPassword,
    onUsernameChanged: setUsername,
    onAuthenticateUser: authenticateUser,
    onShowFullContentChanged: setShowFullContent
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = {

    root: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#57606f'
    },

    title: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: "#FFF"
    }

}
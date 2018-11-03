
//Components
import React from 'React';
import { View, LayoutAnimation, Text, Keyboard } from 'react-native';
import Logo from '../Components/Logo/Logo';
import TextField from '../Components/TextInput/TextField';
import Button from '../Components/Button/Button';
import CustomSwitch from '../Components/Switch/CustomSwitch';
import KeyboardAvoidingViewHandler from '../Components/LayoutHelpers/KeyboardAvoidingViewHandler';
import FullScreenSpinner from '../Components/Spinner/FullScreenSpinner';

//Simple state changes - Redux
import { setRememberCredentials, setPassword, setUsername } from '../Actions/AuthenticationActions';
import { setShowFullContent } from '../Actions/ScreenActions';

//Combined actions
import { authenticateUser } from '../ViewActions/LoginActions'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showFullContent: true, storeCredentials: false }
    }

    componentDidMount() {
       // this.props.onAuthenticateUser(this.props.authentication.username, this.props.authentication.password)
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
        const topPadding = showFullContent ? styles.paddingFull : styles.paddingMinimal;
        const appTitle = showFullContent ? 'MIJN-BELASTINGEN' : 'IDENTIFICATIE'

        return (
            <View style={[styles.root, topPadding]}>
                {
                    this.props.screen.showFullContent &&
                    <Logo maxWidthPercentage={30} />
                }

                <Text style={[styles.title]}>{appTitle}</Text>

                <KeyboardAvoidingViewHandler>
                    <TextField style={styles.input} onChange={this.props.onUsernameChanged} placeholder="Gebruikersnaam" value={username} icon="perm-identity" />
                    <TextField style={styles.input} onChange={this.props.onPasswordChanged} placeholder="Wachtwoord" value={password} secured icon="lock" />
                    <CustomSwitch style={styles.input} onChange={this.props.onRememberCredentialsChanged} label="Inloggegevens onthouden" enabled={storeCredentials} />
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
    onRememberCredentialsChanged: setRememberCredentials,
    onPasswordChanged: setPassword,
    onUsernameChanged: setUsername,
    onShowFullContentChanged: setShowFullContent,
    onAuthenticateUser: authenticateUser
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
        color: "#FFF",
        marginBottom: 48
    },

    input: {
        marginBottom: 8
    },

    paddingFull: {
        paddingTop: 48
    },

    paddingMinimal: {
        paddingTop: 32
    }
}
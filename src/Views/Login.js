import React from 'React';
import { View, LayoutAnimation, Text, Keyboard } from 'react-native';
import Logo from '../Components/Logo/Logo';
import TextField from '../Components/TextInput/TextField';
import MarginComponent from '../Components/LayoutHelpers/MarginComponent';
import Button from '../Components/Button/Button';
import CustomSwitch from '../Components/Switch/CustomSwitch';
import KeyboardAvoidingViewHandler from '../Components/LayoutHelpers/KeyboardAvoidingViewHandler';
import { onRememberCredetialsChanged, onPasswordChanged, onUsernameChanged, authenticateUser } from '../Actions/authenticationActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import FullScreenSpinner from '../Components/Spinner/FullScreenSpinner';
import NavigationHandler from '../Components/NavigationHandler/NavigationHandler';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showFullContent: true }
    }

    //Hide or show Logo based on keyboard open/closed.
    componentWillReceiveProps(nextProps) {

        if (nextProps.keyboard.isOpen !== this.props.keyboard.isOpen) {

            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

            this.setState({
                showFullContent: !nextProps.keyboard.isOpen
            });

        }
    }

    //Authenticate user on login clicked
    onLoginClicked() {
        Keyboard.dismiss();
        this.props.onAuthenticateUser(this.props.authentication.username, this.props.authentication.password);
    }

    render() {

        const space = this.state.showFullContent ? 5 : 3;

        return (
            <NavigationHandler navigation={this.props.navigation}>
                <View style={styles.root}>

                    <MarginComponent space={space} />
                    {
                        this.state.showFullContent &&
                        <Logo maxWidthPercentage={30} />
                    }
                    <Text style={[styles.title]}>
                        {
                            this.state.showFullContent
                                ? 'MIJN-BELASTINGEN'
                                : 'IDENTIFICATIE'
                        }
                    </Text>

                    <MarginComponent space={space} />

                    <KeyboardAvoidingViewHandler>

                        <TextField onChange={this.props.onUsernameChanged} placeholder="Gebruikersnaam" value={this.props.authentication.username} icon="perm-identity" />

                        <MarginComponent space={1} />

                        <TextField onChange={this.props.onPasswordChanged} placeholder="Wachtwoord" value={this.props.authentication.password} secured icon="lock" />

                        <MarginComponent space={1} />

                        <CustomSwitch onChange={this.props.onRememberCredetialsChanged} label="Inloggegevens onthouden" enabled={this.props.authentication.storeCredentials} />

                        <MarginComponent space={1} />

                        <Button onPress={() => this.onLoginClicked()} label="INLOGGEN" />

                    </KeyboardAvoidingViewHandler>

                    {
                        this.props.authentication.isAuthenticating &&
                        <FullScreenSpinner text="Gegevens ophalen..." />
                    }

                </View>
            </NavigationHandler>
        );
    }
}

const mapStateToProps = state => ({
    keyboard: state.keyboard,
    authentication: state.authentication
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onRememberCredetialsChanged: onRememberCredetialsChanged,
    onPasswordChanged: onPasswordChanged,
    onUsernameChanged: onUsernameChanged,
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
        color: "#FFF"
    }

}
import * as React from 'react';
import { View } from 'react-native';
import Button from '../Components/Button/Button';
import FullScreenSpinner from '../Components/Spinner/FullScreenSpinner';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../ViewActions/SettingsActions';


export class SettingsView extends React.Component {

    render() {
        let { isAuthenticating } = this.props.authentication;

        return <View style={styles.root}>
            <Button onPress={this.props.onLogoutClicked} label="AFMELDEN" />
            {
                isAuthenticating && <FullScreenSpinner text="Gegevens ophalen..." />
            }
        </View>
    }
}
const mapStateToProps = state => ({
    authentication: state.authentication,

});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    onLogoutClicked: logoutUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);

const styles = {
    root: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#57606f',
        paddingTop: 50
    }
}
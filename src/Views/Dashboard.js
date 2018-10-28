import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Navigationhandler from '../Components/NavigationHandler/NavigationHandler';
class Dashboard extends React.Component {
    iconSize = Dimensions.get('screen').width / 4;

    renderLink(title, icon, color, link, key) {
        return <View style={styles.link} key={key}>
            <Ionicons name={icon} color={'silver'} size={this.iconSize} />
            <Text style={styles.text}>{title}</Text>
        </View>
    }

    render() {
        return <View style={styles.root}>

            <View style={styles.profile}>

            </View>

            <View style={styles.links}>
                <View style={styles.linkRow} key={1}>{
                    [{
                        title: '12 Actieve belastingen',
                        icon: 'ios-card',
                        link: '',
                        key: 'dashBoard:active'
                    },
                    {
                        title: '3 Belastingen onbehandeld',
                        icon: 'ios-alert',
                        link: '',
                        key: 'dashBoard:open'
                    }].map(link => this.renderLink(link.title, link.icon, link.link, link.key))
                }
                </View>
                <View style={styles.linkRow} key={2}>{
                    [{
                        title: 'Instellingen',
                        icon: 'ios-options',
                        link: '',
                        key: 'dashBoard:settings'
                    },
                    {
                        title: 'Wijzig Profiel',
                        icon: 'ios-contact',
                        link: '',
                        key: 'dashBoard:profile'
                    }].map(link => this.renderLink(link.title, link.icon, link.link, link.key))
                }
                </View>
            </View>
        </View>
    }
}

export default Dashboard;


const styles = {

    root: {
        backgroundColor: '#57606f',
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },

    text: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: "#FFF",
        textAlign: 'center'
    },

    divider: {
        display: 'flex',
        height: 1,
        flex: 1,
        backgroundColor: 'white'
    },

    profile: {
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width,

        //    borderBottomWidth: .5,
        //    borderBottomColor: 'tomato'
    },

    links: {
        height: Dimensions.get('window').height / 2,

        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },

    linkRow: {
        flexDirection: 'row',
        display: 'flex',
        flex: 1
    },

    link: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: .5,
        margin: 10
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex'
    }
}
import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import {connect} from 'react-redux';
import Navigationhandler from '../Components/NavigationHandler/NavigationHandler';

class Dashboard extends React.Component {
    renderLink(title, icon, color, link, key) {
        return <View style={styles.link} key={key}>
            <Ionicons name={icon} color={'white'} size={32} key={key + '_icon'} />
            <Text style={styles.title} key={key + '_text'}>{title}</Text>
        </View>
    }

    render() {
        return <View style={styles.root}>

            <View style={styles.profile}>
                <Avatar
                    xlarge
                    rounded
                    source={{ uri: "https://www.db.com/cr/img/DB_Tuerme_Video_L.jpg" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <Text style={styles.title}>{this.props.user.name}</Text>
            </View>

            <View style={styles.links}>
              
            </View>
        </View>
    }
}


const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(Dashboard);

const styles = {

    root: {
        backgroundColor: '#57606f',
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },

    title: {
        marginTop: 16,
        fontSize: 24,
        fontWeight: '100',
        fontFamily: 'Roboto',
        color: "#FFF",
        textAlign: 'center'
    },

    profile: {
        display: 'flex',
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center'
    },

    links: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
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
        margin: 10,
        borderColor: 'silver'
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex'
    }
}
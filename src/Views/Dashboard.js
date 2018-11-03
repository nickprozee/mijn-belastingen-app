import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import CatergoryList from '../Components/Lists/CatergoryList';
import ListItem from '../Components/Lists/ListItem';

const upcoming_data = [
    { icon: 'attach-money', amount: '12.278,12', dateString: 'morgen', key: 'first',  onInfoClicked: () => alert('Werkt nog niet'), onButtonClick: () => alert('Werkt nog niet.') },
    { icon: 'attach-money', amount: '14,43', dateString: '11-12-2018', key: 'second',  onInfoClicked: () => alert('Werkt nog niet'), onButtonClick: () => alert('Werkt nog niet.') },
    { icon: 'attach-money', amount: '486,89', dateString: '12-12-2018', key: 'third',  onInfoClicked: () => alert('Werkt nog niet'), onButtonClick: () => alert('Werkt nog niet.') },
];

const todo_data = [
    { icon: 'attach-money', amount: '56,11', dateString: '22-12-2019', key: 'fifth',  onInfoClicked: () => alert('Werkt nog niet'), onButtonClick: () => alert('Werkt nog niet.') },
];

class Dashboard extends React.Component {
    constructor(props){
        super(props);

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

            <View style={styles.notifications}>
                <CatergoryList title="Aankomende aanslagen" icon="credit-card" isOpen={true}>
                    {
                        upcoming_data.map(item => <ListItem  {...item} />)
                    }
                </CatergoryList>
                
                <CatergoryList title="Actie vereist" icon="warning" isOpen={true}>
                    {
                        todo_data.map(item => <ListItem  {...item} />)
                    }
                </CatergoryList>
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
        marginTop: 32,
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    notifications: {
        display: 'flex',
        flex: 2,
        flexDirection: 'column',
        marginTop: 16
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex'
    }
}
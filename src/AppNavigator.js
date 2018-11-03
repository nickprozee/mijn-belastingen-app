import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { LayoutAnimation } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './Views/Login';
import Dashboard from './Views/Dashboard';
import EmptyView from './Views/EmptyView';
import SettingsView from './Views/Settings';


export const screens = {
    Dashboard: 'Dashboard'
};

const RootStack = createBottomTabNavigator({
    Actief: { screen: EmptyView },
    Overzicht: { screen: Dashboard },
    Onbehandeld: { screen: EmptyView },
    Instellingen: { screen: SettingsView }
},
    {
        initialRouteName: 'Overzicht',
        navigationOptions: ({ navigation }) => ({

            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;

                if (routeName === 'Overzicht') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'Onbehandeld') {
                    iconName = `ios-alert${focused ? '' : '-outline'}`;
                } else if (routeName === 'Actief') {
                    iconName = `ios-card${focused ? '' : '-outline'}`;
                }else if (routeName === 'Instellingen') {
                    iconName = `ios-glasses${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    });

class AppNavigator extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.authentication.authKey !== this.props.authentication.authKey)
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    render() {
        return this.props.authentication.authKey
            ? <RootStack />
            : <Login />
        //: <RootStack />

    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication
});

export default connect(mapStateToProps)(AppNavigator);
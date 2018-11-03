import * as React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';


class ListItem extends React.Component {

    render() {

        return <View style={styles.row}>

            <View style={styles.iconWrapper}>
                <Icon size={16}
                    iconStyle={{ color: 'rgba(46, 204, 113, 1.0)' }}
                    name={this.props.icon} />

                <Text style={styles.iconContent}>{this.props.amount}</Text>
            </View>

            <View style={styles.dateWrapper}>
                <Icon size={16}
                    iconStyle={{ color: 'rgba(255, 255, 255,1.0)' }}
                    name={'timer'} />

                <Text style={styles.iconContent}>{this.props.dateString}</Text>
            </View>

            <View style={styles.payWrapper}>
                <Icon size={16} iconStyle={{ color: 'rgba(255, 255, 255,1.0)' }} name={'touch-app'} />
                <Text style={styles.iconContent}>Betalen</Text>
            </View>

            <View style={styles.infoWrapper}>
                <Icon size={20}
                    iconStyle={{ color: 'rgba(255, 255, 255, 1.0)' }}
                    name={'help'} />
            </View>


        </View>
    }
}

const styles = {
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },

    divider: {
        backgroundColor: 'white',
        height: .3,
        display: 'flex',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8
    },

    dateWrapper: {
        marginLeft: 4,
        borderRadius: 4,
        height: 25,
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        padding: 2,
        alignItems: 'center',
        backgroundColor: 'rgba(192, 57, 43, .5)'
        // backgroundColor: 'rgba(0, 0, 0, .7)'

    },

    iconWrapper: {
        marginLeft: 4,
        borderRadius: 4,
        height: 25,
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        padding: 2,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)'
    },

    infoWrapper: {
        marginLeft: 4,
        borderRadius: 4,
        height: 25,
        display: 'flex',
        flexDirection: 'row',
        padding: 2,
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: 'center',
        backgroundColor: 'rgba(52, 152, 219, .7)'
    },


    payWrapper: {
        marginLeft: 4,
        borderRadius: 4,
        height: 25,
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        padding: 2,
        paddingLeft: 4,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)'
    },



    title: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Roboto',
        marginLeft: 8
    },

    iconContent: {
        color: 'white',
        fontSize: 12,
        marginLeft: 8
    }
}

export default ListItem;
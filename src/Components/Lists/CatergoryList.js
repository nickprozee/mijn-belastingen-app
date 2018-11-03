import * as React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class CatergoryList extends React.Component {

    render() {

        let { isOpen } = this.props;
        let collapseIcon = isOpen ? 'arrow-drop-down' : 'arrow-drop-up';

        return <View style={styles.root}>

            <View style={styles.row}>

                {/* <View style={styles.iconWrapper}>
                    <Icon size={20} color="rgba(0,0,0,.5)" iconStyle={{
                        color: 'rgba(255,255,255, 0.7)'
                    }} name={this.props.icon} />
                </View> */}

                <Text style={styles.title}>{this.props.title}</Text>
                <Icon size={30} conStyle={{ color: 'rgba(255,255,255, 0.7)' }} name={collapseIcon} />
            </View>

            <View style={styles.divider} />
            {
               this.props.isOpen && this.props.children
            }
        </View>
    }

}

const styles = {

    root: {
        flexDirection: 'column',
        display: 'flex',
        marginBottom: 16
    },

    row: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },

    divider: {
        backgroundColor: 'white',
        height: .3,
        display: 'flex',
        margin: 8
    },

    iconWrapper: {
        marginLeft: 16,
        borderRadius: 4,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)'
    },

    title: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Roboto',
        marginLeft: 16
    }
}

export default CatergoryList;
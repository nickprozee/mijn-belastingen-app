import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet, Dimensions, LayoutAnimation } from 'react-native';

class FullScreenSpinner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displaySpinner: false,
            displayBackground: false,
        }
    }

    componentDidMount() {
        this.fadeInSpinner();
    }

    fadeInSpinner = () => setTimeout(() => {
            // fade in background
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                displayBackground: true
            },
                () => setTimeout(
                    () => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                        this.setState({
                            displaySpinner: true
                        })
                    },
                    300 //delay spinner
                ))
        }, 100 //Background delay
    );

    render() {
        return <View style={[styles.spinnerWrapper, {
            backgroundColor: 'transparent'
        }]}>
            {

                this.state.displayBackground &&
                <View style={styles.spinnerWrapper}>

                    {
                        this.state.displaySpinner &&
                        <ActivityIndicator animating color="#FFF" size={40} />
                    }

                    {
                        this.state.displaySpinner &&
                        <Text style={styles.text}>{this.props.text}</Text>
                    }

                </View>
            }
        </View>

    }

}

const styles = StyleSheet.create({

    spinnerWrapper: {
        position: 'absolute',
        display: 'flex',
        flex: 1,

        backgroundColor: 'rgba(0,0,0,.7)',
        alignItems: 'center',
        justifyContent: 'center',

        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
    },

    text: {
        fontSize: 20,
        marginTop: 12,
        color: "#FFF",
    }

});

export default FullScreenSpinner;
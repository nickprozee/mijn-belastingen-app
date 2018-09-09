import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';


class MarginComponent extends React.Component {
    render() {
        return <View style={{ height: (this.props.space * 16) }} />
    }
}

MarginComponent.propTypes = {
    space: PropTypes.number.isRequired
};

export default MarginComponent;
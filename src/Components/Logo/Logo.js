import React from 'React';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

const logo = require('../../Assets/logo.png');

class Logo extends React.Component {

    render() {
        const style = {
            height: this.props.maxWidthPercentage + '%',
            aspectRatio: 1
        }
        
        return <Image resizeMethod='scale' style={style} source={logo} />
    }

}

Logo.propTypes = {
    maxWidthPercentage: PropTypes.number.isRequired
};

export default Logo;
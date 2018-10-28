
import React from 'React';

import { navigate } from '../../Actions/navigationActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class KeyboardAvoidingViewHandler extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.nav.screen !== this.props.nav.screen) {
            const {navigate} =  this.props.navigation;
            navigate(nextProps.nav.screen);
        }
    }

    render() {
        return this.props.children;
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ onNavigate: navigate }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardAvoidingViewHandler);
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  currUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: (callback) => dispatch(logout(callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));

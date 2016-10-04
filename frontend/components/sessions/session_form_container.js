import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: (session.currentUser === null) ? false : true,
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  formType: ownProps.location.pathname === '/login' ? 'login' : 'signup',
  processForm: (user, formType) => {
    if (formType === 'login') {
      dispatch(login(user));
    } else {
      dispatch(signup(user));
    }
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

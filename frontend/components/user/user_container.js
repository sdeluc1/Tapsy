import { connect } from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = (state) => ({
  user: state.user,
  currUser: state.session.currentUser
});


export default connect(
  mapStateToProps
)(UserShow);

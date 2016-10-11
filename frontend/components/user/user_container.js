import { connect } from 'react-redux';
import UserShow from './user_show';
import { createFollow, deleteFollow, requestFollows } from '../../actions/follow_actions';
import { receiveCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  user: state.user,
  currUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (followId) => dispatch(deleteFollow(followId)),
  requestFollows: () => dispatch(requestFollows()),
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);

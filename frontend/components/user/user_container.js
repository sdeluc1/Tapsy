import { connect } from 'react-redux';
import UserShow from './user_show';
import { createFollow, deleteFollow, toggleFollow } from '../../actions/follow_actions';

const mapStateToProps = (state) => {
  debugger
  return{user: state.user,
  currUser: state.session.currentUser,
  followStatus: state.follow
};};

const mapDispatchToProps = (dispatch) => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (followId) => dispatch(deleteFollow(followId)),
  toggleFollow: () => dispatch(toggleFollow())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);

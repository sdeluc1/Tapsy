import { connect } from 'react-redux';
import UserShow from './user_show';
import { createFollow, deleteFollow, requestFollows } from '../../actions/follow_actions';
import { requestUserReviews, removeReview } from '../../actions/review_actions';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  user: state.user,
  currUserId: state.session.currentUser ? state.session.currentUser.id : {},
  currFollow: state.session.following,
  follows: state.session.follows_arr,
  allFollows: state.follows,
  reviews: state.reviews
});

const mapDispatchToProps = (dispatch) => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  requestFollows: () => dispatch(requestFollows()),
  moreReviews: (userId, offset, appending) => dispatch(requestUserReviews(userId, offset, appending)),
  removeReview: (id) => dispatch(removeReview(id)),
  requestUser: (id) => dispatch(requestUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);

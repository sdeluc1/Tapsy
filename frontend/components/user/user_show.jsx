import React from 'react';

const UserShow = (props) => {
  if(props.user.loading) {
    return <div></div>;
  } else {
    return(
      <div>
        Showing page for {props.user.name}
      </div>
    );
  }
};

export default UserShow;

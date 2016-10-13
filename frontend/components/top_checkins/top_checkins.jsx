import React from 'react';
import TopCheckinsItem from './top_checkins_item';

const TopCheckins = (props) => {

  return(
    <div className="group main-top-checkins">
      <header className="top-checkins-header">
        Top Check-ins
      </header>
      <ul className="top-checkins-list">
        {
          Object.keys(props.topCheckins).map( (checkin, idx) => {
            return(
              <TopCheckinsItem
                key={idx} 
                topCheckin={checkin}
                count={props.topCheckins[checkin].count}
                beerId={props.topCheckins[checkin].beer_id}
              />
            );
          })
        }
      </ul>
    </div>
  );

};

export default TopCheckins;

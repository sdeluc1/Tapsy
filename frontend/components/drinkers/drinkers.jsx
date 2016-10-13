import React from 'react';
import DrinkersItem from './drinkers_item';

const Drinkers = (props) => {

  return(
    <div className="group main-drinkers">
      <header className="drinkers-header">
        Loyal Drinkers
      </header>
      <ul className="drinkers-list">
        {
          Object.keys(props.drinkers).map( (drinker, idx) => {
            return(
              <DrinkersItem
                key={idx}
                drinker={drinker}
                checkins={props.drinkers[drinker].count} 
                userId={props.drinkers[drinker].user_id}
              />
            );
          })
        }
      </ul>
    </div>
  );

};

export default Drinkers;

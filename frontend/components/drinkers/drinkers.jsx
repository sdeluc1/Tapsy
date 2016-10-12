import React from 'react';
import DrinkersItem from './drinkers_item';

const Drinkers = (props) => {
  // const drinkersLimit = () => {
  //   return Object.keys(props.drinkers).slice(0, 20);
  // };

  return(
    <div className="group main-drinkers">
      <header className="drinkers-header">
        Loyal Drinkers
      </header>
      <ul className="drinkers-list">
        {
          Object.keys(props.drinkers).map( (drinker, idx) => {
            return <DrinkersItem key={idx} drinker={drinker} checkins={props.drinkers[drinker]} />;
          })
        }
      </ul>
    </div>
  );

};

export default Drinkers;

import React from 'react';
import TopBeersItem from './top_beers_item';

const TopBeers = (props) => {

  return(
    <div className="group main-top-beers">
      <header className="top-beers-header">
        Top Rated Beers
      </header>
      <ul className="top-beers-list">
        {
          Object.keys(props.topBeers).map( (beer, idx) => {
            return(
              <TopBeersItem
                key={idx}
                topBeer={beer}
                rating={props.topBeers[beer].rating}
                beerId={props.topBeers[beer].beer_id}
              />
            );
          })
        }
      </ul>
    </div>
  );

};

export default TopBeers;

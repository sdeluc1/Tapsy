import React from 'react';
import BeerHeader from './beer_header';

const BeerShow = (props) => {

    if (props.loading) {
      return(
        <div></div>
      );
    } else {
      return(
        <div className="main-show-beer">
          <BeerHeader beer={props.showBeer} />
        </div>
      );
    }

};

export default BeerShow;

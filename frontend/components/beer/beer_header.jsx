import React from 'react';

const BeerHeader = (props) => {


    const ratingVal = () => {
      debugger
      const percent = Math.round(props.beer.avg_rating * 4) / 4 / 5;
      const pixels = (percent * 20) * 26;
      return pixels;
    };

    const ratingCaps = {
      backgroundImage: "url('https://s3.amazonaws.com/tapsy-pro/reviews/images/ratings.png')",
      backgroundPosition: `0 -${ratingVal()}px`,
      backgroundSize: "129px 546px"
    };

    return(
      <header className="group beer-header">
        <div className="beer-icon"></div>
        <div className="info-list">
          <strong id="beer-name">{props.beer.name}</strong>
          <a href={`#/brewery/${props.beer.brewery.id}`}>
            <strong id="brewery-name">{props.beer.brewery.name}</strong>
          </a>
          <strong id="beer-style">{props.beer.style}</strong>
        </div>
        <div className="num-reviews">
          <p id="total-box">
            <strong id="total">TOTAL</strong>
            <strong id="total-beer-reviews">{props.beer.rev_count}</strong>
          </p>
          <p id="you-box">
            <strong id="you">YOU</strong>
            <strong id="user-beer-reviews">{props.beer.user_reviews}</strong>
          </p>
        </div>
        <div className="info-bar">
          <strong id="abv" className="beer-bar-item">{props.beer.abv}% ABV</strong>
          <strong id="ibu"className="beer-bar-item">{props.beer.ibu} IBU</strong>
          <strong id="rating" className="rating-caps beer-bar-item" style={ratingCaps}></strong>
          <strong id="num-ratings" className="beer-bar-item">{props.beer.rev_count} total</strong>
          <strong id="date-added" className="beer-bar-item">Added {props.beer.created_at} ago</strong>
        </div>
        <div className="beer-description">{props.beer.description}</div>
        <div className="beer-check-boxes">
          <div className="wishlist-box">
            <strong id="plus-sign">+</strong>
          </div>
          <div className="click-checkbox" onClick={props.openReviewModal}>
            <div className="checkin-box" >
              <strong id="checkmark">&#10004;</strong>
            </div>
          </div>
        </div>

      </header>
    );

};

export default BeerHeader;

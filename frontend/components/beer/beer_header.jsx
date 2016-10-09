import React from 'react';
import AddReviewContainer from '../reviews/add_review_container';

// const appElement = document.getElementById('add-review-modal');

class BeerHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = { modalDisplay: {display: 'none' }};

    this.openReviewModal = this.openReviewModal.bind(this);
    this.closeReviewModal = this.closeReviewModal.bind(this);
  }

  openReviewModal(){
    this.setState({ modalDisplay: { display: 'block' } });
  }

  closeReviewModal(){
    this.setState({ modalDisplay: { display: 'none' } });
  }

  render() {

    return(
      <header className="group beer-header">
        <div className="beer-icon"></div>
        <div className="info-list">
          <strong id="beer-name">{this.props.beer.name}</strong>
          <a href={`#/brewery/${this.props.beer.brewery.id}`}>
            <strong id="brewery-name">{this.props.beer.brewery.name}</strong>
          </a>
          <strong id="beer-style">{this.props.beer.style}</strong>
        </div>
        <div className="num-reviews">
          <p id="total-box">
            <strong id="total">TOTAL</strong>
            <strong id="total-beer-reviews">{this.props.beer.rev_count}</strong>
          </p>
          <p id="you-box">
            <strong id="you">YOU</strong>
            <strong id="user-beer-reviews">12</strong>
          </p>
        </div>
        <div className="info-bar">
          <strong id="abv" className="beer-bar-item">{this.props.beer.abv}% ABV</strong>
          <strong id="ibu"className="beer-bar-item">{this.props.beer.ibu} IBU</strong>
          <strong id="rating" className="beer-bar-item">RATING OOOOO</strong>
          <strong id="num-ratings" className="beer-bar-item"># of ratings</strong>
          <strong id="date-added" className="beer-bar-item">Added 10/6/16</strong>
        </div>
        <div className="beer-description">{this.props.beer.description}</div>
        <div className="beer-check-boxes">
          <div className="wishlist-box">
            <strong id="plus-sign">+</strong>
          </div>
          <div className="checkin-box" onClick={this.openReviewModal}>
            <strong id="checkmark">&#10004;</strong>
          </div>
        </div>
        <div id="modal-overlay" style={this.state.modalDisplay}></div>
        <div className="add-review-modal" style={this.state.modalDisplay}>
          <AddReviewContainer beerId={this.props.beer.id} close={this.closeReviewModal}/>
        </div>
      </header>
    );
  }

};

export default BeerHeader;

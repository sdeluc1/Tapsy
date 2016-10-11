import React from 'react';
import { Link } from 'react-router';
import merge from 'lodash/merge';
import Modal from 'react-modal';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {
        name: "",
        brewery_id: ""
      },
      brewery: {
        name: "",
        location: ""
      },
      open: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      const newState = merge(this.state[this.props.formType], { [field]: e.currentTarget.value });
      this.setState({
        [this.props.formType]: newState
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.formType === 'beer') {
      this.props.processForm({ beer: this.state.beer }, "beer");
    } else {
      this.props.processForm({ brewery: this.state.brewery }, "brewery");
    }
    this.props.close;
  }

  getErrors(){
    let errors = this.props.errors;
    if (typeof errors === 'undefined'){
      errors = [];
    }

    const errorList = (
      <ul>
        {
          errors.map((error, idx) => {
            return <li key={idx}>{error}</li>;
          }
        )}
      </ul>
    );
    return errorList;
  }


  render(){
    this.errors = this.errors || "";
    const addBeerForm = (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <p id="close-modal" onClick={this.props.close}></p>
        <strong className="form-title">ADD BEER</strong>
        {this.errors}
        <input className="name" type="text" onChange={this.update("name")} placeholder="Beer Name"/>
        <select onChange={this.update("brewery_id")}>
          <option selected disabled>Choose Brewery</option>
          {
              this.props.breweries.list.map((brewery, idx) => {
              return <option key={idx} value={brewery.id}>{brewery.name}</option>;
            })
          }
        </select>
        <strong onClick={this.props.openBrewery} className="add-brewery-link">Add Brewery</strong>
        <input className="short-input" type="text" onChange={this.update("style")} placeholder="Style"/>
        <input className="short-input" type="text" onChange={this.update("abv")} placeholder="ABV"/>
        <input className="short-input" type="text" onChange={this.update("ibu")} placeholder="IBU"/>
        <textarea onChange={this.update("description")} placeholder="Description"></textarea>

        <button>Submit Beer</button>
      </form>
    );

    const addBreweryForm = (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <p id="close-modal" onClick={this.props.close}></p>
        <strong className="form-title">ADD BREWERY</strong>
        <input className="name" type="text" onChange={this.update("name")} placeholder="Brewery Name"/>
        <input className="loc-type" type="text" onChange={this.update("location")} placeholder="Location"/>
        <input className="loc-type" type="text" onChange={this.update("brewery_type")} placeholder="Type of Brewery"/>
        <textarea onChange={this.update("description")} placeholder="Description" ></textarea>

        <button>Submit Brewery</button>
      </form>
    );

    if(this.props.formType === 'beer'){
      return(

        <div className="main-add-form">
          {addBeerForm}
          {this.errors}
        </div>
      );
    } else {
      return(
        <div className="main-add-form">
          {addBreweryForm}
        </div>
      );
    }

  }
}

export default AddForm;

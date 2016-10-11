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
    this.closeForm = this.closeForm.bind(this);
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
    this.props.close();
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

  closeForm() {
    this.setState({
      beer: {
        name: "",
        brewery_id: "",
        abv: "",
        ibu: "",
        style: "",
        description: ""
      },
      brewery: {
        name: "",
        location: "",
        description: "",
        brewery_type: ""
      },
      open: false
    });
    this.props.close();
  }


  render(){
    this.errors = this.errors || "";
    const addBeerForm = (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <p id="close-modal" onClick={this.closeForm}></p>
        <strong className="form-title">ADD BEER</strong>
        {this.errors}
        <input className="name" type="text" onChange={this.update("name")} placeholder="Beer Name" value={this.state.beer.name}/>
        <select defaultValue="Choose Brewery" onChange={this.update("brewery_id")}>
          <option disabled>Choose Brewery</option>
          {
              this.props.breweries.list.map((brewery, idx) => {
              return <option key={idx} value={brewery.id}>{brewery.name}</option>;
            })
          }
        </select>
        <strong onClick={this.props.openBrewery} className="add-brewery-link">Add Brewery</strong>
        <input className="short-input" type="text" onChange={this.update("style")} placeholder="Style" value={this.state.beer.style}/>
        <input className="short-input" type="text" onChange={this.update("abv")} placeholder="ABV" value={this.state.beer.abv}/>
        <input className="short-input" type="text" onChange={this.update("ibu")} placeholder="IBU" value={this.state.beer.ibu}/>
        <textarea onChange={this.update("description")} placeholder="Description" value={this.state.beer.description}></textarea>

        <button>Submit Beer</button>
      </form>
    );

    const addBreweryForm = (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <p id="close-modal" onClick={this.closeForm}></p>
        <strong className="form-title">ADD BREWERY</strong>
        <input className="name" type="text" onChange={this.update("name")} placeholder="Brewery Name" value={this.state.brewery.name}/>
        <input className="loc-type" type="text" onChange={this.update("location")} placeholder="Location" value={this.state.brewery.location}/>
        <input className="loc-type" type="text" onChange={this.update("brewery_type")} placeholder="Type of Brewery" value={this.state.brewery.brewery_type}/>
        <textarea onChange={this.update("description")} placeholder="Description" value={this.state.brewery.description}></textarea>

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

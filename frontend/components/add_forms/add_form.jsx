import React from 'react';
import { Link } from 'react-router';
import merge from 'lodash/merge';

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
      }
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
  }

  render(){
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

    const addBeerForm = (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <strong className="form-title">ADD BEER</strong>
        <input className="name" type="text" onChange={this.update("name")} placeholder="Beer Name"/>
        <select onChange={this.update("brewery_id")}>
          <option selected disabled>Choose Brewery</option>
          {
            Object.keys(this.props.breweries).map((id, idx) => {
              return <option key={idx} value={id}>{this.props.breweries[id].name}</option>;
            })
          }
        </select>
        <Link className="add-brewery-link" to="/add-brewery">Add Brewery</Link>
        <input className="short-input" type="text" onChange={this.update("style")} placeholder="Style"/>
        <input className="short-input" type="text" onChange={this.update("abv")} placeholder="ABV"/>
        <input className="short-input" type="text" onChange={this.update("ibu")} placeholder="IBU"/>
        <textarea onChange={this.update("description")} placeholder="Description"></textarea>

        <button>Submit Beer</button>
      </form>
    );

    const addBreweryForm = (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <strong className="form-title">ADD BREWERY</strong>
        <input className="name" type="text" onChange={this.update("name")} placeholder="Brewery Name"/>
        <input className="loc-type" type="text" onChange={this.update("location")} placeholder="Location"/>
        <input className="loc-type" type="text" onChange={this.update("brewery_type")} placeholder="Type of Brewery"/>
        <textarea onChange={this.update("description")} placeholder="Description" ></textarea>

        <button>Submit Brewery</button>
      </form>
    );
    debugger
    if(this.props.formType === 'beer'){
      return(
        <div className="main-add-form">
          {errorList}
          {addBeerForm}
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

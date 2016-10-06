import React from 'react';
import { Link } from 'react-router';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {
        // name: "",
        // brewery_id: "",
        // style: "",
        // abv: "",
        // ibu: "",
        // description: ""
      },
      brewery: {
        // name: "",
        // location: "",
        // brewery_type: "",
        // description: ""
      }
    };
  }

  update(field) {
    console.log(this.state);
    return e => this.setState({
      [this.props.formType]: {[field]: e.currentTarget.value}
    });
  }

  render(){

    const addBeerForm = (
      <form className="add-form">
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
        <Link to="/add-brewery">Add Brewery</Link>
        <input type="text" onChange={this.update("style")} placeholder="Beer Style"/>
        <input type="text" onChange={this.update("abv")} placeholder="ABV"/>
        <input type="text" onChange={this.update("ibu")} placeholder="IBU"/>
        <textarea onChange={this.update("description")}>Description</textarea>

        <button>Submit Beer</button>
      </form>
    );

    return(
      <div className="main-add-form">
        {addBeerForm}
      </div>
    );

  }
}

export default AddForm;

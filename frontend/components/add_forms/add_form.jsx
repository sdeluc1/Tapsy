import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {
        name: "",
        brewery_id: "",
        style: "",
        abv: "",
        ibu: "",
        description: ""
      },
      brewery: {
        name: "",
        location: "",
        brewery_type: "",
        description: ""
      }
    };
  }

  render(){

    const addBeerForm = (
      <form>

        <select>

        </select>

      </form>
    );

    return(
      <div>
        ADD BEER/BREWERY FORMS COMING SOON!!!
      </div>
    );

  }
}

export default AddForm;

// <input type="text" onChange={this.update("name", "beer")} placeholder="Beer Name"/>

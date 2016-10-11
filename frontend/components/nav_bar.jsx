import React from 'react';
import AddFormContainer from './add_forms/add_form_container';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addBeer: {display: 'none' },
      addBrewery: {display: 'none'},
      background: {display: 'none'}
    };

    this.openBeerModal = this.openBeerModal.bind(this);
    this.openBreweryModal = this.openBreweryModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openBeerModal() {
    this.setState( { addBeer: {display: 'block'}, background: { display: 'block '} } );
  }

  openBreweryModal() {
    this.setState( { addBrewery: {display: 'block'}, background: { display: 'block '} } );
  }

  closeModal(formType) {
    this.setState({
      addBeer: { display: 'none' },
      addBrewery: { display: 'none' },
      background: { display: 'none' }
    });
  }

  render(){
    return(
      <header className="nav-bar-main">
        <nav className="group nav-bar">
          <a href="/#/home">
            <div className="nav-logo">
              <strong className="nav-logo-main">TAPSY</strong>
              <strong className="nav-logo-sub">GET DRAFTED</strong>
            </div>
          </a>
          <ul>
            <a href="#/thebrews"><li>The Brews</li></a>
            <a onClick={this.openBeerModal}><li >Add Beer</li></a>
            <a onClick={this.openBreweryModal}><li>Add Brewery</li></a>
          </ul>
          <div className="nav-right">
            <div className="nav-user-pic"></div>
            <form className="search">
              <input className="nav-search" type="text" placeholder="Find a beer or brewery..." />
            </form>
          </div>
          <div id="modal-overlay" style={this.state.background} />
          <div className="add-beer-modal" style={this.state.addBeer}>
            <AddFormContainer formType="beer" close={this.closeModal}/>
          </div>
          <div className="add-beer-modal" style={this.state.addBrewery}>
            <AddFormContainer formType="brewery" close={this.closeModal}/>
          </div>

        </nav>
      </header>
    );
  }
}

export default NavBar;

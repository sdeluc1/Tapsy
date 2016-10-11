import React from 'react';
import AddFormContainer from './add_forms/add_form_container';
import { Link } from 'react-router';
import { logout } from '../util/session_api_util';

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
    this.handleLogout = this.handleLogout.bind(this);
  }

  openBeerModal() {
    this.setState( {
      addBeer: {display: 'block'},
      addBrewery: {display: 'none'},
      background: { display: 'block '}
    } );
  }

  openBreweryModal() {
    this.setState( {
      addBeer: {display: 'none'},
      addBrewery: {display: 'block'},
      background: { display: 'block '}
    } );
  }

  closeModal(formType) {
    this.setState({
      addBeer: { display: 'none' },
      addBrewery: { display: 'none' },
      background: { display: 'none' }
    });
  }

  handleLogout() {
    const success = () => {
      this.props.router.push('/login');
    };
    logout(success);
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
          <ul className="nav-list">
            <a href="#/thebrews"><li>The Brews</li></a>
            <a onClick={this.openBeerModal}><li >Add Beer</li></a>
            <a onClick={this.openBreweryModal}><li>Add Brewery</li></a>
          </ul>
          <div className="nav-right">
            <div className="dropdown-content">
              <div className="nav-user-pic"></div>
              <ul className="hidden-list">
                <Link to='/home'><li>Recent Activity</li></Link>
                <Link to={`/user/${this.props.currUser.id}`}><li>My Profile</li></Link>
                <li onClick={this.handleLogout}>Log Out</li>
              </ul>
            </div>
            <form className="search">
              <input className="nav-search" type="text" placeholder="Find a beer or brewery..." />
            </form>
          </div>
          <div onClick={this.closeModal} id="modal-overlay" style={this.state.background} />
          <div className="add-beer-modal" style={this.state.addBeer}>
            <AddFormContainer formType="beer" close={this.closeModal} openBrewery={this.openBreweryModal}/>
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

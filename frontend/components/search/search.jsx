import React from 'react';
import Autosuggest from 'react-autosuggest';
import { Link, withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.clear = this.clear.bind(this);
  }

  getSuggestionValue() {
    return "";
  }

  clear() {
    // this.setState({ value: '' });
    $(".react-autosuggest__input").val("");
  }

  renderSuggestion(suggestion) {
    if(suggestion.location){
      return(
        <Link to={`brewery/${suggestion.id}`} onClick={this.clear}>
          <strong>{suggestion.name}</strong>
          <strong id='search-sub'>{suggestion.location}</strong>
        </Link>
      );
    } else {
      return(
        <Link to={`beer/${suggestion.id}`} onClick={this.clear}>
          <strong>{suggestion.name}</strong>
          <strong id='search-sub'>{suggestion.brewery}</strong>
        </Link>
      );
    }
  }



  handleSubmit(e) {
    e.preventDefault();
    if(suggestion){
      this.props.router.push(`/beer/${suggestion.id}`);
    }
  }


  render() {

    const value = this.state.value;
    const suggestions = this.props.beerSearch || [];

    const onChange = (event, { newValue }) => {
      this.setState({
        value: newValue
      });
    };

    const onSuggestionsFetchRequested = ({ value }) => {
      this.props.requestSearch(value);
    };

    const onSuggestionsClearRequested = () => {

    }

    const shouldRenderSuggestions = function(value) {
      return value.trim().length > 1;
    }

    const renderSectionTitle = function(section) {
      return <strong>{section.title}</strong>;
    }

    const getSectionSuggestions = function(section) {
      if(section.beers.length > 0){
        return section.beers;
      } else {
        return section.breweries;
      }
    }


    const inputProps = {
      placeholder: 'Find a beer or brewery...',
      value,
      onChange: onChange
    };

    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <div className="nav-search">
          <Autosuggest
            suggestions={suggestions}
            multiSection={true}
            focusFirstSelection={true}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            shouldRenderSuggestions={shouldRenderSuggestions}
            renderSectionTitle={renderSectionTitle}
            getSectionSuggestions={getSectionSuggestions}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
            />
        </div>
      </form>
    );

  }
}

export default withRouter(Search);

import React from 'react';
import Autosuggest from 'react-autosuggest';
import { Link, withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
  }

  getSuggestionValue(suggestion) {
    this.suggestion = suggestion;
    return suggestion.name;
  }

  renderSuggestion(suggestion) {
    return <Link to={`/beer/${suggestion.id}`}>{suggestion.name}</Link>;
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
    debugger

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
      return value.trim().length > 2;
    }

    const inputProps = {
      placeholder: 'Search for a beer...',
      value,
      onChange: onChange
    };

    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <div className="nav-search">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            shouldRenderSuggestions={shouldRenderSuggestions}
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

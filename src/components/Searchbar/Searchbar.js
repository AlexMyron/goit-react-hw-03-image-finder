import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, Bar, SearchBtn, SerchBtnLabel, SearchInput } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleSearchInput = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendInputValue(this.state.inputValue);
  };

  render() {
    return (
      <Form>
        <Bar onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <SerchBtnLabel />
          </SearchBtn>

          <SearchInput
            type="text"
            value={this.state.inputValue}
            onChange={this.handleSearchInput}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Bar>
      </Form>
    );
  }
}

Searchbar.propTypes = { sendInputValue: PropTypes.func.isRequired };

export default Searchbar;

import PropTypes from 'prop-types';
import { useState } from 'react';
import { Component } from 'react';
import { Form, Bar, SearchBtn, SerchBtnLabel, SearchInput } from './Searchbar.styled';

const Searchbar = ({ sendInputValue }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchInput = e => {
    // this.setState({ inputValue: e.currentTarget.value });
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendInputValue(inputValue);
  };

  return (
    <Form>
      <Bar onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <SerchBtnLabel />
        </SearchBtn>

        <SearchInput
          type="text"
          value={inputValue}
          onChange={handleSearchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Bar>
    </Form>
  );
};

// ----------------
class classedSearchbar extends Component {
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

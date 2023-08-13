import { Component } from "react";
import './search-box.styles.css';

export const SearchBoxFunctional = ({className, placeholder, onChangeHandler}) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

export default class SearchBox extends Component {
    render(){
        const {className, placeholder, onChangeHandler} = this.props;
        return (
          <input
            className={`search-box ${className}`}
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler}
          />
        )
    }
}


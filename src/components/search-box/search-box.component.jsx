import { Component } from "react";

export default class SearchBox extends Component {
    render(){
        return (
          <input
            className={`search-box ${this.props.className}`}
            type="search"
            placeholder={this.props.placeholder}
            onChange={onChangeHandler}
          />
        )
    }
}


import { Component } from 'react';

import './card.styles.css';

export default class Card extends Component {
  render() {
    const { imageAltText, uniqueId, header, paragraph} = this.props;
    return (
      <>
        <img alt={imageAltText}
            src={`https://robohash.org/${uniqueId}?set=set2&size=180x180`}
        />
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </>
    )
  }
}

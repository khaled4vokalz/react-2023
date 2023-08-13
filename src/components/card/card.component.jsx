import { Component } from 'react';

import './card.styles.css';

export const CardFunctional = ({imageAltText, imageSrc, header, paragraph}) => {
  return (
    <>
      <img alt={imageAltText} src={imageSrc}/>
      <h2>{header}</h2>
      <p>{paragraph}</p>
    </>
  )
}

export default class Card extends Component {
  render() {
    const { imageAltText, imageSrc, header, paragraph} = this.props;
    return (
      <>
        <img alt={imageAltText} src={imageSrc}/>
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </>
    )
  }
}

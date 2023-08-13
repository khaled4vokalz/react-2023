import { Component } from "react";
import Card, { CardFunctional } from '../card/card.component';

import './card-list.styles.css';

export const CardListFunctional = ({ collection }) => {
    return (
        <div className="card-list">
        {collection.map((item) => {
                const {name, email, id, imageSrc} = item;
                return (
                    <div className='card-container' key={id}>
                        <CardFunctional imageSrc={imageSrc} header={name} paragraph={email} imageAltText={`item ${name}`}/>
                    </div>
                )
            })}
        </div>
    )
}

export default class CardList extends Component {
    render(){
        const { collection } = this.props;
        return (
            <div className="card-list">
            {collection.map((item) => {
                    const {name, email, id} = item;
                    return (
                        <div className='card-container' key={id}>
                            <Card uniqueId={id} header={name} paragraph={email} imageAltText={`item ${name}`}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}


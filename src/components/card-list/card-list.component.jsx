import { Component } from "react";

export default class CardList extends Component {
    render(){
        const { collection } = this.props;
        return (
            <div className="card-list">
            {
                collection.map(item => {
                    const {name, email, id} = item;
                    return (
                        <div className='card-container' key={id}>
                            <img 
                                alt={`item ${name}`}
                                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                            />
                            <h2>{name}</h2>
                            <p>{email}</p>
                        <div/>
                    )

                })
            }
            </div>
        )
    }
}


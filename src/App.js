import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      this.setState(
        () => {
          return { monsters: users }
        },
        () => {
          console.log(this.state);
        }
      )
    })
  }

  render() {
    return (
      <div className="App">
        <input 
          className="search-box" 
          type='search' 
          placeholder="search monsters" 
          onChange={(event) => {
            const searchString = event.target.value.toLowerCase();
            const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(searchString));
            this.setState(() => {
              return {
                monsters: filteredMonsters
              }
            })
          
          }}/>
        {this.state.monsters.map((monster, index) => {
          return <h1 key={index}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;

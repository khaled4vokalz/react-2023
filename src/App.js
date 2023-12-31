import { Component, useState, useEffect } from 'react';
import CardList, { CardListFunctional } from "./components/card-list/card-list.component";
import SearchBox, { SearchBoxFunctional } from "./components/search-box/search-box.component";

import "./App.css";

export const AppFunctional = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // only run this on mount, [] dependency array is used for that
  // works as `componentDidMount` hook on Class Components
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users.map(({ id, name, email }) => 
        ({id, name, email, 
          imageSrc:`https://robohash.org/${id}?set=set2&size=180x180` }))));
  }, [])

  // only update the filtered monsters list if monsters array
  // or the search string changes
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBoxFunctional placeholder="search monsters" onChangeHandler={onSearchChange}/>
      <CardListFunctional collection={filteredMonsters}/>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" onChangeHandler={onSearchChange}/>
        <CardList collection={filteredMonsters}/>
      </div>
    );
  }
}

export default App;

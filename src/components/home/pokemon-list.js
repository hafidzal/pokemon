import React from 'react';
import { Component } from 'react';
import PokeCard from './pokemonCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
        pokemon: [],
        pokemonDetails: []
    }    
  }

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data) {
                this.setState({pokemon : data.results}, () => {
                    this.state.pokemon.map(poke => {
                        fetch(poke.url)
                            .then(response => response.json())
                            .then(data => {
                                if (data) {
                                    var temp = this.state.pokemonDetails
                                    temp.push(data)
                                    this.setState({pokemonDetails: temp})
                                }            
                            })
                            .catch(e => console.log(e))
                      })
                })
            }
        })
        .catch(e => console.log(e))
  }

  render() {
    const { pokemonDetails } = this.state;

    const renderPokemon = pokemonDetails.map((pokemon, index) => {
        return (<PokeCard pokemon={pokemon} />);
      });
    
    return (
        <div className="flex-container">
            {renderPokemon}
        </div>     
    );
  }
}

export default App;
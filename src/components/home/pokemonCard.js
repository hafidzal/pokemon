import React, { Component } from 'react';

class PokemonCard extends Component {
      constructor() {
        super();
        this.state = {
          count: 0,
          weight: 0,
        }

        this.addWeight = this.addWeight.bind(this);
      }

      componentDidMount(){
          this.setState({
              weight: this.props.pokemon.weight
          })
      }

      addWeight = () => {
          this.setState({
                weight: this.state.weight + 1
          })
      }


      render() {
        const { pokemon } = this.props;

        return (
            <div style={{"maxWidth" : "30rem"}} key={pokemon.id}>
                <div className="pokemon-name"><b>{pokemon.name}</b></div>
                <div>          
                    <div className="pokemon-images">
                        <img src={pokemon.sprites['front_default']} />
                        <img src={pokemon.sprites['back_default']} />  
                    </div>
                    <div className="pokemon-info">
                        <ul>
                            <li>Id: {pokemon.id}</li>
                            <li>Height: {pokemon.height}</li> 
                            <li>Weight: {this.state.weight} <span><button onClick={this.addWeight}>+</button></span></li>
                        </ul>
                    </div>
                </div>
            </div>          
        )
      }
    }

export default PokemonCard;

import React from 'react';
import { Component } from 'react';
import GhibliCard from './ghibliCard';

class Ghibli extends Component {
  constructor() {
    super();
    this.state = {
        film: [],
        filmDetails: []
    }    
  }

  componentDidMount() {
    let url = "https://ghibliapi.herokuapp.com/films";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('data: ', data);
            if (data) {
                this.setState({
                    film: data
                })
            }
        })
        .catch(e => console.log(e))
  }

  render() {
    const { film } = this.state;

    const renderFilm = film.map((filmDetails, index) => {
        return (<GhibliCard filmDetails={filmDetails} />);
      });
    
    return (
        <div className="flex-container">
            {renderFilm}
        </div>     
    );
  }
}

export default Ghibli;
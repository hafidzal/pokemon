import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar-style">
            <div className="navbar-title-style">
                <h1>Pokemon x Ghibli</h1>
            </div>
            <div className="navbar-list-style">
                <ul> 
                    <li><a href="/">Pokemon</a></li>
                    <li><a href="/ghibli">Ghibli</a></li>
                </ul>
            </div>
        </nav>
    )
  }
}
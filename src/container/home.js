import React, { Component } from 'react';
import Navbar from '../components/navbar';
import PokemonList from '../components/home/pokemon-list';
// import UserList from '../components/userList';

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <PokemonList />
                {/* <UserList /> */}
            </div>
        );
    }
}

export default Home;
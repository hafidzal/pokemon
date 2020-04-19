import React, { Component } from 'react';
import Navbar from '../components/navbar';
import GhibliList from '../components/home/ghibli-list';

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <GhibliList />
            </div>
        );
    }
}

export default Home;
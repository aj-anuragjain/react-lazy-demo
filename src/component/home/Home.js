import React from 'react'
import {Link} from 'react-router-dom';


const Home = () => (
    <div className="home">
       <header className="App-header">
            Home Page
        </header>
        <Link to="/contact">Contact</Link>
    </div>
);


export default Home;

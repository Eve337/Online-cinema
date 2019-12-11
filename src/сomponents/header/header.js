import React from 'react';
import ReactDOM from 'react-dom';


function NavBar(props) {
    return (
    <header>
    <ul className="nav">
        <li className="nav-item p-2 bd-highlight">
            <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item p-2 bd-highlight">
            <a className="nav-link active" href="#">Films</a>
        </li>
        <li className="nav-item ml-auto p-2 bd-highlight">
            <a className="nav-link active" href="#">Profile</a>
        </li>
    </ul>
</header>
);}

  export default NavBar;
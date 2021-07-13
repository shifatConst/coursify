import React from 'react';

const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
                <a className="navbar-brand" href="#home">COURSIFY</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#service">SERVICE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#team">TEAMS</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;
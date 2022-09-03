import React from 'react'
import LogoIcon from './images/logo.svg';
import './styles/main.scss';
import './styles/nav.scss';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#home">
                        <img src={LogoIcon} alt="Crappo logo" />
                    </a>
                    <button className="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-white border border-0"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active hover-un" aria-current="page" href="#home">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hover-un" href="#home">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hover-un" href="#home">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hover-un" href="#home">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Login
                                <span className="b-divider"> |</span>
                                </a>
                            </li>
                            <div className="nav-register">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Register</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
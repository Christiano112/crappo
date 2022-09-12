import React from 'react'
import LogoIcon from './images/logo.svg';
import './styles/main.scss';
import './styles/nav.scss';


function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark border border-0">
                <div className="container">
                    <a className="navbar-brand" href="#home">
                        <img src={LogoIcon} alt="Crappo logo" />
                    </a>
                    <button className="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="border border-0">
                            <svg stroke="#fff" fill="#fff" stroke-width="0" viewBox="0 0 20 20" class="lg:hidden text-3xl text-white cursor-pointer" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </span>
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
                            <div className="d-flex align-content-center justify-content-center">
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
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
import React from 'react'
import LogoIcon from './images/logo.svg';
import './styles/main.scss';
import './styles/nav.scss';


function Nav() {
    const hideNav = () => {
        document.getElementById("navbarNav").style.display = "none";
        document.getElementById("showSVG").style.display = "block";
        document.getElementById("hideSVG").style.display = "none";
    }

    const showNav = () => {
        document.getElementById("hideSVG").style.display = "block";
        document.getElementById("showSVG").style.display = "none";
        document.getElementById("navbarNav").style.display = "block";
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="#home">
                        <img src={LogoIcon} alt="Crappo logo" />
                    </a>
                    <button className="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="border border-0">
                            <svg id="showSVG" onClick={showNav} stroke="#fff" fill="#fff" strokeWidth="0" viewBox="0 0 20 20" className="lg:hidden text-3xl text-white cursor-pointer" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg id="hideSVG" onClick={hideNav} stroke="#fff" fill="#fff" stroke-width="0" viewBox="0 0 512 512" className="text-3xl absolute right-6 top-6 cursor-pointer " height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>
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
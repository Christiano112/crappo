import React from 'react';
import './styles/main.scss';
import './styles/why.scss';

function Why() {

    return (
        <div>
            <section className="container why">
                <div className="row why-header">
                    <div className="col-lg-4">
                        <div className="icon">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="blue" height="30" width="30" xmlns="http://www.w3.org/2000/svg" style={{ color: "blue" }}><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path></svg>
                        </div>
                        <div>
                            <h3>$30B</h3>
                            <p>Digital Currency Exchange</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="blue" height="30" width="30" xmlns="http://www.w3.org/2000/svg" style={{ color: "blue" }}><path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z"></path><path d="M19.5 10c.17 0 .33.03.5.05V1L1 20h13v-3c0-.89.39-1.68 1-2.23v-.27c0-2.48 2.02-4.5 4.5-4.5zm2.5 6v-1.5a2.5 2.5 0 00-5 0V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z"></path></svg>
                        </div>
                        <div>
                            <h3>190+</h3>
                            <p>Countries Around The World</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="blue" height="30" width="30" xmlns="http://www.w3.org/2000/svg" style={{ color: "blue" }}><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                        </div>
                        <div>
                            <h3>$10M</h3>
                            <p>Trusted Wallet Investors</p>
                        </div>
                    </div>
                </div>
                <div className="row why-content">
                    <div className="col-lg-6" data-aos="flip-left" data-aos-delay="100" data-aos-easing="linear" data-aos-duration="1000">
                        <img src={require("./images/why-img.png")} alt="why" className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                        <h1>why you should choose CHAPPO</h1>
                        <p>
                            Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
                        </p>
                        <button>
                            <a href="#learn">learn more</a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Why;
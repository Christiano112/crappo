import React from 'react'

function Market() {
    return (
        <div>
            <section className="container">
                <div>
                    <h2>Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h3>Invest Smart</h3>
                        <p>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                        <a href="#home">
                            <button>learn more</button>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <img src={require("./images/feature-1-img.png")} alt="feature img" className="img-fluid"  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={require("./images/feature-2-img.png")} alt="feature img" className="img-fluid"  />
                    </div>
                    <div className="col-lg-6">
                        <h3>Detailed Statistics</h3>
                        <p>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
                        <a href="#home">
                            <button>learn more</button>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h3>Grow Your Profit And Track Your Investments</h3>
                        <p>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
                        <a href="#home">
                            <button>learn more</button>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <img src={require("./images/feature-3-img.png")} alt="feature img" className="img-fluid" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Market;
import React from 'react'

function Earn() {
    return (
        <div>
            <section className="container">
                <div className="row d-flex flex-column">
                    <div className="col">
                        <h3>How Much Can You Earn With Us</h3>
                        <p>Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className="col">
                        <div className="form-section">
                            <form action='#'>
                                <input type="text" placeholder='Enter your hash rate' name="hash-rate" />
                                <select>
                                    <option value="TH/s">TH/s</option>
                                    <option value="H/s">H/s</option>
                                    <option value="KH/s">KH/s</option>
                                    <option value="MH/s">MH/s</option>
                                    <option value="GH/s">GH/s</option>
                                </select>
                                <button type="submit">Calculate</button>
                            </form>
                        </div>
                        <div>
                            <p>ESTIMATED 24 HOUR REVENUE:</p>
                            <h3>0.055 130 59 ETH ($1275)</h3>
                            <p>Revenue will change based on mining difficulty and Ethereum price.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Earn;
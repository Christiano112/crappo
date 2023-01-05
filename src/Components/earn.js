import React from 'react';
import './styles/main.scss';
import './styles/earn.scss';

function Earn() {
    return (
        <div>
            <section className="container earn text-center">
                <div className="row d-flex flex-column text-center">
                    <div className="col">
                        <h3>How Much Can You Earn With Us</h3>
                        <p>Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className="col form-section" data-aos="zoom-in" data-aos-delay="100" data-aos-easing="linear" data-aos-duration="1000">
                        <div>
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
                        <div className="earn-details">
                            <p>ESTIMATED 24 HOUR REVENUE:</p>
                            <h3>0.055 130 59 ETH <span>($1275)</span></h3>
                            <p>Revenue will change based on mining difficulty and Ethereum price.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Earn;
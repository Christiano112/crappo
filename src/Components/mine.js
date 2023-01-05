import React from 'react';
import './styles/main.scss';
import './styles/mine.scss';

function Mine() {
    return (
        <div>
            <section className="container mine" data-aos="zoom-in" data-aos-delay="100" data-aos-easing="linear" data-aos-duration="1000">
                <div className='row'>
                    <div className='col-lg-6'>
                        <h3>Start mining now</h3>
                        <p>Join now with CRAPPO to get the latest news and start mining now</p>
                    </div>
                    <div className='col-lg-6'>
                        <form action='#'>
                            <input type="email" placeholder='enter your email' name="email" />
                            <button type='submit'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Mine;
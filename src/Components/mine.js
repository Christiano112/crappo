import React from 'react';

function Mine() {
    return (
        <div>
            <section className="container">
                <div className='row'>
                    <div className='col-lg-6'>
                        <h3>Start mining now</h3>
                        <p>Join now with CRAPPO to get the latest news and start mining now</p>
                    </div>
                    <div className='col-lg-6'>
                        <form action='#'>
                            <input type="email" placeholder='Enter your email' name="email" />
                            <button type='submit'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Mine;
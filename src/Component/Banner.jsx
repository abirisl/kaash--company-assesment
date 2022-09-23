import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='background'>
            <nav class="navbar bg-blur">
                <div className="container-fluid text-white pt-3">
                    <h4 className="">Kaash</h4>
                    <div className="d-flex  align-center ">
                        <h4 className='me-4'>Dark</h4>
                        <h4 className='me-4'>Light</h4>
                        <h4 className='me-4'>About</h4>
                    </div>
                </div>
            </nav>
            <h1 className='text-center banner-head'>'be visible, appear, shine' :  ka-a-sh</h1>
        </div>
    );
};

export default Banner;
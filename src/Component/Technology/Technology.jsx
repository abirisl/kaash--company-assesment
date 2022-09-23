import React from 'react';
import '../Technology/Technology.css';

const Technology = () => {
    return (
        <div className='container mt-5 pt-5 mb-5 pb-5'>
        <div className='row'>
                <div className='col-md-6'>
                <h1 className='text-center'>SUSTAINABILITY</h1>
                    <div className='card content w-75 d-flex mx-auto'>
                        <div className='card-element w-75 mx-auto p-2'>
                            <p>Reducing <span className='heading'>LIGHT CARBON</span> of cities and buildings with our sustainable solutions to create a healthier planet and its ecosystem.</p>
                            <p className='heading mt-3'>Know your green potential</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                <h1 className='text-center'>TECHNOLOGY</h1>
                    <div className='card content-two w-75 d-flex mx-auto'>
                        <div className='card-element w-75 mx-auto p-2'>
                            <p>Maximising potential of  LIGHT TECHNOLOGY with inclusive designs to build future proof smart infrastructure.</p>
                            <p className='heading mt-3'>Explore your solutions</p>
                        </div>
                    </div>
                </div>
                </div>
                
        </div>
    );
};

export default Technology;
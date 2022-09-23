import React from 'react';
import circle from '../images/circle1.png';
import circle1 from '../images/circle2.png';

const ProjectDesign = () => {
    return (
        <section className='bg-secondary pb-5'>
            <div className='mt-5 p-5 text-white'>
            <h1 className='ps-5 mt-5'>Project processes to create an ideal space</h1>
            <p className='ps-5 pb-5 mb-5'>Design + Planning + Execution</p>

            <div className='row pb-5'>
                <div className='col-md-6'>
                    <div className='card bg-dark '>
                        <h1 className='text-center pt-5'>DESIGN CYCLE</h1>
                        <p className='text-center  pt-5 pb-2'>Starting from a clean slate to an immersive experience of light and everything in between.</p>
                        <p className='text-center'>Vision <span className='heading'>|</span> Function <span className='heading'>|</span> Concept</p>

                       <div className='d-flex w-50 mx-auto bg-secondary rounded-circle h-50'>
                       <img className='w-100 zoom' src={circle} alt="" />
                       </div>
                       <p className=' text-center mb-5 pb-4'>Know your solution</p>
                    </div>
                </div>
                <div className='col-md-6'>
                <div className='card bg-dark '>
                        <h1 className='text-center pt-5'>LIGHT SCIENCE</h1>
                        <p className='text-center  pt-5 pb-2'>Unfolding the science behind light and tools to build an intelligent solution.</p>
                        <p className='text-center'>Scenes <span className='heading'>|</span> Calculations  <span className='heading'>|</span> | Engineering</p>

                       <div className='d-flex w-50 mx-auto  rounded-circle h-75'>
                       <img className=' w-100 zoom' src={circle1} alt="" />
                       </div>
                       <p className=' text-center mb-5 pb-5'>Know about critical parameters</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default ProjectDesign;
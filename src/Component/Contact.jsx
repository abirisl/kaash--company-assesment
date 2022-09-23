import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { FiMessageCircle } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';

const Contact = () => {
    return (
        <section className='bg-dark'>
            <div className='pt-5 '>
                <h1 className='text-center heading pt-5 mt-5'>Light on your mind </h1>
                <p className='text-center text-white pt-2'>Let's talk for a hassle free lighting design and product selection experience.</p>
            </div>
            <div className='container mt-5 pt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <BiCalendar className='text-white d-flex mx-auto ' size={120} />
                        <p className='text-white text-center pt-2'>Book a free light session</p>
                    </div>
                    <div className='col-md-6'>
                        <FiMessageCircle className='text-white d-flex mx-auto ' size={120} />
                        <p className='text-white text-center pt-2'>Ping to talk</p>
                    </div>
                </div>
                <div className='row mt-5 pt-5'>
                    <div className='col-md-6'>
                        <form className=''>
                            <div class="input-group input-group-sm mb-1 d-flex justify-content-around">
                                <span class="text-white ">Name</span>
                                <input type="text" class=" w-75" />
                            </div>
                            <div class="input-group input-group-sm mb-1 d-flex justify-content-around">
                                <span class="text-white ">Email</span>
                                <input type="text" class=" w-75" />
                            </div>
                            <div class="input-group input-group-sm mb-1 d-flex justify-content-around">
                                <span class="text-white ">Phone</span>
                                <input type="text" class=" w-75" />
                            </div>
                            <div class="input-group input-group-sm mb-1 d-flex justify-content-around">
                                <span class="text-white text-right">Message</span>
                                <input type="text" class=" w-75 h-50" />

                            </div>
                            <div class="input-group input-group-sm mb-1 ms-5 ps-5">
                                <input type="checkbox" name="" id="" className='ms-3' />
                                <span className='text-white'><small>I would like to receive more info.</small></span>
                            </div>
                            <div class="d-grid d-md-flex justify-content-md-end">
                                <button class="btn bg-light btn-sm me-md-4" type="button">Submit</button>
                            </div>
                        </form>

                    </div>
                    <div className='col-md-6'>
                        <div className='text-center text-white'>
                            <small>
                                <p>+352 691 566 820</p>

                                <p>    moien@kaash.eu</p>
                                <p>41a rue des Romains, 8041 Luxembourg</p>
                            </small>

                        </div>
                    </div>
                </div>



            </div>
            <div className='text-center text-white mt-5 pb-5 mb-5' >
                <BsInstagram className='mx-3' size={30} />
                <GrLinkedin className='' size={30} />
            </div>
            <div className='mt-5 pt-5'>
                <section className='footer d-flex justify-content-center '>
                    <img width={'150px'} src={logo1} alt="" />
                    <img width={'150px'} src={logo2} alt="" />
                </section>
            </div>
            <p className='font text-white text-center py-3 mb-0 px-3'>An immersive audiovisual installation created by Cocolab. Commissioned by ARCA, presenting at TagCDMX 2016 Music and sound by Before tigers</p>
        </section>
    );
};

export default Contact;
import React from 'react';
import HeroSVG from '../assets/finance_computer.svg';
import AnimatedLetter from './AnimatedLetter';

const helloMessage = "Hello, I'm";
const fullName = 'Roynul Rohan';
const titleMessage = 'a Web Developer';

const Hero = () => {
    return (
        <section className='d-flex flex-column justify-content-center p-5 hero' style={{ height: '100vh' }}>
            <div className='row align-items-center my-5 hero__content'>
                <div className='col-12 col-lg-6 order-md-1 p-3'>
                    <div className='text-nowrap text-center hero__text p-4'>
                        <h1 className='display-5 d-flex justify-content-center'>
                            {helloMessage.split('').map((letter, index) => {
                                return letter !== ' ' ? (
                                    <AnimatedLetter letter={letter} animation='rubberBand' key={`${helloMessage} - ${index}`} />
                                ) : (
                                    <span key={`${helloMessage} - ${index}`}>&nbsp;</span>
                                );
                            })}
                        </h1>
                        <h1 className='display-1 d-flex justify-content-center'>
                            {fullName.split('').map((letter, index) => {
                                return letter !== ' ' ? (
                                    <AnimatedLetter letter={letter} animation='rubberBand' key={`${fullName} - ${index}`} />
                                ) : (
                                    <span key={`${helloMessage} - ${index}`}>&nbsp;</span>
                                );
                            })}
                        </h1>
                        <h1 className='display-6 pt-4 d-flex justify-content-center'>
                            {titleMessage.split('').map((letter, index) => {
                                return letter !== ' ' ? (
                                    <AnimatedLetter letter={letter} animation='rubberBand' key={`${titleMessage} - ${index}`} />
                                ) : (
                                    <span key={`${helloMessage} - ${index}`}>&nbsp;</span>
                                );
                            })}
                        </h1>
                    </div>
                </div>
                <div className='col-12 col-lg-6 order-md-2 d-flex justify-content-center p-3'>
                    <div className='hero__img'>
                        <img src={HeroSVG} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

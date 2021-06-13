import React from 'react';
import pro from './Images/pro3.jpg'

const About = () =>{
    return (
        <>
            <section className='profile_sec py-2'>
                <div className='pro_head mt-3'>
                    <h2 className='text-center'>About Me</h2>
                    <hr className='w-25 mx-auto my-4 ' />
                </div>
                
                <div className='profile_div container my-5'>                    
                    <div className='row p-2'>
                        <div className='col-md-12 col-lg-10 col-xl-9 single_column mx-auto'>
                            <div className="card mx-auto my-1">
                                <img src={pro} className="card-img-top" alt="Profile_Image" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Sarfaraz Khan</h5>
                                    <p className="card-text">This is Mohd Sarfaraz Khan.I am fresher engineering graduate with specialization in Computer Science & Enginnering.</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                            <div className="card mx-auto my-1">
                                <img src={pro} className="card-img-top" alt="Profile_Image" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Sarfaraz Khan</h5>
                                    <p className="card-text">This is Mohd Sarfaraz Khan.I am fresher engineering graduate with specialization in Computer Science & Enginnering.</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                            <div className="card mx-auto my-1">
                                <img src={pro} className="card-img-top" alt="Profile_Image" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Sarfaraz Khan</h5>
                                    <p className="card-text">This is Mohd Sarfaraz Khan.I am fresher engineering graduate with specialization in Computer Science & Enginnering.</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-9 col-sm-11 border border-light mx-auto p-3'>
                        <div className='about_desc'>
                            <p>Note: This website is developed by Mohd Sarfaraz Khan for only demostration of the work. So please go through the whole website and suggest any change.I keep your valuable suggestion. </p>
                        </div>
                        </div>
                    </div>
                </div>

                

            </section>
        </>
    );
}

export default About;
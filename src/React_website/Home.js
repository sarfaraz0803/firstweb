import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Galcomp from './Galcomp';
import { Galdata } from './Sdata';


const Home = () =>{
    return (
        <>
            {/* ---------------------------------Header Section---------------------------- */}

            <section className='header'>
            <div className='home_main mb-1'>
                <div className="row">
                    <div className="col-lg-6 col-md-3 col-sm-12 mx-md-auto">
                    <div className="home_head">
                        <h1 className="">Learn FullStack Web Development</h1>
                        <h4>With</h4>
                        <h2>Go Learn</h2>
                        <div className="home_btn">
                            <Link to='/service' className="my-2">Get Started</Link>
                            <Link to='/about' className="my-2">About</Link>
                        </div>
                    </div>
                    </div>
                </div>                
            </div>
            </section>

            {/* ---------------------------------Gallery Section---------------------------- */}

            <section className='gallery_sec my-4'>
                <div className='gal_head my-3'>
                    <h2 className='text-center'>Top Languages Now A Days</h2>
                    <hr className='w-25 mx-auto my-4 ' />
                </div>

                <div className='gallery_div container my-2'>                    
                    <div className='row p-2 mb-3'>
                        {
                            Galdata.map((val, ind)=>{
                                return (
                                    ind < 4 && ind >=0 ?
                                    <Galcomp 
                                    key={ind} 
                                    id={ind} 
                                    logo={val.logo} 
                                    gal_color={val.gal_color} 
                                    gal_link={val.gal_link} 
                                    gal_title={val.gal_title} 
                                        
                                    /> : null );
                            })
                        }
                    </div>
                    {/* ------------------Second row----------------- */}
                    <div className='row p-2 mb-3'>
                        {
                            Galdata.map((val, ind)=>{
                                return (
                                    ind < 8 && ind >=4 ?
                                    <Galcomp 
                                    key={ind} 
                                    id={ind} 
                                    logo={val.logo} 
                                    gal_color={val.gal_color} 
                                    gal_link={val.gal_link} 
                                    gal_title={val.gal_title} 
                                        
                                    /> : null );
                            })
                        }
                    </div>
                </div>  

            </section>
            
            {/* ---------------------------------Profile Section---------------------------- */}

            <About />
        </>
    );
}

export default Home;
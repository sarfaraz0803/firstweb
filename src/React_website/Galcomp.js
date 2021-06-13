import React from 'react';

function Galcomp(props) {
    return (
        <>
            <div className='gal_column col-lg-3 p-2'>
                <div className='gal_div'>
                    <div className='galflip'>
                        <div className='gal_front'>
                            <img src={props.logo} alt='' />
                        </div>
                        <div className='gal_back' style={{backgroundColor: props.gal_color}}>
                            <h6>Go Learn</h6>
                            <a href={props.gal_link}>Click Here to Learn</a>
                        </div>
                    </div>
                    <div className='gal_div_title text-center '>
                        <a href={props.gal_link}>{props.gal_title}</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Galcomp;

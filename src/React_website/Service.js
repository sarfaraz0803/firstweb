import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Service = () =>{
    return (
        <>
            <div className="container mt-3">
                <h2 className="text-center">Service</h2>
                <hr className="w-25 mx-auto" />
            </div>
           <div className='container my-3'>
           <div className='row mx-auto'>
            {
                Sdata.map((val, ind)=>{
                    const { imgsrc, title, desc, btnlink} = val;
                    return (
                        <div className='col-lg-4 gy-3'>
                        <Card key={ind} id={ind} imgsrc={imgsrc} title={title} desc={desc} btnlink={btnlink}  />
                        </div>
                    );
                })
            }                
           </div>
           </div>
        </>
    );
}

export default Service;
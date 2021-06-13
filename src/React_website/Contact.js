import React, { useState } from 'react';

const textplace = 'Comment Here..! How is this website. Please Give any suggestion about this website.';
const Contact = () =>{
    const [fival, setFival] = useState({
        name : "",
        email : "",
        mobile : "",
        coment : "",
    });

    const handleChange = (event) =>{
        const {name, value} = event.target; 
        setFival((preValue)=>{
            return{...preValue,  [name] : value};
        });       
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Name:${fival.name}, email:${fival.email}, Mobile:${fival.mobile}, comment:${fival.comment}, Your Detail is submitted.`);
        
    }
    return (
        <>
        <section className='contact_sec my-5'>
            <div className="container-fluid my-3">
                <h2 className="text-center">Contact</h2>
                <hr className="w-25 mx-auto" />
            </div>
            <div className="contact-form w-50 mx-auto ">
                <form className='p-3' onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <input type='text' id='' name='name' className="form-control" value={fival.name} onChange={handleChange} placeholder="Enter Your Name" />
                    </div>
                    <div className="mb-3">
                        <input type='email' id='' name='email' className="form-control" value={fival.email} onChange={handleChange} placeholder="Enter Your Email" />
                    </div>
                    <div className="mb-3">
                        <input type='text' id='' name='mobile' className="form-control" value={fival.mobile} onChange={handleChange} placeholder="Enter Your Mobile No" />
                    </div>
                    <div className="mb-3">
                        <textarea type='textarea' rows='4' name='comment' className='form-control' value={fival.comment} onChange={handleChange} placeholder={textplace} />
                    </div>                    
                    <div className='text-center'>
                        <button type='submit' className='btn btn-outline-success'>Submit</button>
                    </div>
                </form>
            </div>
        </section>

        </>
    );
}

export default Contact;
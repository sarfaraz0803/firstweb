import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="card mx-auto" style={{width:"350px", height : "500px"}}>
                <img src={props.imgsrc} className="card-img-top" alt="pic" />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <div className="cardpara">
                        <p className="card-text">{props.desc}</p>
                    </div>
                    <button className="btn btn-primary"><a className="card-link" href={props.btnlink}>Learn {props.title}</a></button>
                </div>
            </div>
        </>
    );
}
export default Card;
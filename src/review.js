import React from 'react';
import quote from './quote.svg';

const review = ({id, name, job, image, text}) => {
    return (
        <div className="review">
            <div className="image">
                <div className="img-bg"></div>
                <img src={image} alt="" />
            </div>
            <h4 className="name">{name}</h4>
            <p className="job">{job}</p>
            <p className="text">{text}</p>
            
        </div>
    )
}

export default review

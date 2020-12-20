import React from 'react';
import s from './../OfferList.module.css';

const Offer = (props) => {
    return (
        <div className={s.offer}>
            {props.country + ' (' + props.city + '): price $ ' + props.price}
        </div>
    );
}

export default Offer;
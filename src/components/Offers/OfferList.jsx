import React from 'react';
import s from './OfferList.module.css';
import Offer from './Offer/Offer';


const OfferList = (props) =>{

    let offerElements = props.offerData.map(
        el => <Offer key ={el.id} country={el.country} city={el.city} price={el.dayPrice}/>);

    return(
        <div className={s.offers}>
            <div>{offerElements}</div>
        </div>
    )
}

export default OfferList;
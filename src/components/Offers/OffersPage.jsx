import React, {useState, useEffect} from 'react';
import OfferList from './OfferList';
import s from './OfferList.module.css';
import {addOfferCreator,
    updateNewOfferCountryCreator,
    updateNewOfferPriceCreator} from '../../redux/offer-reducer';
import URLS from "../../utils/URLS";

function OffersPage (props) {

    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    let newOfferCountry = React.createRef();
    let newOfferCity = React.createRef();
    let newOfferPrice = React.createRef();

    let getOffersList = () => {
        fetch(URLS.offerListUrl)
        .then(res => {
            return res.json()
        })
        .then(
            (result) => {
                setItems(result);
            },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
                setItems([]);
                setError(error);
                console.log("error");
            }
        )
    }

    let onAddOfferClick = (data) => {
        fetch(URLS.addOfferUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(response => {
            console.log(response);
            getOffersList();
        });
    }

    let onOfferCountryChange = () => {
        let newCountry = newOfferCountry.current.value;
        props.dispatch(updateNewOfferCountryCreator(newCountry));
    }
    let onOfferPriceChange = () => {
        let newPrice = newOfferPrice.current.value;
        props.dispatch(updateNewOfferPriceCreator(newPrice));
    }

    useEffect(() => {
        getOffersList();
    }, [])

    if(error){
        return <div>Ошибка: {error.message}</div>;
    }else{
        return(
            <div>
                <div className={s.offerList}>
                    <OfferList offerData={items}
                            dispatch={props.dispatch}
                    />
                    <div className={s.addOffer}>
                        <div>
                            <input value={props.newCountryInfo}
                                onChange={onOfferCountryChange}
                                ref={newOfferCountry}
                                placeholder="Enter country"/>
                        </div>
                        <div>
                            <input value={props.newCity}
                                ref={newOfferCity}
                                placeholder="Enter city"/>
                        </div>
                        <div>
                            <input value={props.newPriceInfo}
                                onChange={onOfferPriceChange}
                                ref={newOfferPrice}
                                placeholder="Enter price"/>
                        </div>
                        <div>
                            <button onClick={ onAddOfferClick }>Add offer</button>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
    
}

export default OffersPage;
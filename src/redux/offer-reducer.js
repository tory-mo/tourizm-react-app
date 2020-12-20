const UPDATE_NEW_OFFER_COUNTRY = 'UPDATE-NEW-OFFER-COUNTRY';
const UPDATE_NEW_OFFER_PRICE = 'UPDATE-NEW-OFFER-PRICE';
const ADD_OFFER = 'ADD-OFFER';

let initialState = {
                        offerData: [
                                    {id: 1, country: "Equador", price: 980},
                                    {id: 2, country: "Madagaskar", price: 1500},
                                    {id: 3, country: "Peru", price: 1230},
                                    {id: 4, country: "Grand Canaria", price: 1110}
                                    ],
                      newPriceInfo: "",
                      newCountryInfo: "" };

const offerReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_OFFER_COUNTRY:
            state.newCountryInfo = action.newCountry;
            return state;
        case UPDATE_NEW_OFFER_PRICE:
             state.newPriceInfo = action.newPrice;
             return state;
        case ADD_OFFER:
            let newOffer = {
                        id: 5,
                        country: state.newCountryInfo,
                        price: state.newPriceInfo
                            }
            state.offerData.push(newOffer);
            state.newCountryInfo = '';
            state.newPriceInfo = '';
            return state;
        default:
             return state;
    }

}

export const addOfferCreator = () => ({ type: ADD_OFFER})
export const updateNewOfferCountryCreator = (newCountry) =>
     ({type: UPDATE_NEW_OFFER_COUNTRY, newCountry: newCountry})
export const updateNewOfferPriceCreator = (newPrice) =>
     ({type: UPDATE_NEW_OFFER_PRICE, newPrice: newPrice})

export default offerReducer;
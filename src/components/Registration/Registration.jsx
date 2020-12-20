import React from 'react';
import TouristList from './TouristList/TouristList';

const Registration = (props) => {

    return(
    <div>
            <TouristList touristsData={props.registrationPage.touristsData}
                      dispatch={props.dispatch}
                      newTouristLogin={props.registrationPage.newTouristLogin}
                      newTouristName={props.registrationPage.newTouristName}
                      />
    </div>
    );
}

export default Registration;
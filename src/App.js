import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import LogIn from './components/LogInPage/LogIn';
import Registration from './components/Registration/Registration';
import OffersPage from './components/Offers/OffersPage';
import { Route } from "react-router-dom";
import TitleText from './components/Header/TitleText';

const App = (props) => {

  return (

    <div className='app-wrapper'>
        <Header />
        <TitleText />
        <Navbar />
        <div className='app-wrapper-content'>
             <Route path='/mainpage' component={MainPage}/>
             <Route path='/registration'
                    render={() => <Registration
                                    registrationPage={props.state.registrationPage}
                                    dispatch={props.dispatch}
                                    />}/>
            <Route path='/loginpage' component={LogIn}/>
            <Route path='/offers'
                                render={() => <OffersPage offerPage={props.state.offerPage}
                                              dispatch={props.dispatch}/>}
                                  />
        </div>
    </div>
  );
}

export default App;

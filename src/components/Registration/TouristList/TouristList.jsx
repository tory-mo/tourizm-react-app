import React from 'react';
import s from './TouristList.module.css';
import Tourist from './Tourist/Tourist';
import {addTouristActionCreator, updateNewTouristLoginActionCreator,
        updateNewTouristNameActionCreator} from '../../../redux/registration-reducer';


const TouristList = (props) => {

   let touristElements = props.touristsData.map(
            t => <Tourist login={t.login} name={t.name}/>);

   let newTouristLogin = React.createRef();
   let newTouristName = React.createRef();

   let addTourist = () => {
            props.dispatch(addTouristActionCreator());
   }

   let onTouristLoginChange = () => {
         let newlogin = newTouristLogin.current.value;
       props.dispatch(updateNewTouristLoginActionCreator(newlogin));
      }
   let onTouristNameChange = () => {
         let newname = newTouristName.current.value;
       props.dispatch(updateNewTouristNameActionCreator(newname));
      }

    return(
            <div className={s.touristsBlock}>
                <div>
                    <div>
                        <input onChange={onTouristLoginChange}
                                    ref={newTouristLogin}
                                    value={props.newTouristLogin}/>
                    </div>
                    <div>
                         <input onChange={onTouristNameChange}
                                    ref={newTouristName}
                                    value={props.newTouristName}/>
                     </div>
                    <div>
                        <button onClick={ addTourist }>register tourist</button>
                    </div>
                </div>
                <h2>Our tourists</h2>
                <div className={s.tourists}>
                  { touristElements }
               </div>
             </div>

    );
}

export default TouristList;
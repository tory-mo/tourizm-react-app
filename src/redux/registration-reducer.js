const ADD_TOURIST = 'ADD-TOURIST';
const UPDATE_NEW_TOURIST_LOGIN = 'UPDATE-NEW-TOURIST-LOGIN';
const UPDATE_NEW_TOURIST_NAME = 'UPDATE-NEW-TOURIST-NAME';

let initialState = {touristsData: [
                                  {id: 1, login: "limpopo", name: "Lil Kim"},
                                  {id: 2, login: "youngPope", name: "Jude Law"},
                                  {id: 3, login: "pink", name: "Alecia Beth Moore"},
                                  ],
                    newTouristLogin: "new login",
                    newTouristName: "new name",};

const registrationReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TOURIST:
                let newTourist = {
                        id: 4,
                        login: state.newTouristLogin,
                        name: state.newTouristName,
                };
                state.touristsData.push(newTourist);
                state.newTouristLogin = '';
                state.newTouristName = '';
                return state;
        case UPDATE_NEW_TOURIST_LOGIN:
                state.newTouristLogin = action.newLogin;
                return state;
        case UPDATE_NEW_TOURIST_NAME:
                 state.newTouristName = action.newName;
                 return state;
        default:
                return state;
    }

}

export const addTouristActionCreator = () => ({ type: ADD_TOURIST})
export const updateNewTouristLoginActionCreator = (newlogin) =>
     ({type: UPDATE_NEW_TOURIST_LOGIN, newLogin: newlogin})
export const updateNewTouristNameActionCreator = (newlogin, newname) =>
     ({type: UPDATE_NEW_TOURIST_NAME, newName: newname})

export default registrationReducer;
import React from 'react';

const MainPage = () => {

    const loginClick = () => {
        document.location.href = "/loginpage";
    }
    let registerClick = () => {
        document.location.href = "/registration";
    }

    return(
        <div>
            <h4>Menu</h4>
            <div>
                <button onClick={loginClick}>LogIn Page</button>
                <button onClick={registerClick}>Registration Page</button>
            </div>
        </div>
    );
}

export default MainPage;
import React from 'react';

const LogIn = () => {

    let customer = React.createRef();

    let loginCustomer = () => {
         let text = customer.current.value;
         alert(text  + ' welcome');
    }

    return(
        <div>
            <h3>Login area</h3>

            <textarea ref={customer}></textarea>
            <h5>enter your login</h5>
            <textarea></textarea>
            <h5>enter your password</h5>
            <button onClick={loginCustomer}>Log in</button>
        </div>
    );
}

export default LogIn;

import React from 'react';


const Form = (props) => {
    return (
        <form>
            <input type="text" name="name" placeholder="username"/>
            <input type="text" name="password" placeholder="password"/>
            <buttom>Submit</buttom>
        </form>
    )
}
export default Form;
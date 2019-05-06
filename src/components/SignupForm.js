import React, { Component } from 'react'

class SignupForm extends Component {
    state = {
        input: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    }
    
    handleChange = (e) => {
        this.setState({
            input: e.target.value    
        })
    }

    handleSubmit = e => { 
        e.preventDefault();   
        const email = document.forms['Form']['email'].value;
        const password = document.forms['Form']['password'].value;
        const passwordConfirmation = document.forms['Form']['password_confirmation'].value;
        if (email === "" || password === "" || passwordConfirmation === "") {
            alert("Email, Password, and Password Confirmation must be filled out");
            return false;
        }  
    }

    render() {
        return (
            <div>
                <form name='Form' onSubmit={this.handleSubmit} noValidate>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    required
                />
                <br />
                <input
                    type="text"
                    name="passwordConfirmation"
                    placeholder="Password Confirmation"
                    required
                />
                <br />    
                <input type='submit'></input>
                </form>
            </div>
        );
    }
}

export default SignupForm
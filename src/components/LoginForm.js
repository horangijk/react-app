import React, {Component} from 'react';
class LoginForm extends Component {
    state = {
        input: '',
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            input: e.target.value 
        })
    }   

    handleSubmit = e => { 
        e.preventDefault();

    }

    render() {
        return(
            <form>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Email'
                    onChange={this.handleChange.handleSubmit}>
                </input>
                <input
                    type='text'
                    name='password'
                    placeholder='password'
                    onChange={this.handleChange.handleSubmit}>
                </input>
                <input type='submit'></input>
            </form>
        );
    }
}

export default LoginForm
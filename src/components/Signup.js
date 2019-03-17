import React, { Component } from 'react'
import { Box, FormField, TextInput, Button, Heading, Text } from 'grommet';
import { Login as Signin } from 'grommet-icons';
import './Body.css'
import { FormErrors } from './FormErrors';

export default class Signup extends Component {
    constructor(props) {
      super(props);
    //   this.state = {
    //     username: '',
    //     password: '',
    //   };
      this.onLogin = this.onLogin.bind(this);
      this.onSignup = this.onSignup.bind(this);

      this.state = {
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false

        }
    }
  
    onChangeusername = (e) => {
      this.setState({ username: e.target.value });
    }
    onChangePassword = (e) => {
      this.setState({ password: e.target.value });
    }
  
    onLogin = () => {
        let path = `./traffic`;
        this.props.history.push(path);
    }
  
    onForgot = () => {
    }
  
    onSignup = () => {
        let path = `./signup`;
        this.props.history.push(path);
    }
  
    renderSignupButton() {
      return (
        < Button primary icon={< Signin />} label="Sign Up" onClick={this.onLogin} />  /*change icon here later*/
      );
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }
    
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }
      
  
    render() {
      return (
        <div className="body">
        <Box flex direction="column" align="center" justify="center"  fill='vertical'>
          {/* <Box responsive={false} pad='medium' style={{ width: 350 }} elevation='medium' background="light-0" animation='fadeIn'> */}
          <Box responsive={false} pad='medium' style={{ width: 350 }} elevation='medium' background="white" animation='fadeIn'>
            <Heading size="small" responsive={false} >
              Sign up
            </Heading>
            <FormField label="Username">
              <TextInput
                ref='usernameInput'
                autoFocus
                placeholder=" "
                value={this.state.username}
                onChange={this.onChangeusername} />
            </FormField>

                <FormField label="E-mail">
                {/* <TextInput placeholder=" " /> */}
                <TextInput placeholder=" " type="email" required className="form-control" name="email"
                            
                            value={this.state.email}
                            onChange={this.handleUserInput}/>
            </FormField>

            <FormField label="Password">
              <TextInput
                placeholder=" "
                type="password"
                value={this.state.password}
                onChange={this.onChangePassword} />
            </FormField>

                <FormField label="Confirm Password">
                <TextInput placeholder=" " 
                type="password" required className="form-control" name="password"
                value={this.state.password}
                onChange={this.handleUserInput}/>
                
            </FormField>
  
            {this.renderSignupButton()}
  
            <Box>
            {/* <input type="email" required className="form-control" name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleUserInput}></input> */}
            <FormErrors formErrors={this.state.formErrors} />
                </Box>
          </Box>
        </Box>
        </div>
      )
    }
  }
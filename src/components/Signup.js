import React, { Component } from 'react'
// import Link from 'react-router-dom'
import { FormErrors } from './FormErrors';
import './Body.css'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this);

        this.state = {
          email: '',
          password: '',
          formErrors: {email: '', password: ''},
          emailValid: false,
          passwordValid: false,
          formValid: false
 
          }
      }
      
      routeChange(){
        let path = `./login`;
        this.props.history.push(path);
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
      
      
    render(){
        return (
            <div className="body">
            <div class="form">
                <div class="tab-content">
                    <div id="signup">   
                        <h1>Sign Up for Free</h1>
                        
                        <form action="/" method="post">
                        
                        
                        <div class="top-row">
                            <div class="field-wrap">
                            
                            
                            <label>
                              User Name<span class="req">*</span>
                            </label>
                            <input type="text"required autocomplete="off"/>
                            </div>

                            <div class="field-wrap">
                            <label>
                                First Name<span class="req">*</span>
                            </label>
                            <input type="text" required autocomplete="off" />
                            </div>
                        
                            <div class="field-wrap">
                            <label>
                                Last Name<span class="req">*</span>
                            </label>
                            <input type="text"required autocomplete="off"/>
                            </div>
                        </div>

                        <div class="field-wrap">
                            {/* <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}> */}
                            <label>
                            Email Address<span class="req">*</span>
                            </label> 

                            {/* <input type="email"required autocomplete="off"/> */}
                            <input type="email" required className="form-control" name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleUserInput}  />
                            <FormErrors formErrors={this.state.formErrors} />

                            {/* </div> */}
                            
                        </div>
                        
                        <div class="field-wrap">
                            <label>
                            Password<span class="req">*</span>
                            </label>
                            {/* <input type="password"required autocomplete="off"/> */}
                            <input type="password" className="form-control" name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleUserInput}  />
                        </div>

                        <div class="field-wrap">
                            <label>
                            Confirm Password<span class="req">*</span>
                            </label>
                            <input type="password"required autocomplete="off"/>
                        </div>

                        {/* <button class="button button-block"/>Get Started</button> */}
                        <form>< button onClick={this.routeChange}> Sign Up </ button></form>
                        </form>

                    </div>
                        
                </div>
                
            </div>
            </div>
        )
    }
}
export default SignUp 
import React, { Component } from 'react'
import Link from 'react-router-dom'
import './Body.css'
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this);
      }
      
      routeChange(){
        let path = `./login`
        //let path = `./menu`
        this.props.history.push(path);
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
                            <label>
                            Email Address<span class="req">*</span>
                            </label>
                            <input type="email"required autocomplete="off"/>
                        </div>
                        
                        <div class="field-wrap">
                            <label>
                            Set A Password<span class="req">*</span>
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
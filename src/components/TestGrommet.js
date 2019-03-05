import React, { Component } from 'react'
import { Box, FormField, TextInput, Button, Heading, Text } from 'grommet';
import { Login as Signin } from 'grommet-icons';
import './Body.css'

export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };
      this.onLogin = this.onLogin.bind(this);
      this.onSignup = this.onSignup.bind(this);
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
  
    renderSigninButton() {
      return (
        < Button primary icon={< Signin />} label="Sign in" onClick={this.onLogin} />
      );
    }
  
    render() {
      return (
        <div className="body">
        <Box flex direction="column" align="center" justify="center"  fill='vertical'>
          <Box responsive={false} pad='medium' style={{ width: 350 }} elevation='medium' background="light-0" animation='fadeIn'>
            <Heading size="small" responsive={false} >
              Login
            </Heading>
            <FormField >
              <TextInput
                ref='usernameInput'
                autoFocus
                placeholder="Username"
                value={this.state.username}
                onChange={this.onChangeusername} />
            </FormField>
            <FormField>
              <TextInput
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.onChangePassword} />
            </FormField>
  
            {this.renderSigninButton()}
  
            <Box justify='center' direction='row' align='center' pad='small'>
              <Button hoverIndicator onClick={this.onForgot}>
                <Text size='small'>Forgot password? /</Text>
              </Button>
              <Button hoverIndicator style={{ marginLeft: 5 }} onClick={this.onSignup}>
                <Text weight='bold' size='small'>Sign up</Text>
              </Button>
            </Box>
          </Box>
        </Box>
        </div>
      )
    }
  }
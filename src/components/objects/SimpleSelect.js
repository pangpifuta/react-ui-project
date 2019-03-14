import React, { Component } from 'react'
import { Box, FormField, TextInput, Button, Heading, Text, Select } from 'grommet';
import { Login as Signin } from 'grommet-icons';
import {Grommet} from 'grommet';
import PropTypes from "prop-types";
import { grommet } from "grommet/themes";


class SimpleSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: props.options,
            value: props.value
        }    
    }
    
    static propTypes = {
      theme: PropTypes.shape({})
    };
  
    static defaultProps = {
      theme: undefined
    };
  
    // state = {
    //   options: ["one", "two"],
    //   value: ""
    // };
  
    render() {
      const { theme, ...rest } = this.props;
      const { options, value } = this.state;
      return (
        <Grommet >
          {/* <Box fill align="center" justify="start" pad="large"> */}
            <Select
              id="select"
              name="select"
              placeholder="Select"
              value={value}
              options={options}
              onChange={({ option }) => this.setState({ value: option })}
              {...rest}
              backgroud="light-0"
            />
          {/* </Box> */}
        </Grommet>
      );
    }
  }
  
  export default SimpleSelect
import React, { Component } from "react";


import { Box, Grommet, RangeInput } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

import { Volume } from "grommet-icons";

export default class SimpleRangeInput extends Component {
        constructor(props) {
            super(props)
            this.state = {
                value: props.value,
                min: props.min,
                max: props.max,
                step: props.step
            }    
        }
  
    onChange = event => this.setState({ value: event.target.value });
  
    render() {
      const { value } = this.state;
      return (
        <Grommet>
          <Box align="center" pad="large">
            <RangeInput value={value} onChange={this.onChange} />
          </Box>
        </Grommet>
      );
    }
  }
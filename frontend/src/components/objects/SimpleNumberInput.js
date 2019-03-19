import { NumberInput } from 'grommet-controls';
import React, { Component } from 'react'
import {Grommet} from 'grommet';

export default class SimpleNumberInput extends Component {
    constructor(props) {
      super(props);
      this.state = { number: this.props.defaultValue }
    }

    render() {
      const { number } = this.state;
      return (  
        <Grommet>
            <NumberInput
                value={number}
                thousandsSeparatorSymbol=','
                onChange={({ target: { value } }) => this.setState({ number: value })}
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                suffix={this.props.suffix}
            />
        </Grommet>
      );
    }
  }         

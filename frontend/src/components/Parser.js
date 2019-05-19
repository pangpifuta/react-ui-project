import React from 'react';
import Papa from 'papaparse';
import { withRouter } from 'react-router-dom';


class Parser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getCsvData();
    }

    async fetchCsv() {
        const response = await fetch('road_coordinates.csv');
        let reader = response.body.getReader();
        let decoder = new TextDecoder('utf-8');
        const result = await reader.read();
        alert(result)
        console.log('hello', decoder.decode(result.value))
        return decoder.decode(result.value);
    }

    getData(result) {
        this.setState({ data: result.data });
        alert('success!')
        console.log(result.data)
    }

    async getCsvData() {
        // let csvData = await this.fetchCsv();
        // https://docs.google.com/spreadsheets/d/1zx1yWMDuwrUB-8DQ7wplihdXJTCGe8N0f2KehYS1_2w/gviz/tq?tqx=out:csv
        Papa.parse("https://docs.google.com/spreadsheets/d/1zx1yWMDuwrUB-8DQ7wplihdXJTCGe8N0f2KehYS1_2w/gviz/tq?tqx=out:csv", {
            download: true,
            encoding: 'utf-8',
            complete: results => {
                // this.getData(results.data)
                this.setState({ data: results.data }, () => console.log(this.state.data));
            }
        });
    }

    render() {
        return (
            <h1>
                {this.state.data}
            </h1>
        );
    }
}

export default withRouter(Parser);
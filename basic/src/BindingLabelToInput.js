import React from 'react';

// learning source : https://hackernoon.com/10-react-mini-patterns-c1da92f068c5

let idCounter = 1;

export const getNextId = () => {
    return 'myinput-id-' + idCounter++;
}
export const resetId = () => {
    idCounter = 1;
}

class MyInput extends React.Component {
    constructor(props) {
        super();
        this.id = getNextId();
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(this.props.name, e.target.value);
    }

    render() {
        return (
            <label htmlFor={this.id}>
                {this.props.label} :
                <input id={this.id} value={this.props.value} onChange={this.onChange} />
            </label>
        );
    }
}

class BindingLabelToInput extends React.Component {
    constructor() {
        super();
        resetId();
        this.state = { data1: 'data 1', data2: 'data 2', data3: 'data 3' };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(stateName, newValue) {
        this.setState({ [stateName]: newValue });
    }

    render() {
        return (
            <div>
                <h3>Binding Label to Input</h3>
                <code>Generate a sequential ID for each input/label pair.</code>
                <hr />
                <MyInput label="Input 1" name="data1" value={this.state.data1} onChange={this.onInputChange} /><br />
                <MyInput label="Input 2" name="data2" value={this.state.data2} onChange={this.onInputChange} /><br />
                <MyInput label="Input 3" name="data3" value={this.state.data3} onChange={this.onInputChange} />
            </div>
        );
    }
}

export default BindingLabelToInput;
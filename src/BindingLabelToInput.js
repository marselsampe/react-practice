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
    }

    onChange(e){
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <label htmlFor={this.id}>
                {this.props.label} :
                <input id={this.id} value={this.props.value} onChange={this.onChange}/>
            </label>
        );
    }
}

class BindingLabelToInput extends React.Component {
    constructor(){
        super();
        resetId();
    }

    render() {
        return (
            <div>
                <h3>Binding Label to Input</h3>
                <code>Generate a sequential ID for each input/label pair.</code>
                <hr/>
                <MyInput label="Input 1" value="Data 1"/><br />
                <MyInput label="Input 2" value="Data 2"/><br />
                <MyInput label="Input 3" value="Data 3" />
            </div>
        );
    }
}

export default BindingLabelToInput;
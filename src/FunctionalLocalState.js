import React from 'react';

// learning source : https://www.robinwieruch.de/learn-react-before-using-redux

class FunctionalLocalState extends React.Component {
    constructor() {
        super();
        this.state = { counter1: 0, counter2: 0 };
        this.doCounter1 = this.doCounter1.bind(this);
        this.doCounter2 = this.doCounter2.bind(this);
    }

    doCounter1() {
        for (var i = 0; i < 10; i++) {
            console.log('counter1 add');
            this.setState({ counter1: this.state.counter1 + 1 });
        }
    }

    doCounter2() {
        for (var i = 0; i < 10; i++) {
            console.log('counter2 add');
            //this.setState( prevState => ({ counter2 : prevState.counter2+1 }) );
            this.setState(fn);
        }

        function fn(prevState, prevProps) {
            return ({ counter2: prevState.counter2 + 1 });
        }
    }

    render() {
        return (
            <div>
                <h3>Functional Local State</h3>
                <code>
                    The this.setState() function takes as alternative a function instead of an object. The function that it takes has the local state in its function signature at the time when this.setState() executes asynchronously. It is a callback that executes with the correct state at this point in time and thus can be relied upon.
                </code>
                <hr />

                Native setState counter : {this.state.counter1}
                <br />
                <button onClick={() => this.doCounter1()}>Add 10 times</button>

                <br/><br/>
                Functional setState counter : {this.state.counter2}
                <br />
                <button onClick={() => this.doCounter2()}>Add 10 times</button>
            </div>
        );
    }
}

export default FunctionalLocalState;
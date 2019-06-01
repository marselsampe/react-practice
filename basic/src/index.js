import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import FunctionalLocalState from './FunctionalLocalState';
import BindingLabelToInput from './BindingLabelToInput';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/functionlocalstate/">Function Local State</Link>
                        </li>
                        <li>
                            <Link to="/bindinglabeltoinput/">Binding Label To Input</Link>
                        </li>
                    </ul>
                    <hr/>

                    <Route path="/functionlocalstate/" component={FunctionalLocalState} />
                    <Route path="/bindinglabeltoinput/" component={BindingLabelToInput} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
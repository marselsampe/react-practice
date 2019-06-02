import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import FunctionalLocalState from './FunctionalLocalState';
import BindingLabelToInput from './BindingLabelToInput';
import UseStateBasic from './react-hooks/UseStateBasic';
import UseEffectBasic from './react-hooks/UseEffectBasic';
import UseContextBasic from './react-hooks/UseContextBasic';

import "./index.css";

function App() {
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
                    <li>
                        <Link to="/reacthooks-usestatebasic/">React Hooks - Use State Basic</Link>
                    </li>
                    <li>
                        <Link to="/reacthooks-useeffectbasic/">React Hooks - Use Effect Basic</Link>
                    </li>
                    <li>
                        <Link to="/reacthooks-usecontextbasic/">React Hooks - Use Context Basic</Link>
                    </li>
                </ul>
                <hr />

                <Route path="/functionlocalstate/" component={FunctionalLocalState} />
                <Route path="/bindinglabeltoinput/" component={BindingLabelToInput} />
                <Route path="/reacthooks-usestatebasic/" component={UseStateBasic} />
                <Route path="/reacthooks-useeffectbasic/" component={UseEffectBasic} />
                <Route path="/reacthooks-usecontextbasic/" component={UseContextBasic} />
            </div>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
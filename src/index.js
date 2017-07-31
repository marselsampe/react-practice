import React from 'react';
import ReactDOM from 'react-dom';
import FunctionalLocalState from './FunctionalLocalState';
import BindingLabelToInput from './BindingLabelToInput';

const PAGES = {
    functionalLocalState: FunctionalLocalState,
    bindingLabelToInput: BindingLabelToInput
}

const Page = (props) => {
    const Handler = PAGES[props.activePage];

    return <Handler />;
}

class App extends React.Component {
    constructor() {
        super();
        this.state = { activeMenu: 'functionalLocalState' };
    }

    onMenuClick = (activeMenu) => {
        this.setState({ activeMenu: activeMenu });
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li>
                            <a href="#" onClick={() => this.onMenuClick('functionalLocalState')}>Functional Local State</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => this.onMenuClick('bindingLabelToInput')}>#Pattern - Binding Label to Input</a>
                        </li>
                    </ul>
                </div>
                <hr />
                <Page activePage={this.state.activeMenu} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
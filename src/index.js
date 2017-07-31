import React from 'react';
import ReactDOM from 'react-dom';
import FunctionalLocalState from './FunctionalLocalState';
import BindingLabelToInput from './BindingLabelToInput';

function getContainer(activeMenu) {
    if (activeMenu === 'functionalLocalState')
        return (<FunctionalLocalState />);
    else if (activeMenu === 'bindingLabelToInput')
        return (<BindingLabelToInput />);
    else
        return (<div>...</div>);
}

class App extends React.Component {
    constructor() {
        super();
        this.state = { activeMenu: null };
    }

    onMenuClick = (activeMenu) => {
        this.setState({ activeMenu: activeMenu });
    }

    render() {
        const container = getContainer(this.state.activeMenu);

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
                {container}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
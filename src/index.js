import React from 'react';
import ReactDOM from 'react-dom';
import FunctionalLocalState from './FunctionalLocalState';

function getContainer(activeMenu) {
    if (activeMenu === 'functionalLocalState')
        return (<FunctionalLocalState />);
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
                    <button onClick={() => this.onMenuClick('functionalLocalState')}>Functional Local State</button>
                </div>
                <hr />
                {container}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
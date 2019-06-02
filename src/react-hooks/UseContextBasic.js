import React, { useContext } from 'react';

const ThemeContext = React.createContext();
const SignedUserContext = React.createContext();

function UseContextBasic() {
    const signedUser = { username: 'marsel', email: 'marselsampe@gmail.com' };
    return (
        <ThemeContext.Provider value={'blue'}>
            <SignedUserContext.Provider value={signedUser}>
                <Toolbar />
            </SignedUserContext.Provider>
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return (
        <div>
            <h3>Use Context Basic</h3>
            <Navigation />
        </div>
    );
}

function Navigation() {
    const selectedTheme = useContext(ThemeContext);
    const signedUser = useContext(SignedUserContext);
    return (
        <div className={selectedTheme}>
            <b>Navigation</b><br />
            Username : {signedUser.username}<br />
            Email : {signedUser.email}
        </div>
    );
}

export default UseContextBasic;
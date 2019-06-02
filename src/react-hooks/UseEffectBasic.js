import React, { useState, useEffect } from 'react';

function UseEffectBasic() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('current counter : ' + counter);

        // cleanup function, will called when componentWillUnmount
        return () => {
            console.log('cleanup prev component with counter :', counter);
        };
    }, [counter]); // only run this effect if counter changes

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('running interval function with id', intervalId, 'at', new Date());
        }, 3000);
        console.log('initialize interval function with id', intervalId);

        // cleanup interval when componentWillUnmount
        return () => {
            console.log('cleanup interval function with id :', intervalId);
            clearInterval(intervalId);
        }
    });

    return (
        <div>
            <h3>Use Effect Basic</h3>
            <hr />
            Counter : {counter} <button onClick={() => setCounter(counter + 1)}>Add Counter</button>
        </div>
    );
}

export default UseEffectBasic;
import React, { useState } from 'react';

function UseStateBasic() {
    const [counter, setCounter] = useState(0);
    const [counterObject, setCounterObject] = useState({ counter1: 1, counter2: 2 });

    function onClickButton1() {
        setCounter(counter + 1);
    }

    function onClickButton2() {
        setCounterObject({ ...counterObject, counter1: counterObject.counter1 + 1 })
    }

    function onClickButton3() {
        let updatedCounterObject = Object.assign(counterObject);
        updatedCounterObject.counter2++;
        setCounterObject(prevState => {
            return { ...prevState, ...updatedCounterObject }
        });
    }

    return (
        <div>
            <h3>Use State Basic</h3>
            <hr />
            <div>
                <b>Primitive</b><br />
                Counter : {counter} <button onClick={onClickButton1}>Add Counter</button>
            </div>
            <div>
                <b>Object</b><br />
                Counter Object 1 : {counterObject.counter1} <button onClick={onClickButton2}>Add Counter</button>
                <br />
                Counter Object 2 : {counterObject.counter2} <button onClick={onClickButton3}>Add Counter</button>
            </div>
        </div >
    );
}

export default UseStateBasic;
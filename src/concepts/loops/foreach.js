import { useState } from 'react';
import React from 'react';

const ForEachLoop = () => {

    const [num, setNum] = useState("");

    let numArray = []
    const handleInput = (e) => {
        setNum(e.target.value);
    }
    numArray.push(...num);
    console.log("Array", numArray)


    numArray.forEach((item, index) => {
        const numObj = {}
        numObj[index] = item;
        if (numObj[index + 1] > numObj[index]) {
            console.log(`Largest number is ${numObj[index + 1]}`);
        }
        else {
            console.log(numObj[index]);
        }
    })

    return (
        <div>
            <input type="number" onChange={handleInput} />
        </div>
    )


}

export default ForEachLoop;
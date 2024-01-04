import React from 'react';

const ArrayDotSomeAndEvery = () => {
    const names = ["Simmi", "Walia", "Hero", "Walia", "XYZ", "MNO"];
    
    function isLengthAboveFour(names) {
        if (names.length >= 4) return names;
    }

    // Checking if every item of array names length >=4: array.every will return false 
    //bcz not every item has a length>=4
    const output1 = names.every(isLengthAboveFour);
    console.log(output1);

    //Array.some will return true bcz some items in array has length>=4;
    const output2 = names.some(isLengthAboveFour);
    console.log(output2);

}

export default ArrayDotSomeAndEvery;
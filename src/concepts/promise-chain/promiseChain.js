import React from 'react';

const PromiseChain = () => {
    const finalResult = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        },200)
    })
        .then((result) => {
            return result // 1
        }).then((result) => { // 1
            // setTimeout(() => {
                return result * 2; // 2
            // }, 500);
        }).then((result) => { // 2
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result * 3) // 6
                }, 500);

            })
        })
        console.log(finalResult);

}

export default PromiseChain;
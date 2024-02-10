import React from 'react';

const PromiseChain = () => {
    const finalResult = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 200)
    }).then((result) => {
            return result;
        }).then((result) => {
            return result * 2;
        }).then((result) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result * 3)
                }, 500);
            })
        })
    console.log(finalResult);

}

export default PromiseChain;
import { useEffect, useState } from "react";

export const BindPolyfill = () => {

    const person = {
        name: "Simmi",
        age: 29,
        city: "Amsterdam",
        country: "Netherlands"
    }

    function personDetails(origin, greeting) {
        console.log(`${greeting} ${this.name}'s age is ${this.age} lives in ${this.city} which is in ${this.country} orginally from ${origin}`);
    }

    Function.prototype.myBind = function (person, ...args1) {
        const fun = this;
        return function (...args) {
            fun.apply(person, [...args1, ...args])
        }
    }

    const myDetails = personDetails.myBind(person, "India");
    myDetails("Hello");

}
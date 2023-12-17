import React, { useState } from 'react';
import "./temperatureConverter.scss"

const TemperatureConverter = () => {

    const [inputTemperature, setInputTemperature] = useState("");
    const [convertedTemp, setConvertedTemp] = useState("");



    const convertCtoF = () => {
        const result = inputTemperature * 9 / 5 + 32
        setConvertedTemp(result);
    }
    const convertFtoC = () => {
        const result = (inputTemperature - 32) * 5 / 9
        setConvertedTemp(result);
    }


    return <>
        <input type='number' className='input' value={inputTemperature} onChange={(e) => { setInputTemperature(e.target.value) }} placeholder='Enter Temperature' />
        <br /> <button className='button' onClick={convertFtoC} disabled={!inputTemperature}>Convert F to C</button><button className='button' onClick={convertCtoF} disabled={!inputTemperature}>Convert C to F</button>
        <br /><h2>{convertedTemp}</h2>

    </>

}

export default TemperatureConverter;
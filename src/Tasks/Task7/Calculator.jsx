import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState(''); 
    const [output, setOutput] = useState(''); 

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setOutput(eval(input));
            } catch (error) {
                setOutput('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setOutput('');
        } else {
            setInput((prevInput) => prevInput + value);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Basic Calculator</h1>
            <div style={calculatorStyle}>
                <div style={displayStyle}>
                    <div style={{ fontSize: '24px' }}>{input}</div>
                    <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{output}</div>
                </div>
                <div style={buttonContainerStyle}>
                    <div style={rowStyle}>
                        <button onClick={() => handleButtonClick('7')}>7</button>
                        <button onClick={() => handleButtonClick('8')}>8</button>
                        <button onClick={() => handleButtonClick('9')}>9</button>
                        <button onClick={() => handleButtonClick('+')}>+</button>
                    </div>
                    <div style={rowStyle}>
                        <button onClick={() => handleButtonClick('4')}>4</button>
                        <button onClick={() => handleButtonClick('5')}>5</button>
                        <button onClick={() => handleButtonClick('6')}>6</button>
                        <button onClick={() => handleButtonClick('-')}>-</button>
                    </div>
                    <div style={rowStyle}>
                        <button onClick={() => handleButtonClick('1')}>1</button>
                        <button onClick={() => handleButtonClick('2')}>2</button>
                        <button onClick={() => handleButtonClick('3')}>3</button>
                        <button onClick={() => handleButtonClick('*')}>*</button>
                    </div>
                    <div style={rowStyle}>
                        <button onClick={() => handleButtonClick('0')}>0</button>
                        <button onClick={() => handleButtonClick('C')}>C</button>
                        <button onClick={() => handleButtonClick('=')}>=</button>
                        <button onClick={() => handleButtonClick('/')}>/</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const calculatorStyle = {
    width: '300px',
    margin: '0 auto',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
};

const displayStyle = {
    backgroundColor: '#f5f5f5',
    padding: '10px',
    borderRadius: '5px',
};

const buttonContainerStyle = {
    marginTop: '10px',
};

const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};

export default Calculator;

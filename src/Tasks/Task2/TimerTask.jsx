import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = currentDateTime.toLocaleDateString();
    const formattedTime = currentDateTime.toLocaleTimeString();

    return (
        <div>
            <br/><br/>
            <h1>Time: {formattedTime}</h1>
            <h3>Date: {formattedDate}</h3>
        </div>
    );
};

export default CountdownTimer;

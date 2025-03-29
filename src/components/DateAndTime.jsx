import moment from "moment";
import React, { useEffect, useState } from "react";

const DateAndTime = () => {
    const [dateAndTime, setDateAndTime] = useState(moment().format("MMM D, YYYY, h:mm:ss A"));

    // I have use moment.js to get the date and time
    useEffect(() => {
        const interval = setInterval(() => {
            setDateAndTime(moment().format("MMM D, YYYY, h:mm:ss A"));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [date, , time] = dateAndTime.split(", ");

    return (
        <div className="absolute flex top-0 p-5 text-zinc-700">
            <h1 className="text-3xl text-blue-500 font-light">{date}, 2025</h1>
            <h1 className="text-3xl font-extralight ml-4">{time}</h1>
        </div>
    );
};

export default DateAndTime;

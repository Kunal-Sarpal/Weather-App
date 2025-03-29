import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const convertTimestamp = (timestamp) => {
    return moment.unix(timestamp).format("MMM D, YYYY, h:mm:ss A");
};

const DateAndTime = () => {
    const data = useSelector(state => state.data.data);
    const [dateAndTime, setDateAndTime] = useState("");

    useEffect(() => {
        if (!data || !data.dt) return;

        const updateClock = () => {
            setDateAndTime(convertTimestamp(data.dt + Math.floor(Date.now() / 1000) % 86400));
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, [data]);

    return (
        <div className='absolute flex top-0 '>
            <h1 className='text-3xl font-extralight text-zinc-700 top-0 p-5 '>
                {dateAndTime.split(", ")[0]}, 2025
            </h1>
            <h1 className='text-3xl text-zinc-700 font-extralight top-0 p-5 '>
                {dateAndTime.split(", ")[2]}
            </h1>
        </div>
    );
};

export default DateAndTime;

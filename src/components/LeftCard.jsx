import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';

const LeftCard = () => {


    const data = useSelector(state => state.data.data)
    console.log(data)
    if (!data) {
        return <div className="w-1/2 h-full flex justify-center items-center bg-zinc-800">Loading...</div>;
    }

    return (
        <div className="lg:w-1/2  w-full h-full flex justify-center items-center bg-zinc-800 relative">
            <div className="w-full h-full bg-amber-200 ">
                <img
                    className="object-cover w-full bg-blend-color-dodge"
                    src="https://images.unsplash.com/photo-1632117761438-b8ce7fc6838e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Weather Background"
                />
            </div>
            <div className="w-full h-fit  lg:scale-100 absolute top-1/6 lg:top:1/6 gap-1  flex flex-wrap items-center justify-center ">
                {data && (
                    <>
                        <Card value={data.main.temp} icon={data.weather[0].icon} symbol="°C" name={data.name} />
                        <Card value={data.main.humidity} icon={data.weather[0].icon} symbol="%" name="Humidity" />
                        <Card value={data.wind.speed} icon={data.weather[0].icon} symbol="m/s" name="Wind Speed" />
                        <Card value={data.main.feels_like} icon={data.weather[0].icon} symbol="°C" name="Feels Like" />
                        <Card value={data.main.temp_max} icon={data.weather[0].icon} symbol="°C" name="Max Temp" />
                        <Card value={data.main.temp_min} icon={data.weather[0].icon} symbol="°C" name="Min Temp" />
                    </>
                )}
            </div>
        </div>
    )
}

export default LeftCard
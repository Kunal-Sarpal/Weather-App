import React from 'react'

const Card = ({ icon, symbol, name, value }) => {
    return (


        <div className=' lg:w-52 lg:h-52 w-48 h-48  border-l-2  border-b-2  border-black backdrop-blur-2xl bg-black/50 shadow-xl   rounded  '>
            <div className='flex justify-center items-center'>
                {icon && <img className='object-cover ' src={`https://openweathermap.org/img/wn/${icon}.png`} />}  

                <h1 className='text-xl border-black/50    text-white font-mono   text-center '>{name}</h1>
            </div>

            <div className='w-full  mt-10 flex justify-center items-center  h-[40%] text-white'>
                <h1 className='text-7xl flex gap-3 font-extralight'>{Math.floor(value)}
                    <div className='text-xl font-light'>{symbol}
                    </div>
                </h1>
            </div>
        </div>

    )
}

export default Card
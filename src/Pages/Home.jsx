
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetData } from '../store/actions/getData';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import LeftCard from '../components/LeftCard';
import RightCard from '../components/RightCard';
import DateAndTime from '../components/DateAndTime';
import ErrorMsg from '../components/ErrorMsg';

const Home = () => {
    const dispatch = useDispatch();
    const {data} = useSelector(state=>state.data)
    const { error } = useSelector(state => state.data); // Handle error Globally
  
    useEffect(() => {
        dispatch(asyncGetData("punjab")) // Default location punjab
    }, [])
    return (

        <> 
        <ToastContainer position="top-right" autoClose={3000} />
        {   
            data && <div className="w-full pt-20 lg:pt-20 lg:p-20 h-screen  bg-[#E9E9E9] relative  shadow-black select-none">
                   {/* Display date and time on screen */}
                    <DateAndTime />  

                    {/* If user enters invalid city then this error pop up */}
                    {error && <ErrorMsg msg={error.includes("404") ? "City Not Found" : error} />}

                    <div className="w-full h-full shadow-xl shadow-zinc-300">
                        <div className="w-full lg:flex h-full bg-white items-center rounded">
                            {/*  Left side of homepage where cards have been displayed */}
                            <LeftCard />

                            {/* Right side where user can input city and see their previous checked locations */}
                            <RightCard />
                        </div>
                    </div>
            </div>
}
        </>
        
        
    );
};

export default Home;

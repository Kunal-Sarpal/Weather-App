
import LeftCard from '../components/LeftCard';
import RightCard from '../components/RightCard';
import DateAndTime from '../components/DateAndTime';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetData } from '../store/actions/getData';

const Home = () => {
    const dispatch = useDispatch();
    const {data} = useSelector(state=>state.data)
    // console.log(data)
    useEffect(() => {
        // console.log("mounted")
        // dispatch(asyncGetData("punjab"))
    }, [])
    return (

        <>
        {
            data && <div className="w-full pt-20 lg:pt-20 lg:p-20 h-screen  bg-[#E9E9E9] relative  shadow-black select-none">
                    <DateAndTime/>
                    <div className="w-full h-full shadow-xl shadow-zinc-300">
                        <div className="w-full lg:flex h-full bg-white items-center rounded">
                            <LeftCard />
                            <RightCard />
                        </div>
                    </div>
            </div>
}
        </>
        
        
    );
};

export default Home;

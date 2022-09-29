import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Info = ({practiceTime}) => {
    const [breakTime, setBreakTime] = useState(0)
    const breakBtn = (e) => {
        setBreakTime(e);
    }
    useEffect(() => {
        const x = localStorage.getItem('break-time')
        if(x){
            setBreakTime(x)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('break-time', breakTime)
    }, [breakTime])

    const notify = () => toast('Task Completed!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    return (
        <div className=''>
            <div className='flex flex-col gap-8 '>
                <div className='text-xl font-bold text-center'>
                    <p>Md. Abul Bashar</p>
                    <p>Miprur 11 Dhaka</p>
                </div>
                <div className='flex justify-around p-2 border'>
                    <div className='flex flex-col gap-3 text-lg bg-pink-50 p-4 rounded-sm text-center'>
                        <p>65kg</p>
                        <p>Weight</p>
                    </div>
                    <div className='flex flex-col gap-3 text-lg bg-pink-50 p-4 rounded-sm text-center'>
                        <p>5.3</p>
                        <p>Height</p>
                    </div>
                    <div className='flex flex-col gap-3 text-lg bg-pink-50 p-4 rounded-sm text-center'>
                        <p>25yrs</p>
                        <p>Age</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-xl font-semibold'>Break</p>
                    <div className='flex justify-around p-2 border'>
                        <div onClick={() => breakBtn(1)} className='flex flex-col gap-3 text-lg bg-pink-50 py-2 px-4 rounded-sm'>
                            <p>1h</p>
                        </div>
                        <div onClick={() => breakBtn(2)} className='flex flex-col gap-3 text-lg bg-pink-50 py-2 px-4 rounded-sm'>
                            <p>2h</p>
                        </div>
                        <div onClick={() => breakBtn(3)} className='flex flex-col gap-3 text-lg bg-pink-50 py-2 px-4 rounded-sm'>
                            <p>3h</p>
                        </div>
                        <div onClick={() => breakBtn(4)} className='flex flex-col gap-3 text-lg bg-pink-50 py-2 px-4 rounded-sm'>
                            <p>4h</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-xl font-semibold'>Details</p>
                    <div className='text-xl font-semibold flex justify-between py-3 px-4 border rounded-md'>
                        <p className=''>Practice Time</p>
                        <p className='text-lg text-gray-500'>{practiceTime}h</p>
                    </div>
                    <div className='text-xl font-semibold flex justify-between py-3 px-4 border rounded-md'>
                        <p>Break Time</p>
                        <p className='text-lg text-gray-500'>{breakTime}h</p>
                    </div>
                </div>
                <div className='w-full'>
                    <button onClick={notify} className='text-xl font-semibold bg-blue-600 text-white py-2 rounded-md w-full'>Completed</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Info;
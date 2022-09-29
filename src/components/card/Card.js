import React from 'react';

const Card = ({value, practiceBtn}) => {
    const {img, type, time} = value
    
    return (
        <div className='bg-white rounded-md p-6 flex flex-col gap-4 text-lg font-semibold'>
            <img src={img} alt="" className='h-36 w-full rounded-sm'/>
            <p>{type}</p>
            <p>Time needed: {time}h</p>
            <button onClick={() => practiceBtn(time)} className='bg-blue-600 text-white text-xl font-semibold py-2 rounded-sm hover:bg-green-600'>Add to list</button>
        </div>
    );
};

export default Card;
import React from 'react';
import Card from '../card/Card';
import logo from './../../images/images.jpg'

const Showcase = ({data, practiceBtn}) => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-2xl text-gray-500'>
                <div className='flex gap-4 items-center'>
                    <img src={logo} alt="" className='w-8 h-8 rounded-full'/>
                    <p>upgrade your practice</p>
                </div>
                <p className='text-lg pt-4'>select your options</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 py-8'>
                {
                    data.map(el => {
                        return (
                            <Card practiceBtn={practiceBtn} key={el.id} value={el} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Showcase;
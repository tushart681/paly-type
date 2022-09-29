import React from 'react';

const Blogs = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='p-4 text-lg border'>
                <p className='text-xl font-semibold'>Question1: How does React works?</p>
                <p>Answer:</p>
            </div>
            <div className='p-4 text-lg border'>
                <p className='text-xl font-semibold'>Question2: Difference between props and state</p>
                <p>Answer:</p>
            </div>
            <div className='p-4 text-lg border'>
                <p className='text-xl font-semibold'>Question3: Usage of useEffect without calling api</p>
                <p>Answer:</p>
            </div>
        </div>
    );
};

export default Blogs;
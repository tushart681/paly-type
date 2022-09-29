import React from 'react';

const Blogs = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='p-4 text-lg border'>
                <p className='text-xl font-semibold'>Question1: How does React works?</p>
                <p>Answer: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='p-4 text-lg border'>
                <p className='text-xl font-semibold'>Question2: Difference between props and state</p>
                <p>Answer: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className='p-4 text-lg border'>
                <p className='text-xl font-semibold'>Question3: Usage of useEffect without calling api</p>
                <p>Answer: APIs are the primary way for applications to programmatically communicate with servers to provide users with real-time data and to save user changes. In React applications, you will use APIs to load user preferences, display user information, fetch configuration or security information, and save application state changes.</p>
            </div>
        </div>
    );
};

export default Blogs;
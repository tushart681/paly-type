import { useEffect, useState } from 'react';
import Blogs from './components/blogs/Blogs';
import Info from './components/info/Info';
import Showcase from './components/showcase/Showcase';

function App() {
  const [products, setProducts] = useState([]);
  const [practiceTime, setPracticeTime] = useState(0)

  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
},[])

  const practiceBtn = (time) => {
    setPracticeTime(practiceTime + time)
  }

  return (
    <div>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 lg:col-span-9 bg-purple-100 py-12'>
          <Showcase practiceBtn={practiceBtn} setPracticeTime={setPracticeTime} data={products}/>
        </div>
        <div className='col-span-12 lg:col-span-3 py-12 px-3'>
          <Info practiceTime={practiceTime}/>
        </div>
      </div>
      <div className='py-8 w-11/12 mx-auto'>
        <Blogs />
      </div>
    </div>
  );
}

export default App;

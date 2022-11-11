import { useEffect, useState } from 'react';


const App = () => {
  const [index, setIndex] = useState(0);

  const updateCount = (e) => {
    let value = parseInt(index);
    console.log(value)
    let increment = Math.ceil(value / 1000);
    

    let increaseCount = setInterval(() => {
      // setIndex((index) => {
      //   return index += increment;
      // })
      if (index > value) {
        setIndex(value)
        clearInterval(increaseCount);
        return;
      }
    }, 1)
  };

    
  useEffect(() => {
    updateCount();
    // eslint-disable-next-line
  },[])

  return (
    <>
      <nav>
        <div className='nav-center'>
          <h4>sky coding</h4>
        </div>
      </nav>
    <section className='section'>
      {/* number of success */}
      <article>
        <span className='number' data-value='200'>
          {index}
        </span>
        <p>number of success project</p>
      </article>
      {/* end of number of success project*/}
      {/* number of working hours */}
      <article>
        <span className='number' data-value='2700'>
          {index}
        </span>
        <p>working hours</p>
      </article>
      {/* end of number of working hours*/}
      {/* number of  */}
      <article>
        <span className='number' data-value='200'>
          {index}
        </span>
        <p>number of happy clients</p>
      </article>
      {/* end of number of success project*/}
    </section>
    </>
  )
};

export default App;
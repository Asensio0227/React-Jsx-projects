import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Fetchfollowers from './components/Fetchfollowers';
import Followers from './components/Followers';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const App = () => {
  const { isLoading, followers } = Fetchfollowers();
  const [pageIndex, setPageIndex] = useState(0);
  const [page, setPage] = useState([]);

  useEffect(() => {
    if (isLoading) return;
    setPage(followers[pageIndex]);
  }, [isLoading, pageIndex])
  
  if (isLoading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  const prevPage = () => {
    setPageIndex((index) => {
      let oldPage = index - 1;
      if (oldPage < 0) {
        oldPage = followers.length - 1;
      }
      return oldPage;
    })
  };

  const nextPage = () => {
    setPageIndex((index) => {
      let oldPage = index + 1;
      if (oldPage > followers.length - 1) {
        oldPage = 0;
      }
      return oldPage;
    })
  };

  const handlePage=(index)=>{
    setPageIndex(index)
  }

  return (
    <>
      <Navbar />
        <section className="section followers">
          <div className="title">
            <h2>pagination</h2>
            <div className="underline"></div>
          </div>
          <article className="container">
            {page.map((follower)=>{
              return <Followers key={follower.id} {...follower}/>
            })}
        </article>
        <div className="btn-container">
          <button className="prev-btn" type='button' onClick={prevPage}>
            <FaChevronCircleLeft/>
          </button>
          {followers.map((items, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === pageIndex ? 'active-btn' : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            )
          })}
          <button
            type='button'
            className="next-btn"
            onClick={nextPage}
          >
            <FaChevronCircleRight/>
          </button>
        </div>
        </section>
    </>
  )
}

export default App

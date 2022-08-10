import { useGlobalContext } from './context';

const Buttons = () => {
  const { loading ,page, nbPages,handlePage } = useGlobalContext();
  
  return (
    <div className="btn-container">
      <button disabled={loading} className="page-btn" onClick={() => handlePage('desc')}>
        prev
      </button>
      <p>
        {page + 1}
        of
        {nbPages}
      </p>
      <button className="page-btn" onClick={() => handlePage('inc')}>
        next
      </button>
    </div>
  )
};

export default Buttons

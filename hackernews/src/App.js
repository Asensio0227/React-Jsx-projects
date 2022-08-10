import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import Buttons from './components/Buttons';
import Stories from './components/Stories';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <SearchForm />
        <Buttons />
        <Stories/>
      </main>
    </>
  )
}

export default App

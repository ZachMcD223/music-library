import { useState, useRef, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SearchBar from "./Components/SearchBar";
import Gallery from "./Components/Gallery";
import { DataContext} from "./context/DataContext";
import { SearchContext } from "./context/SearchContext";
import AlbumView from "./Components/AlbumView";
import ArtistView from "./Components/ArtistView";

function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])

  let searchInput = useRef('')

  const handleSearch = async (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      const url = encodeURI(`https://itunes.apple.com/search?term=${term}`);
      document.title = `${term} Music`
      const response = await fetch(url);
       const data = await response.json();
      console.log(data);

      if (data.results.length) {
             setData(data.results)
             } else {
              setMessage('Not Found')
             }
     } 
     if (term) fetchData()
  }

  return (
    <div className="App">
      {message}
      <Router>
        <Route exact path={'/'}>
          <SearchContext.Provider value={{term: searchInput, handleSearch: handleSearch}}>
            <SearchBar />
          </SearchContext.Provider>
            <DataContext.Provider value={data}>
            </DataContext.Provider>
        </Route>
        <Route path="/album/:id">
          <AlbumView />
        </Route>
        <Route path="/artist/:id">
          <ArtistView />
        </Route>
      </Router>
    </div>
  );
}
export default App;

import React, { useState } from 'react';
import './App.css';
import Add from './components/add';
import Filter from './components/Filter';
import MovieList  from './components/MovieList';
import { uuid } from 'uuidv4'; 
import { BrowserRouter} from 'react-router-dom';


const App = () => {
  const [keyword, setKeyword] = useState("")
  const [rate,setRate] = useState(1)

  const [movies,setMovies] = useState([
    {
      id:uuid(),
      title: "Kingsglaive",
      trailer:"https://youtu.be/nGl_2gYrfM0",
      description: "King Regis commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTEwNzMxNTU5M15BMl5BanBnXkFtZTgwMzMyMjg3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg' ,
      rating: 4,
    },
    {
      id:uuid(),
      title : "Social Dilemma",
      trailer:"https://youtu.be/uaaC57tcci0",
      description : " It goes into depth on how social media's design is meant to nurture an addiction, manipulate people and governments, and spread conspiracy theories and disinformation.",
      imageUrl : 'https://m.media-amazon.com/images/M/MV5BNDVhMGNhYjEtMDkwZi00NmQ5LWFkODktYzhiYjY2NTZmYTNhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR3,0,182,268_AL_.jpg',
      rating :3  ,
    },
    {
      id:uuid(),
      title : "Un homme en colère",
      trailer:"https://youtu.be/Zk2dnNQaXBw",
      description : "The plot follows H, a cold and mysterious character working at a cash truck company responsible for moving hundreds of millions of dollars around Los Angeles each week.",
      imageUrl : 'https://m.media-amazon.com/images/M/MV5BNGVkOTlhOTktNjZiNS00NDg3LWIxMDAtZTY5Y2E0YjllN2IxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      rating : 7,
    
    }
  ]);

  const search=(text)=>{
    setKeyword(text)
  }
const handleRating=(number)=>{
  setRate(number)
}
const addMovie =(newMovie)=>setMovies([...movies,newMovie])
return (
  <div className="app">

    <div className="sousapp">
      <h2 style={{ color:'red',marginLeft:50,marginRight:100}}>watch your best movies here</h2>
      <Filter search={search} handleRating={handleRating} />
      <Add addMovie={addMovie}/>
    </div>

    <BrowserRouter > 
        <MovieList movies = {movies.filter( el=> el.title.toLowerCase().includes(keyword.toLowerCase().trim())&& el.rating>=rate) } />
      </BrowserRouter>
  </div>
);


};
export default App;
import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'
import { Link } from 'react-router-dom';

const apikey = "f04bc08060e3bc11a6a1152f88a079d8"


const url1 = "https://api.themoviedb.org/3/movie/";
const pop = "popular"
const now = "now_playing"
const tprated = "top_rated"

const imgurl = "https://image.tmdb.org/t/p/original"


const Card = ({img}) => (
  <img className='card' src={img} alt='cover'/>
)

const Row = ({title, arr=[] }) => (
  <div className='row'>
    <h2>{title}</h2>

    <div>
            {arr.map((item, index) => (
                <Card key={index} img={`${imgurl}/${item.poster_path}`} />
            ))}
        </div>
    
    
  </div>
)
const Home = () => {

  const [Popular,setPopular] = useState([]) 
  const [nowPlaying,setnowPlaying] = useState([]) 
  const [topRated,settopRated] = useState([]) 
  const [AllGenre,setAllGenre] = useState([]) 
  

  useEffect(() => {

    const fetchpopular = async() =>{
      
      const { data : {results}} = await axios.get(`${url1}${pop}?language=en-US&page=1&api_key=${apikey}`) // destructuring data
      
      setPopular(results)
      
    };
    fetchpopular()


    const fetchnowplaying = async() =>{
      
      const { data : {results}} = await axios.get(`${url1}${now}?language=en-US&page=1&api_key=${apikey}`) // destructuring data
      
      setnowPlaying(results)
    };
    fetchnowplaying()


    const fetchtoprated = async() =>{
      
      const { data : {results}} = await axios.get(`${url1}${tprated}?language=en-US&page=1&api_key=${apikey}`) // destructuring data
      
      settopRated(results)
    };
    fetchtoprated()

    // https://api.themoviedb.org/3/genre/movie/list?language=en-US&page=1&api_key=f04bc08060e3bc11a6a1152f88a079d8

    const getAllgenre = async() =>{
      
      const { data : {genres}} = await axios.get("https://api.themoviedb.org/3/genre/movie/list?language=en-US&page=1&api_key=f04bc08060e3bc11a6a1152f88a079d8") // destructuring data
      
      setAllGenre(genres)
      //console.log(results);
    };
    getAllgenre()
    

  },[])

  return (
    <section className='home'>
      <div className="banner" style={{backgroundImage: Popular[0]? `url(${`${imgurl}/${Popular[1].poster_path}`})`:"rgb(16,16,16)"}}>
        {Popular[1] && <h1>{Popular[1].original_title}</h1>}
        {Popular[1] && <p>{Popular[1].overview}</p>}

        <div>
          <button>play</button>
          <button>My list</button>
        </div>

        
        
      </div>

      <Row title={"Popular Movies"} arr={Popular}/>
      <Row title={"Nowplaying Movies"} arr={nowPlaying}/>
      <Row title={"TopRated Movies"} arr={topRated}/>
     
     <div className="genre_box">
        {AllGenre.map((item) => (
          <Link key={item.id} to = {`/AllGenre/${item.id}`}>{item.name}</Link>
        ))}
     </div>
      
      
    </section>
  );
}

export default Home
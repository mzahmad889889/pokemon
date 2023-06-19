import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Home() {
  const [search, setSearch] = useState([])
  const [result, setResult] = useState([])
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?&limit=9`);
  const [loading, setLoading] = useState(true);
  const [prevUrl, setPrevUrl] = useState();
  const [nextUrl, setNextUrl] = useState();
  const [disable, setDisable] = useState();
  const[value, setValue] = useState();
 
 
  const pokeFun = async() => {
    setLoading(true)
    const res = await axios.get(url);
    setLoading(false)
    getPokemon(res.data.results);
    setPrevUrl(res.data.previous);
    setNextUrl(res.data.next); 
    setDisable(res.data.previous===null);
    
  }
  
  
  const BtnSearch =(value)=>{
    const res = search.filter(f => f.name.toLowerCase().includes(value.charAt(0).toLowerCase()));
    setResult(res);
  }

  const getPokemon = async(res) =>{
    res.map(async(item)=>{
      const result  = await axios.get(item.url);
      setSearch(state =>{
        const newState = [...state, result.data];
        const uniqueValues = newState.filter(
          (value, index, self) => self.findIndex((v) => v.id === value.id) === index
        );
        uniqueValues.sort((a, b) => a.id > b.id ? 1 : -1);
        return uniqueValues;
      })
    

      setResult((state) => {
        const newState = [...state, result.data];
        const uniqueValues = newState.filter(
          (value, index, self) => self.findIndex((v) => v.id === value.id) === index
        );
        uniqueValues.sort((a, b) => a.id > b.id ? 1 : -1);
        return uniqueValues;
      });
      
      
       
  })
 

  }  

  useEffect(() => {
    pokeFun()
   }, [url]);


  return (
    <> 
      
       <Card result={result} loading={loading}  BtnChange={BtnSearch} />
    <div className='PN_btn'>
        <button disabled={disable} onClick={()=>{
          setResult([])
          setUrl(prevUrl)
        }}>previous</button>
        <button onClick={()=>{
           setResult([])
          setUrl(nextUrl)
        }}>Next</button>
    </div>
    
  </>
  );
}

export default Home;

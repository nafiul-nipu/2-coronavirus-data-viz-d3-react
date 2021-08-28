/**
 * useEffect is used to manage a side effect
 * for example, let's say if the csv updates then
 * we will fetch more data - in this case we will
 * call useEffect
 * first argument - a function
 * second argument - a dependency
 */
import './App.css';
import { useState, useCallback, useEffect } from 'react';
import { csv } from 'd3-fetch';
import { message } from './modules/message';

const csvUrl = "https://gist.githubusercontent.com/nafiul-nipu/32fe283bbec1fb814903d67a4cb45b36/raw/cssNamedColors.csv"

function App() {
  const [data, setData] = useState(null)

  useEffect(() =>{
    // //  loadding the data
    csv(csvUrl).then(setData);
  }, []);

  

  return (
    <div>{data ? message(data)  : "loading"}</div>    
  );
}

export default App;

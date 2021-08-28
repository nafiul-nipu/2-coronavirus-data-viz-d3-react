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
import { csv, arc, pie } from 'd3';
// import {message} from './components/02. visualizingData/message'

const width = 960;
const height = 500;
const centerX = width/2;
const centerY = height/2;

const csvUrl = "https://gist.githubusercontent.com/nafiul-nipu/32fe283bbec1fb814903d67a4cb45b36/raw/cssNamedColors.csv"

const pieArc = arc()
                .innerRadius(0)
                .outerRadius(width)

const colorPie = pie().value(1)

function App() {
  const [data, setData] = useState(null)

  useEffect(() =>{
    // //  loadding the data
    csv(csvUrl).then(setData);
  }, []);

  if(!data){
    return <pre>Loading ...</pre>
  }

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
          {colorPie(data)
            .map( (d,i) => (
            <path
              key={i}
              fill={d.data['RGB hex value']}
              d={pieArc(d)}
            
            />))}


        {/* {data.map( (d, i) => (
          <path
            key={i}
            fill={d['RGB hex value']}
            d={pieArc({
              startAngle: i / data.length * 2 * Math.PI,
              endAngle: (i + 1) / data.length * 2 * Math.PI
            })}
          
          />))} */}
      </g>
    </svg>
  );

}

export default App;

import React, {useState, useEffect} from 'react'
import Review from './review'
import reviews  from './data';
import left from './left.svg';
import right from './right.svg'

function App() {
  const [value, setValue] = useState(0)
  const [review, setReview] = useState([]);
  const increase= () => {
    if(value < reviews.length && value >=0){
      if(value=== reviews.length-1){
        setValue(0);
      }else{

        setValue(value+1)
        console.log(value);
      }
    }
  }
  const decrease= () => {
    if(value < reviews.length && value >=0){
      if(value===0){
        setValue(value + reviews.length-1);
      }
      else{
        setValue(value-1)
        console.log(value);

      }
    }
  }

  let prevNum;
  const random = ()=>{
    var randomNumber = Math.floor((Math.random() * reviews.length));
    if(prevNum){
      if(prevNum ===randomNumber){
        let newRandNum= Math.floor((Math.random() * randomNumber));
        setValue(newRandNum);
      }
    }
    setValue(randomNumber);
    prevNum = randomNumber;
    console.log(randomNumber)
  }

  useEffect(() => {

    setReview(reviews[value]);
    
    // return () => {
    //   cleanup
    // }
  }, [value])
  return (
    <main>
    
    <div className="header">
      <h1>our Reviews</h1>
    </div>
    
    <div className="container">
      <Review {...review}></Review>
      <div className="btn-container">
        <button className="left" onClick={decrease}><img src={left} alt="" /></button>
        <button className="right"onClick={increase}><img src={right} alt="" /></button>
      </div>
      <button className="btn" onClick={random}>Surprise me</button>
    </div>
    </main>
  );
}

export default App;

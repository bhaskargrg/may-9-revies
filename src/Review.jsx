import React, { useState } from 'react'
import { FaGithub,FaQuoteRight ,FaChevronLeft, FaChevronRight} from "react-icons/fa";
import reviews from './data';

function Review() {
    const [index, setIndex] = useState(0);
    const {name,job,image,text}=reviews[index];
    const numChecker=(number)=>{
        if(number>reviews.length-1){
            return 0;
        }
        if(number<0){
            return reviews.length-1;
        }
        return number;
    }
    const previous=()=>{
         setIndex((index) => {
           let newIndex = index - 1;
          return  numChecker(newIndex);
         });
    }
    const next=()=>{
         setIndex((index) => {
           let newIndex = index + 1;
        return  numChecker(newIndex)
         });
    }
    
    const randomPerson = () => {
     let radomNumber= Math.floor(Math.random()*reviews.length);
    if(radomNumber===index){
      radomNumber = index + 1;
    }
    setIndex(numChecker(radomNumber))
    };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <div className="info">{text}</div>
      <div className="button-container">
        <button className="prev-btn" onClick={previous}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={next}>
          <FaChevronRight />
        </button>
      </div>

      <button onClick={randomPerson} className="random-btn">
        Suprise me
      </button>
    </article>
  );
}

export default Review
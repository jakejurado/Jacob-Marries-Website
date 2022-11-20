import React, { useState } from 'react'
import { findUrlPath } from '../functions/findUrlPath';
import { swapTiles } from '../functions/swapTiles';

import "../styles/navbar.css";

import home_option from '../../public/photos/16home01.jpg'
import wedding_option from '../../public/photos/01wedding01.jpg'
import elope_option from '../../public/photos/02elope01.jpg'
import license_option from '../../public/photos/03license01.jpg'
import price_option from '../../public/photos/04price01.jpg'
import photo_option from '../../public/photos/05photo01.jpg'
import video_option from '../../public/photos/06video01.jpg'
import ceremony_option from '../../public/photos/07ceremony01.jpg'
import review_option from '../../public/photos/08review01.jpg'
import about_option from '../../public/photos/09about01.jpg'
import question_option from '../../public/photos/11question01.jpg'
import blog_option from '../../public/photos/12blog01.jpg'
import left_arrow from '../../public/photos/arrow2l.png'
import right_arrow from '../../public/photos/arrow2r.png'


function Navbar(){
  const [intervalId, setIntervalId] = useState(null);

  function handleArrowHover(e){
    console.log(e.type)
    //If mouse stops hovering then stop the scrolling
    if(e.type==='mouseleave'){
      console.log('mouseleave');
      clearInterval(intervalId);
      
    //if mouse hovers arrow then start scrolling
    } else {  //mouseenter
      console.log('mouseenter')

      //grab which arrow was hovered
      const id= e.target.id;
      
      //put all box dom elements into an array.
      let all_boxes = document.getElementsByClassName('photoli');
      const navBoxes = Object.values(all_boxes);

      // iterate through the array and find the part that is in view.
      const bxIndex = [Infinity, -Infinity];
      for(let i = 0, j = 0; i < navBoxes.length; i++){
        const curr = navBoxes[i];
        const currInView = isInViewport(curr);
        if(currInView & i < bxIndex[0]) bxIndex[0] = i;
        if(currInView & i > bxIndex[1]) bxIndex[1] = i;
      }

      const lastBoxIndex = navBoxes.length;
      let nextBoxIndex = bxIndex[1] + 1;

      // navBoxes[nextBoxIndex].scrollIntoView({behavior: "smooth", inline: "end"});
      // nextBoxIndex++;

      let currInterval = setInterval(()=>{
        console.log('interval');
        const dom = document.getElementById('outerNavUL');
        
        // if(nextBoxIndex >= lastBoxIndex) {
        if(isInViewport(document.getElementById('blogTile'))) {
          clearInterval(currInterval);
        }else{
          // navBoxes[nextBoxIndex].scrollIntoView({behavior: "smooth", inline: "end"});
          // nextBoxIndex++;
          dom.scrollBy(2, 0);
        }
      }, 7)
      setIntervalId(currInterval);
    }
  }
  
  //scrolling function for the navbar.
  function navBarScrolling(e){
    //If mouseup then stop the scrolling
    if(e.type==='mouseup'){
      clearInterval(intervalId);
      
    //if mousedown then start scrolling...
    } else { 

      //put all the tile dom elements into an array.
      let all_tiles = document.getElementsByClassName('photoli');
      const tileArray = Object.values(all_tiles);

      //Depending which button (left or right) is pushed, we'll want to scroll different directions.
      //grab the id of the clicked arrow
      const id= e.target.id;
      
      //if right arrow then reverse the tileArray, so that we can use the same code below.
      if(id === 'leftArrow') {
        tileArray.reverse();
      }

      // iterate through the array and find the first and last index of tiles that are in view
      const bxIndex = [Infinity, -Infinity];
      for(let i = 0, j = 0; i < tileArray.length; i++){
        const curr = tileArray[i];
        const currInView = isInViewport(curr);
        if(currInView & i < bxIndex[0]) bxIndex[0] = i;
        if(currInView & i > bxIndex[1]) bxIndex[1] = i;
      }
      
      //store the last tile dom element from the array and the index of the next tile that is out of view
      let nextTileIndex = bxIndex[1] + 1; 
      const lastTileElement = tileArray[tileArray.length - 1]

      //depending on the direction of the scroll, we'll need to adjust the inline proeprty of scrollIntoView
      const inlineProperty = id ==='rightArrow' ? 'start' : 'end'
      
      //if the last tile is not already in view then scroll.
      if(!isInViewport(lastTileElement)){
        tileArray[nextTileIndex].scrollIntoView({behavior: "smooth", inline: inlineProperty});
        nextTileIndex++;
      }
      
      //set the interval to continue to scroll as long as mousedown or we reach the last tile
      let currInterval = setInterval(()=>{
        console.log('interval');
        
        //if we reach the end then clear the interval, otherwise increment one at a time
        if(isInViewport(lastTileElement)) {
          console.log('do we enter');
          clearInterval(currInterval);
        }else{
          tileArray[nextTileIndex].scrollIntoView({behavior: "smooth", inline: inlineProperty});
          nextTileIndex++;
        }
      }, 1000)
      //set state so that the interval can be cleared on mouseup.
      setIntervalId(currInterval);
    }
  }

  //add 'img_clicked' class which animates (rotates & enlarges) the tile before going to next page
  function handleClick(e){
    window.location = findUrlPath(e)  //waits for the animation to stop before continuing to URL
  }

  



  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  return(
    <nav>
      <div id='contactDiv' className='contact'>
        <ul className='a_style'>
          <li><a href="mailto:jacob@jacobmarries.com?subject=Will you marry me?">Jacob@JacobMarries.com</a></li>
          <li><a href="tel:+13235523139">(323) 552-3139</a></li>
        </ul>
      </div>
      <div id="navDiv">
        <div className="photoNav" id='arrowL' onMouseDown={navBarScrolling} onMouseUp={navBarScrolling}><img src={left_arrow} id='leftArrow' /></div>
        <div id='outerNavUL'>
          <ul id="navUL">
            <li className="photoli" id='home'><a href="index.html" ><img src={home_option} onMouseEnter={swapTiles} onMouseLeave={swapTiles} onClick={handleClick} alt="a simple 4 line drawing of a home to go back to the main landing page" id="homeTile" /></a></li>
            <li className="photoli" id='wedding'><a href="wedding.html" ><img src={wedding_option} onMouseEnter={swapTiles} onMouseLeave={swapTiles} onClick={handleClick} alt="A bunch of people at a wedding with the word WEDDING written down the center" id="weddingTile" /></a></li>
            <li className="photoli" id='elopement'><a href="elope.html"><img src={elope_option} onMouseEnter={swapTiles} onMouseLeave={swapTiles} onClick={handleClick} alt="drawing of two people eloping at the Griffith Observatory, with the word ELOPEMENT written on the bottom" id="elopementTile" /></a></li>
            <li className="photoli" id='license'><a href="license.html" ><img src={license_option} onMouseEnter={swapTiles} onMouseLeave={swapTiles} onClick={handleClick} alt="A drawing depicting a marriage license" id="licenseTile" /></a></li>
            <li className="photoli" id='price'><a href="price.html" ><img src={price_option} onMouseEnter={swapTiles} onMouseLeave={swapTiles} onClick={handleClick} alt="A drawing of money with the word: PRICE" id="priceTile" /></a></li>
            <li className="photoli" id='photos'><a href="photos.html" ><img src={photo_option} onMouseEnter={swapTiles} onMouseLeave={swapTiles} onClick={handleClick} alt="A drawing of a camera with the word PHOTOS written on the side" id="photoTile" /></a></li>
            <li className="photoli" id="video"><a href="video.html"><img src={video_option} onMouseEnter={swapTiles} onMouseLeave={swapTiles} onClick={handleClick} alt="A drawing of 3 people watching a giant screen.  The word VIDEO is written at the bottom" id="videoTile" /></a></li>
            <li className="photoli" id='ceremony'><a href="http://ceremonybuilder.jacobmarries.com/"><img src={ceremony_option} onMouseEnter={swapTiles} onMouseLeave={swapTiles} onClick={handleClick} alt="a drawing of the page that this link takes you to" id="ceremonyTile"/></a></li>
            <li className="photoli" id='review'><a href='https://www.yelp.com/biz/jacob-marries-los-angeles'><img src={review_option} onMouseEnter={swapTiles} onMouseLeave={swapTiles} onClick={handleClick} alt="A drawing of a guy speaking.  The word REVIEWS is written on the bottom" id="reviewTile" /></a></li>
            <li className="photoli" id='about'><a href="about.html"><img src={about_option} onMouseEnter={swapTiles} onMouseLeave={swapTiles} onClick={handleClick} alt="A drawing of myself with the word ABOUT writeen on the side." id="aboutTile" /></a></li>
            <li className="photoli" id='question'><a href="question.html" ><img src={question_option} onMouseEnter={swapTiles} onMouseLeave={swapTiles} onClick={handleClick} alt="a drawing of a question mark for frequently asked questions" id="questionTile" /></a></li>
            <li className="photoli" id='blog'><a href="http://blog.jacobmarries.com"><img src={blog_option} onMouseEnter={swapTiles} onMouseLeave={swapTiles} onClick={handleClick} alt="a drawing of a computer open to my blog page" id="blogTile"/></a></li>
          </ul>
        </div>
        <div className="photoNav" id='arrowR' onMouseDown={navBarScrolling} onMouseUp={navBarScrolling}><img src={right_arrow} width='25px' id='rightArrow' /></div>
      </div>
      <div className='contact'>
        <a href='contact.html' className='a_style' id='contactFormLink'>Contact Form</a>
      </div>
      
    </nav>
  )
}

export default Navbar;
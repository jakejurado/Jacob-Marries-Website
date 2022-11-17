import React from 'react'
import "../styles/navbar.css";
import wedding_option from '../../public/photos/01wedding01.jpg'
import wedding_option2 from '../../public/photos/01wedding02.jpg'
import elope_option from '../../public/photos/02elope01.jpg'
import elope_option2 from '../../public/photos/02elope02.jpg'
import license_option from '../../public/photos/03license01.jpg'
import license_option2 from '../../public/photos/03license02.jpg'
import price_option from '../../public/photos/04price01.jpg'
import price_option2 from '../../public/photos/04price02.jpg'
import photo_option from '../../public/photos/05photo01.jpg'
import photo_option2 from '../../public/photos/05photo02.jpg'
import video_option from '../../public/photos/06video01.jpg'
import video_option2 from '../../public/photos/06video02.jpg'
import ceremony_option from '../../public/photos/07ceremony01.jpg'
import ceremony_option2 from '../../public/photos/07ceremony02.jpg'
import review_option from '../../public/photos/08review01.jpg'
import review_option2 from '../../public/photos/08review02.jpg'
import about_option from '../../public/photos/09about01.jpg'
import about_option2 from '../../public/photos/09about02.jpg'
import question_option from '../../public/photos/11question01.jpg'
import question_option2 from '../../public/photos/11question02.jpg'
import blog_option from '../../public/photos/12blog01.jpg'
import blog_option2 from '../../public/photos/12blog02.jpg'
import last_option from '../../public/photos/15last01.jpg'
import left_arrow from '../../public/photos/arrow2l.png'
import right_arrow from '../../public/photos/arrow2r.png'

function Navbar(){

  let scrolling = false;
  function handleScroll(e){
    console.log('enter handleScroll')
    const id= e.target.id;
    const dom = document.getElementById('ceremony');
    // dom.scrollIntoView({behavior: "smooth", block: "end", inline: "start"})
    // console.log(dom);
    // const endPoint = id === 'arrowL' ? 562 : 0
    // let addInterval = id === 'arrowL' ? (50 * 1) : (50 * -1);
    // scrolling = true;
    // console.log(id, dom, endPoint, addInterval)
    
    let all_boxes = document.getElementsByClassName('photoli');
    const navBoxes = Object.values(all_boxes);
    
    const bxIndex = [Infinity, -Infinity];
    for(let i = 0, j = 0; i < navBoxes.length; i++){
      const curr = navBoxes[i];
      const currInView = isInViewport(curr);
      if(currInView & i < bxIndex[0]) bxIndex[0] = i;
      if(currInView & i > bxIndex[1]) bxIndex[1] = i;
    }

    const loopNavArray = loopArray(bxIndex[1] + 1, navBoxes)

    const intervalId = setInterval(()=>{
      loopNavArray();
    }, 500);
    // let doc = navBoxes[bxIndex[1] + 1];
    // doc.scrollIntoView({behavior: "smooth", inline: "end"});
  }

  function loopArray(nextIndex, arrOfDom){
    const lastIndex = arrOfDom.length - 1;
    return (() =>{
      console.log('still going');
      if(nextIndex !== lastIndex){
        arrOfDom[nextIndex].scrollIntoView({behavior: "smooth", inline: "end"});
        nextIndex++;
      }
    })
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
        <ul>
          <li>Jacob@JacobMarries.com</li>
          <li>(323) 552-3139</li>
        </ul>
      </div>
      <div id="navDiv">
        <div className="photoNav" id='arrowL' onMouseEnter={handleScroll} onMouseLeave={()=>scrolling = false}><img src={left_arrow}/></div>
        <div id='outerNavUL'>
          <ul id="navUL">
            <li className="photoli" id='home'><a href="index.html" ><img src={last_option} alt="a simple 4 line drawing of a home to go back to the main landing page" id="homeTile" /></a></li>
            <li className="photoli" id='wedding'><a href="wedding.html" ><img src={wedding_option} alt="A bunch of people at a wedding with the word WEDDING written down the center" id="weddingTile" /></a></li>
            <li className="photoli" id='elopement'><a href="elope.html"><img src={elope_option} alt="drawing of two people eloping at the Griffith Observatory, with the word ELOPEMENT written on the bottom" id="elopementTile" /></a></li>
            <li className="photoli" id='license'><a href="license.html" ><img src={license_option} alt="A drawing depicting a marriage license" id="licenseTile" /></a></li>
            <li className="photoli" id='price'><a href="price.html" ><img src={price_option} alt="A drawing of money with the word: PRICE" id="priceTile" /></a></li>
            <li className="photoli" id='photos'><a href="photos.html" ><img src={photo_option} alt="A drawing of a camera with the word PHOTOS written on the side" id="photoTile" /></a></li>
            <li className="photoli" id="video"><a href="video.html"><img src={video_option} alt="A drawing of 3 people watching a giant screen.  The word VIDEO is written at the bottom" id="videoTile" /></a></li>
            <li className="photoli" id='ceremony'><a href="http://ceremonybuilder.jacobmarries.com/"><img src={ceremony_option} alt="a drawing of the page that this link takes you to" id="ceremonyTile"/></a></li>
            <li className="photoli" id='review'><a href='https://www.yelp.com/biz/jacob-marries-los-angeles'><img src={review_option} alt="A drawing of a guy speaking.  The word REVIEWS is written on the bottom" id="reviewTile" /></a></li>
            <li className="photoli" id='about'><a href="about.html"><img src={about_option} alt="A drawing of myself with the word ABOUT writeen on the side." id="aboutTile" /></a></li>
            <li className="photoli" id='question'><a href="question.html" ><img src={question_option} alt="a drawing of a question mark for frequently asked questions" id="questionTile" /></a></li>
            <li className="photoli" id='blog'><a href="http://blog.jacobmarries.com"><img src={blog_option} alt="a drawing of a computer open to my blog page" id="blogTile"/></a></li>
          </ul>
        </div>
        <div className="photoNav" id='arrowR'><img src={right_arrow} width='25px'/></div>
      </div>
      <div className='contact'>
        Contact
      </div>
      
    </nav>
  )
}

export default Navbar;
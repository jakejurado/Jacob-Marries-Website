import React, {useEffect, useState, lazy} from 'react';
import MainTitle from './MainTitle';
import TagWords from './TagWords';
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
import jacob_option from '../../public/photos/08sqj2.jpg'
import about_option from '../../public/photos/09about01.jpg'
import about_option2 from '../../public/photos/09about02.jpg'
import question_option from '../../public/photos/11question01.jpg'
import question_option2 from '../../public/photos/11question02.jpg'
import blog_option from '../../public/photos/12blog01.jpg'
import blog_option2 from '../../public/photos/12blog02.jpg'
import look_option from '../../public/photos/13look01.jpg'
import look_option2 from '../../public/photos/13look02.jpg'
import last_option from '../../public/photos/15last01.jpg'

import wed_gif from '../../public/photos/tiles_loading/wed/wed.gif';
import elope_gif from '../../public/photos/tiles_loading/elope/elope.gif';
import wedMobile_gif from '../../public/photos/tiles_loading/wed/wedMobile.gif';
import elopeMobile_gif from '../../public/photos/tiles_loading/elope/elopeMobile.gif';


function JacobMarries(){

//Set state for all the images on the page.
  const [weddingImage, setWeddingImage] = useState(wedding_option);
  const [elopeImage, setElopeImage] = useState(elope_option);
  const [licenseImage, setLicenseImage] = useState(license_option);
  const [priceImage, setPriceImage] = useState(price_option);
  const [videoImage, setVideoImage] = useState(video_option)
  const [photoImage, setPhotoImage] = useState(photo_option)
  const [ceremonyImage, setCeremonyImage] = useState(ceremony_option)
  const [reviewImage, setReviewImage] = useState(review_option)
  const [aboutImage, setAboutImage] = useState(about_option)
  const [questionImage, setQuestionImage] = useState(question_option)
  const [blogImage, setBlogImage] = useState(blog_option)
  const [lookImage, setLookImage] = useState(look_option)
  const [myInterval, setMyInterval] = useState(null);

  
  //****OPENING TILE SWAP ANIMATION****
  //DESCRIPTION: Animates the tiles so that one tile travels 5 spots when page is loaded

   //moves tiles around in predetermined fashion.
   function swapTilesAnimation(){
    //grab all the tile nodes from the DOM
    const allTiles = Object.values(document.getElementsByClassName('navPhotos'));
    //contains the indexes of the tiles, thus the movements
    const movement = [  
      [13, 1, 2, 3, 4, 5, 6, 0, 8, 9, 10, 11, 12, 7],
      [0, 13, 2, 3, 4, 5, 6, 1, 8, 9, 10, 11, 12, 7],
      [0, 1, 13, 3, 4, 5, 6, 2, 8, 9, 10, 11, 12, 7],
      [0, 1, 2, 3, 4, 13, 6, 5, 8, 9, 10, 11, 12, 7],
      [0, 1, 2, 3, 13, 5, 6, 4, 8, 9, 10, 11, 12, 7],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    ];

    const addTime = 450;
    let intervalTime = 0; //

    //Iterate over each movement subArray to update each node' style order, which makes it appear as if the tiles are moving.
    movement.forEach(arr => {
      setTimeout(()=>{
        allTiles.forEach((tile, index) => {
          tile.style.order = arr[index];
        })
      }, intervalTime)
      intervalTime += addTime;
    })
  }

  //initiate the tile shuffle only when page loads.
  useEffect(() =>{
    setTimeout(()=>{swapTilesAnimation()}, 0);
  }, [])
  




  //ANIMATE TILE WHILE HOVER
  //Swaps the image when mouseenters to a gif and then back to image wheb mouseleaves
  function handleMouse(e){
    const mouseEvent = e._reactName;
    switch(e.target.id){
      case 'weddingTile':
        weddingImage === wedding_option ? setWeddingImage(wed_gif) : setWeddingImage(wedding_option);
        break;
      case 'elopementTile':
        elopeImage === elope_option ? setElopeImage(elope_gif) : setElopeImage(elope_option);
        break;
      case 'licenseTile':
        licenseImage === license_option ? setLicenseImage(license_option2) : setLicenseImage(license_option);
        break;
      case 'priceTile':
        priceImage === price_option ? setPriceImage(price_option2) : setPriceImage(price_option);
        break;
      case 'photoTile':
        photoImage === photo_option ? setPhotoImage(photo_option2) : setPhotoImage(photo_option);
        break;
      case 'videoTile':
        videoImage === video_option ? setVideoImage(video_option2) : setVideoImage(video_option);
        break;
      case 'ceremonyTile':
        ceremonyImage === ceremony_option ? setCeremonyImage(ceremony_option2) : setCeremonyImage(ceremony_option);
        break;
      case 'reviewTile':
        reviewImage === review_option ? setReviewImage(review_option2) : setReviewImage(review_option);
        break;
      case 'aboutTile':
        aboutImage === about_option ? setAboutImage(about_option2) : setAboutImage(about_option);
        break;
      case 'questionTile':
        questionImage === question_option ? setQuestionImage(question_option2) : setQuestionImage(question_option);
        break;
      case 'ceremonyTile':
        ceremonyImage === ceremony_option ? setCeremonyImage(ceremony_option2) : setceremonyImage(ceremony_option);
        break;
      case 'blogTile':
        blogImage === blog_option ? setBlogImage(blog_option2) : setBlogImage(blog_option);
        break;
      case 'lookTile':
        lookImage === look_option ? setLookImage(look_option2) : setLookImage(look_option);
        break;
      default:
        console.log('error');
        break;
    }
  }

  //find the url that is associated with the tile clickeked
  function findUrlPath(e){
    //sets where to direct page
    let url ='';
    switch(e.target.id){
      case 'weddingTile':
        url = 'http://www.jacobmarries.com/wedding.html'
        break;
      case 'elopementTile':
        url = 'http://www.jacobmarries.com/elope.html'
        break;
      case 'licenseTile':
        url ='http://jacobmarries.com/license.html'
        break;
      case 'priceTile':
        url ='http://jacobmarries.com/price.html'
        break;
      case 'videoTile':
        url ='http://jacobmarries.com/video.html'
        break;
      case 'photoTile':
        url ='http://jacobmarries.com/photos.html'
        break;
      case 'builderTile':
        url = 'http://ceremonybuilder.jacobmarries.com/'
        break;
      case 'reviewTile':
        url ='https://www.yelp.com/biz/jacob-marries-los-angeles'
        break;
      case 'aboutTile':
        url ='http://jacobmarries.com/about.html'
        break;
      case 'questionTile':
        url ='http://jacobmarries.com/question.html'
        break;
      case 'blogTile':
        url ='https://blog.jacobmarries.com/'
        break;
      default:
        console.log('error');
        break;
    }
    return url;
  }


  //add 'img_clicked' class which animates (rotates & enlarges) the tile before going to next page
  function handleClick(e){

    //adds animation to the clicked element (roates and enlarges)
    e.currentTarget.parentNode.classList.add('img_clicked');
    
    //grab the URL from the tile that was clicked
    const url = findUrlPath(e);

    //waits for the animation to stop before continuing to URL
    setTimeout(()=>{
      window.location = url
    }, 800)
  }



  //MOBILE - ANIMATION 
  //checks the screen size and then animates tile in intervals
  function animationForMobile(){
    const smallScreen = window.matchMedia('(max-width: 450px)');
    if(smallScreen.matches){
      setTimeout(()=>{
        setWeddingImage(wedMobile_gif)
        // weddingImage === wedding_option ? setWeddingImage(wedMobile_gif) : setWeddingImage(wedding_option);
      }, 2000);
      setInterval(()=>{
        setWeddingImage(wedding_option)
        setTimeout(()=>setWeddingImage(wedMobile_gif));
      }, 20000)
    }
  }

  useEffect(() => {
    animationForMobile();
  }, []);
  


  return (
    <nav>
      <MainTitle />
      <div id='mainNavigation'>
        <TagWords />
        <ul id="infoLinks">
          <li className="navPhotos" id='wedding'><img className='imgNav' src={weddingImage} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick} alt="A bunch of people at a wedding with the word WEDDING written down the center" id="weddingTile" /></li>
          <li className="navPhotos" id='elopement'><img className='imgNav' src={elopeImage} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick} alt="drawing of two people eloping at the Griffith Observatory, with the word ELOPEMENT written on the bottom" id="elopementTile" /></li>
          <li className="navPhotos" id='license'><img className='imgNav' src={licenseImage} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick} alt="A drawing depicting a marriage license" id="licenseTile" /></li>
          <li className="navPhotos" id='price'><img className='imgNav' src={priceImage} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick} alt="A drawing of money with the word: PRICE" id="priceTile" /></li> 
          <li className="navPhotos" id='photo'><img className='imgNav' src={photoImage} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick} alt="A drawing of a camera with the word PHOTOS written on the side" id="photoTile" /></li> 
          <li className="navPhotos" id='video'><img className='imgNav' src={videoImage} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick} alt="A drawing of 3 people watching a giant screen.  The word VIDEO is written at the bottom" id="videoTile" /></li> 
          <li className="navPhotos" id='ceremony'><img className='imgNav' src={ceremonyImage} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick} alt="a drawing of the page that this link takes you to" id="ceremonyTile"/></li> 
          <li className="navPhotos" id='sqjacob'><img className='imgNav' src={jacob_option} alt="A picture of Jacob" id="sqJacobTile" /></li> 
          <li className="navPhotos" id='review'><img className='imgNav' src={reviewImage} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick} alt="A drawing of a guy speaking.  The word REVIEWS is written on the bottom" id="reviewTile" /></li> 
          <li className="navPhotos" id='about'><img className='imgNav' src={aboutImage} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick} alt="A drawing of myself with the word ABOUT writeen on the side." id="aboutTile" /></li> 
          <li className="navPhotos" id='question'><img className='imgNav' src={questionImage} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick} alt="a drawing of a question mark for frequently asked questions" id="questionTile" /></li> 
          <li className="navPhotos" id='blog'><img className='imgNav' src={blogImage} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick} alt="a drawing of a computer open to my blog page" id="blogTile" /></li> 
          <li className="navPhotos" id='looklike'><img className='imgNav' src={lookImage} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick} alt="an image that compares how I look to Fred Armisen" id="lookTile" /></li> 
          <li className="navPhotos" id='lastLi'> <img className='imgNav' src={last_option}  alt="A pink tile to even things out" id="lastTile" loading="lazy" /> </li> 
        </ul>
        
      </div>
    </nav>
  )
}

export default JacobMarries
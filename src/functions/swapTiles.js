import React, {useState} from 'react';

import home_option from '../../public/photos/16home01.jpg'
import home_option2 from '../../public/photos/16home02.jpg'
import wedding_option from '../../public/photos/01wedding01.jpg'
import wed_gif from '../../public/photos/tiles_loading/wed/wed.gif';
import elope_option from '../../public/photos/02elope01.jpg'
import elope_gif from '../../public/photos/tiles_loading/elope/elope.gif'
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
import blog_option2 from '../../public/photos/12blog02.jpg';



//ANIMATE TILE WHILE HOVER
  //Swaps the image when mouseenters to a gif and then back to image wheb mouseleaves
export function swapTiles(e){
  const mouseEvent = e._reactName;
  switch(e.target.id){
    case 'homeTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? home_option2 : home_option
      // homeImage === home_option ? setHomeImage(home_option2) : setHomeImage(home_option);
      break;
    case 'weddingTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? wed_gif : wedding_option
      // weddingImage === wedding_option ? setWeddingImage(wed_gif) : setWeddingImage(wedding_option);
      break;
    case 'elopementTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? elope_gif : elope_option
      // elopeImage === elope_option ? setElopeImage(elope_gif) : setElopeImage(elope_option);
      break;
    case 'licenseTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? license_option2 : license_option
      // licenseImage === license_option ? setLicenseImage(license_option2) : setLicenseImage(license_option);
      break;
    case 'priceTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? price_option2 : price_option
      // priceImage === price_option ? setPriceImage(price_option2) : setPriceImage(price_option);
      break;
    case 'photoTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? photo_option2 : photo_option
      // photoImage === photo_option ? setPhotoImage(photo_option2) : setPhotoImage(photo_option);
      break;
    case 'videoTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? video_option2 : video_option
      // videoImage === video_option ? setVideoImage(video_option2) : setVideoImage(video_option);
      break;
    case 'ceremonyTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? ceremony_option2 : ceremony_option
      // ceremonyImage === ceremony_option ? setCeremonyImage(ceremony_option2) : setCeremonyImage(ceremony_option);
      break;
    case 'reviewTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? review_option2 : review_option
      // reviewImage === review_option ? setReviewImage(review_option2) : setReviewImage(review_option);
      break;
    case 'aboutTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? about_option2 : about_option
      // aboutImage === about_option ? setAboutImage(about_option2) : setAboutImage(about_option);
      break;
    case 'questionTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? question_option2 : question_option
      // questionImage === question_option ? setQuestionImage(question_option2) : setQuestionImage(question_option);
      break;
    case 'ceremonyTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? ceremony_option2 : ceremony_option
      // ceremonyImage === ceremony_option ? setCeremonyImage(ceremony_option2) : setceremonyImage(ceremony_option);
      break;
    case 'blogTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? blog_option2 : blog_option
      // blogImage === blog_option ? setBlogImage(blog_option2) : setBlogImage(blog_option);
      break;
    case 'lookTile':
      e.target.src = mouseEvent === 'onMouseEnter' ? look_option2 : look_option
      lookImage === look_option ? setLookImage(look_option2) : setLookImage(look_option);
      break;
    default:
      console.log('error, tile id not found');
      break;
  }
}
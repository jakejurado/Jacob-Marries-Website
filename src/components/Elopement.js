import React, { useEffect, useState } from 'react'
import '../styles/Elope.css'
import Navbar from './Navbar_new';
import background01 from '../../public/photos/PhotoR/l/JacobMarries_Art03.jpg'
import background02 from '../../public/photos/PhotoR/l/JacobMarries_Art02.jpg'
import { isInViewport } from '../functions/isInViewport';

function Elopement(){
  const [inView, setInView] = useState(false);
  const [yPosition, setYPosition] = useState(0);
  const [allDom, setAllDom] = useState();
  const backgroundImage01 = {backgroundImage: `url(${background01})`}
  const backgroundImage02 = {backgroundImage: `url(${background02})`}
  
  const backgroundColor = {backgroundColor: 'pink'}





function createFadesForDom(){
  const domElements = document.getElementById('elopeSection_01').children;
  let index = 0;
  let interval = 500;
  let lastPos = 0;

  return (arr, pos) => {
    let scrollForward = lastPos < pos ? true : false;

  }
}


window.addEventListener("scroll", () => {
  var y = window.scrollY;
  setYPosition(y);
  // console.log(y);
  displayContent(yPosition);
});

let under1 = false;
let under2 = false;


const h1 = document.getElementById('h1');
const b01 = document.getElementById('block01');
const b02 = document.getElementById('block02');
const b03 = document.getElementById('block03');
const b04 = document.getElementById('block04');

function displayContent(y){
  if(y < 250 && !under1){ //show h1
    under1 = true;
    console.log('under 500');
    h1.style.display = 'block';
    console.log(yPosition);
  }
  else if (y > 250 && y < 500 && !under2){ //hide
    console.log('over 500 under 1,000');
    under1 = false;
    under2 = true;
    h1.style.display = 'none';
    b01.style.display = 'none';
    console.log(yPosition);
  } 
  else if( y > 500 && y < 1000 && !under1) { //show block
    console.log('over 100 under 200');
    under2 = false;
    under1 = true;
    b01.style.display = 'block';
    console.log('bo1')
    console.log(yPosition);
  }
  else if(y > 1000 && y < 1250 && !under2){ //hide
    under1 = false;
    under2 = true;
    console.log(yPosition);

    b01.style.display = 'none';
    b02.style.display = 'none';
  }
  else if (y > 1250 && y < 1750 && !under1){ //show
    under2 = false;
    under1 = true;

    b02.style.display = 'block';
    console.log('bo2')
    console.log(yPosition);
  }
  else if (y > 1750 && y < 2000 && !under2){ //hide
    under1 = false;
    under2 = true;

    b02.style.display = 'none';
    console.log(yPosition);

  }
  else if(y > 2500 && y < 3000 && !under1){
    under1 = true;
    under2 = false;

    b03.style.display = 'block';
  }
  else if(y > 3000 && y < 3250 && !under2){
    under1 = false;
    under2 = true;

    b03.style.display = 'none';
  }
}
  


  
  return(
    <div id='containerElopement'>
      {/* <Navbar /> */}
      <div id='elopeSection_01' className='sectionCover' style={backgroundImage01}>
        <h1 id='h1' className='fade-in'>ELOPEMENT</h1>
        <div id='block01' className='block fade-in'>
          <div className='blockCover'>
            <p>If you are looking to get married within the next couple of weeks then an Elopement is for you.  You can come alone or with a handful of friends or family.  It is intimate, focused, and romantic.
            <br/><br/>Some of the most magical moments I’ve experienced as an officiant, have taken place with nobody else around except myself and two other people committing themselves to each other in marriage.</p>
          </div>
        </div>
        <div id='block02' className='block fade-in'>
          <div className='blockCover'>
            <p>The reasons we find ourselves there alone, without a large wedding party and many guests, are vast.  </p>
          </div>
        </div>
      </div>

      <div id='elopeSection_02' className='sectionCover' style={backgroundImage02}>
        <div id='block03' className='block fade-in' crush={yPosition}>
          <div className='blockCover'>
            <p>For some people, their relationship is so precious and sacred that including others would only distract them from the purpose of what they are embarking.</p>
          </div>
        </div>
        <div id='block04' className='block fade-in'>
          <div className='blockCover'>
          <p>Others are concerned about medical issues, citizenships, and tax rates.  <br/><br/>Sometimes couples start planning a large more traditional type of wedding, but decide to just elope because of cost and stress.</p>
          </div>
        </div>
      </div>
      <div>
        <p>I’ve also met couples who want to have a bigger ceremony down the line, but don’t want to wait that long to actually get married.</p>
      </div>
    </div>
  )
}

export default Elopement;

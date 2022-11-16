import React from 'react'

function Navbar(){
  return(
    <nav>
      <div id="navDiv">
        <div className="photoNav" id='arrowL'><img src="photos/arrow2l.png"/></div>
        <ul id="navUL">
          <li className="photoli" id='home'><a href="index.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('homeTile','','photos/16home02.jpg',1)"><img src="photos/16home01.jpg" alt="a simple 4 line drawing of a home to go back to the main landing page" id="homeTile" /></a></li>
          <li className="photoli" id='wedding'><a href="wedding.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('weddingTile','','photos/01wedding02.jpg',1)"><img src="photos/01wedding01.jpg" alt="A bunch of people at a wedding with the word WEDDING written down the center" id="weddingTile" /></a></li>
          <li className="photoli" id='elopement'><a href="elope.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('elopementTile','','photos/02elope02.jpg',1)"><img src="photos/02elope01.jpg" alt="drawing of two people eloping at the Griffith Observatory, with the word ELOPEMENT written on the bottom" id="elopementTile" /></a></li>
          <li className="photoli" id='license'><a href="license.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('licenseTile','','photos/03license02.jpg',1)"><img src="photos/03license01.jpg" alt="A drawing depicting a marriage license" id="licenseTile" /></a></li>
          <li className="photoli" id='price'><a href="price.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('priceTile','','photos/04price02.jpg',1)"><img src="photos/04price01.jpg" alt="A drawing of money with the word: PRICE" id="priceTile" /></a></li>
          <li className="photoli" id='photos'><a href="photos.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('photoTile','','photos/05photo02.jpg',1)"><img src="photos/05photo01.jpg" alt="A drawing of a camera with the word PHOTOS written on the side" id="photoTile" /></a></li>
          <li className="photoli" id="video"><a href="video.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('videoTile','','photos/06video02.jpg',1)"><img src="photos/06video01.jpg" alt="A drawing of 3 people watching a giant screen.  The word VIDEO is written at the bottom" id="videoTile" /></a></li>
          <li className="photoli" id='ceremony'><a href="http://ceremonybuilder.jacobmarries.com/" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('ceremonyTile','','photos/07ceremony01.jpg',1)"><img src="photos/07ceremony02.jpg" alt="a drawing of the page that this link takes you to" id="ceremonyTile"/></a></li>
          <li className="photoli" id='review'><a href='https://www.yelp.com/biz/jacob-marries-los-angeles' onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('reviewTile','','photos/08review01.jpg',1)"><img src="photos/08review02.jpg" alt="A drawing of a guy speaking.  The word REVIEWS is written on the bottom" id="reviewTile"></a></li>
          <li className="photoli" id='about'><a href="about.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('aboutTile','','photos/09about02.jpg',1)"><img src="photos/09about01.jpg" alt="A drawing of myself with the word ABOUT writeen on the side." id="aboutTile" /></a></li>
          <li className="photoli" id='podcast'><a href="#" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('podcastTile','','photos/10podcast02.jpg',1)"><img src="photos/10podcast01.jpg" alt="A drawing of a guy speaking into a microphone with the words PODCAST and COMING SOON written the drawing" id="podcastTile"></a></li>
          <li className="photoli" id='question'><a href="question.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('questionTile','','photos/11question02.jpg',1)"><img src="photos/11question01.jpg" alt="a drawing of a question mark for frequently asked questions" id="questionTile" /></a></li>
          <li className="photoli" id='blog'><a href="http://blog.jacobmarries.com" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('blogTile','','photos/12blog02.jpg',1)"><img src="photos/12blog01.jpg" alt="a drawing of a computer open to my blog page" id="blogTile"/></a></li>
        </ul>
        <div className="photoNav" id='arrowR'><img src="photos/arrow2r.png"/></div>
      </div>
    </nav>
  )
}

export default Navbar;
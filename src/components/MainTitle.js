import React from 'react';


function MainTitle(){
  return(
    <div id='titleSection'>
      <div id='theTitleDiv'>
        <span id='titleName'>Jacob Marries</span>
      </div>
      <div className = 'ulBox'>
        <ul id='contactLine'>
          <li><a href="tel:+13235523139">(323) 552-3139</a></li>
          <li className='hiddenLi'>|</li>
          <li><a href="mailto:jacob@jacobmarries.com?subject=Will you marry me?">Jacob@JacobMarries.com</a></li>
          <li className='hiddenLi'>|</li>
          <li><a href='contact.html' id='contactFormLink'>Contact Form</a></li> 
        </ul>
      </div>
    </div>
  )
}

export default MainTitle

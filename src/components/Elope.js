import React from 'react';
import "../stylesANDscripts/csselope2.css"

function Elopement(){

  return(
    <div id="elopeContent">

      <div id='line1'>ELOPEMENT</div>
      <div id="background01">
        <div className='gone'><p>elope</p></div>
        <div id='par01'>
          <p>An elopement is for couples looking to get married within the next couple of weeks.  You can come alone or with a handful of friends or family.</p>
          <p>It is intimate, focused, and romantic.</p>
          <p>Some of the most magical moments I’ve experienced as an officiant, have taken place with nobody else around except myself and two other people committing themselves to each other in marriage.</p>

        </div>
      </div>

      <div id='backgroundWhite01'>
        <p>The reasons we find ourselves there alone, without a large wedding party and many guests, are vast.  </p>
      </div>

      <div id="background02">
        <div className='gone'>-</div>
        <div id='par02'>
          <p>For some people, their relationship is so precious and sacred that including others would only distract them from the purpose of what they are embarking.</p>
          <p>Others are concerned about medical issues, citizenships, and tax rates.  <br/><br/>Sometimes couples start planning a large more traditional type of wedding, but decide to just elope because of cost and stress. <br/><br/>I’ve also met couples who want to have a bigger ceremony down the line, but don’t want to wait that long to actually get married.</p>
        </div>
      </div>
        

      <div id='backgroundWhite02'>
        <p>I have been to beaches, hills, hospitals, and jails, and in every one of those places, with all these different situations, I’ve experienced some powerful and moving moments...<br/><br/>
        Moments that encompass the depth of a couple’s love...<br/><br/>
        and capture the beauty of their relationship.</p>
      </div>

      <div id="background03">
        <div className='gone'>-</div>
        <div id='par03'>
          <p>I try to keep my <a href="price.html">cost</a> for elopements as low as possible while still providing a wonderful memory that you will cherish for a lifetime. <br/><br/>
            For those on a budget, I provide options in Los Feliz where you can get married for $150 (at Barnsdale Art Park) or $175 (Griffith Park)<br/><br/></p>
        </div>
      </div>

      <div id='backgroundWhite03'>
        <p></p>
      </div>

      <div id="background04">
        <div className='gone'>-</div>
        <div id='par04'>
          <p>I've outlined my process below, so take a look at the resources provided and let me know the place, date, and time you want to get married :)</p>
        </div>
      </div>

      <div id='backgroundWhite04'>
        <video width="80%" co autoplay loop muted>
          <source src="photos/video/process.mov" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>

      <div id='processDiv'>
        <ul id='processUl'>
          <li className='steps' id='step01'>
            <img src="photos/photoR/JacobMarries_me01.jpg"/>
              <p>Send me an <a target="_top" href="mailto:Jacob@JacobMarries.com?Subject=Will%20You%20Marry%20Me?"> e-mail</a> (or text) or give me a <a href="tel:323-552-3139">call</a> to see if I'm available for your date. I'll answer any of your questions and let you know if/when I'm available.</p>
          </li>

          <li className='steps' id='step02'>
              <img src="photos/photoR/JacobMarries_different01.jpg"/>
              <div id='cover02'>
              <p>I'll meet you anywhere in Los Angeles County for $250/weekday (Mon-Thu) or $350/weekend (Fri-Sun), but I also offer a discount ($175/weekday or $275/weekend) if you want to get married in Los Feliz (90027), which is a way to help you keep the cost low.</p>
              <div id='map'><iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ZETrANi2COg0-yjYF_tU0LSqAnk" width="640" height="480"></iframe></div>
            </div>
          </li>

          <li className='steps' id='step03'>
            <h2 className='gone'>Ceremony</h2>
            <div id='cover03'>
              <img src="photos/PhotoR/JacobMarries_elope04.jpg"/>
              <p><br/>I only need to ask you both one question to be married,<br/><br/>"Do you take _____ to be your wife/husband?" <br/><br/>If you say, "Yes, I do!" then I sign the papers and you're married. However, I often find that couples want something more, so I offer a short ceremony as an option. <br/><br/>If you prefer the ceremony then I will also send you some <a href="http://jacobmarries.com/_INSTRUCTIONS.html">wording options</a> for each section of the ceremony (vows, rings, etc...).<br/><br/>Feel free to customize the short ceremony however you like, or you can <a href="http://ceremonybuilder.jacobmarries.com/">build your own</a>.</p>
              <div id='ceremonyWording' className='allWording'>
                <button id='eng' className='buttonOn'>English</button><button id='spn' className='buttonOff'>Spanish</button><button id='same' className='buttonOff'>Same Sex</button><br/>
                <iframe src="https://docs.google.com/document/d/1j3Ut1zcCqdvyu_RHSPOvTIAM6SKEtHmXWilRy29El_I/pub?embedded=true"  id='engWord'></iframe>
              <iframe src="https://docs.google.com/document/d/1flWo_Gj93KYZgqG_cnvTx4IpEjICUXZ_uW2u09QnsYI/pub?embedded=true"  id='spnWord'></iframe>
              <iframe src="https://docs.google.com/document/d/e/2PACX-1vQD9fd53-EY4Yj_sXiePGfPC4i1nk9ib1cdVxNwxMqQQW0Dnf308T6XVjfPotwYmxBx2VZhE7HauKFE/pub?embedded=true" id='inclusive'></iframe>
          </div>
            </div>

          </li>
          <li className='steps' id='step04'>
            <h2 className='gone'>Marriage License</h2>
            <p>Either you can bring the <a href="License.html">marriage license</a>   that you picked up at the county clerk's office or I can issue you one for an additional $160</p>
            <img src='photos/photoR/JacobMarries_sign01.jpg'/>
          </li>

          <li className='steps' id='step05'>
            <h2 className='gone'>The Day</h2>
            <img src='photos/photoR/JacobMarries_Elope05.jpg'/>
            <p>I'll show up at the time and location of your choosing and legalize your marriage. Please do note that because of the discounted rates for elopements, we do not meet beforehand.</p>
          </li>

          <li className='steps' id='step06'>
            <h2 className='gone'>The Payment</h2>
            <img src="photos/PhotoR/JacobMarries_different02.jpg"/>
            <p>You can either pay me that day with cash, check, or Venmo. If you prefer to pay beforehand then I'll send you a <a href="https://venmo.com" target="_blank">Venmo</a> or <a href="https://paypal.com" target="_blank">Paypal</a> invoice</p>
          </li>

          <li className='steps' id='step07'>
            <h2 className='gone'>Afterwards</h2>
            <img src='photos/PhotoR/JacobMarries_sign02.jpg'/>
            <p>I sign the marriage license and return it to the County Clerk<br/><br/><br/><br/></p>
            <h2 className='gone'>end</h2>
          </li>
          <li className='steps' id='step08'>
          </li>
        </ul>
      </div>
    </div>
  )
};


export default Elopement;
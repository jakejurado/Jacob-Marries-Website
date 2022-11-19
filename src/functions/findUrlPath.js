import React from 'react';

export function findUrlPath(e){
  //sets where to direct page dependent on the id of the tile clicked.
  let url ='';
  switch(e.target.id){
    case 'homeTile':
      url = 'http://www.jacobmarries.com'
      break;
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
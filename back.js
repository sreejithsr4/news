/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
const projectName = 'random-quote-machine';
let quotesData;

/*
  Code by Gabriel Nunes
  Modified by Todd Chaffee to use Camper gist for JSON Quote data.
*/

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];
page=0
function next(){
    page++
    topic=to.value
    fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-06-30&sortBy=publishedAt&apiKey=e0cba7ca2da74818b11071f2ab0f652d`).then(data=>data.json()).then(news=>displayNews(news))
function displayNews(newsArray){
    des=newsArray.articles[page].description
author=newsArray.articles[page].author
title=newsArray.articles[page].title
direct=newsArray.articles[page].url
cont=newsArray.articles[page].content
con.innerHTML=`<p>${cont}</p>`
li.innerHTML=`<p>Source :<a href="${direct}">${direct}</a></p>`
newstitle.innerHTML=`${title}`
image=newsArray.articles[page].urlToImage
console.log(image);
result.innerHTML=`<img src="${image}" alt="">`
newstitle.innerHTML=`<p>${title}</p>`
 $('.quote-text').animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $('#text').text(des);
      });
      
  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(author);
  })

}


    var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: colors[color],
    
    },
    1000
  );
  $('#wrapper').animate(
    {
        color: colors[color]
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
}


function accessData(){
    topic=to.value
    fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-06-30&sortBy=publishedAt&apiKey=e0cba7ca2da74818b11071f2ab0f652d`).then(data=>data.json()).then(news=>displayNews(news))
function displayNews(newsArray){
    des=newsArray.articles[0].description
author=newsArray.articles[0].author
title=newsArray.articles[0].title
direct=newsArray.articles[0].url
cont=newsArray.articles[0].content
con.innerHTML=`<p>${cont}</p>`
li.innerHTML=`<p>Source :<a href="${direct}">${direct}</a></p>`
window.ar=newsArray.articles
image=newsArray.articles[0].urlToImage
result.innerHTML=`<img src="${image}" alt="" style="object-fit: fill; width:100px; height:100px;">`
newstitle.innerHTML=`<p>${title}</p>`
 $('.ntext').animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $('#text').text(des);
      });
      $('.ntitle').animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $('#text').text(des);
      });
      
  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(author);
  })
  
  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: colors[color],
      color:white
    
    },
    1000
  );
  $('#wrapper').animate(
    {
        color: colors[color]
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );

}
}

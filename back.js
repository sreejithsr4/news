
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
    fetch(`https://gnews.io/api/v4/search?q=${topic}&country=india&max=10&lang=ml&apikey=f09311a4f0e4e2b76af495bf170f5e90`).then(data=>data.json()).then(news=>displayNews(news))
function displayNews(newsArray){
    des=newsArray.articles[page].description
author=newsArray.articles[page].author
title=newsArray.articles[page].title
direct=newsArray.articles[page].url
cont=newsArray.articles[page].content
con.innerHTML=`<p>${cont}</p>`
li.innerHTML=`<p>Source :<a href="${direct}">${direct}</a></p>`
newstitle.innerHTML=`${title}`
image=newsArray.articles[page].image
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
    fetch(`https://gnews.io/api/v4/search?q=${topic}&country=india&max=10&lang=ml&apikey=f09311a4f0e4e2b76af495bf170f5e90`).then(data=>data.json()).then(news=>displayNews(news))
function displayNews(newsArray){
    des=newsArray.articles[0].description
author=newsArray.articles[0].author
title=newsArray.articles[0].title
direct=newsArray.articles[0].url
cont=newsArray.articles[0].content
con.innerHTML=`<p>${cont}</p>`
li.innerHTML=`<p>Source :<a href="${direct}">${direct}</a></p>`
window.ar=newsArray.articles
image=newsArray.articles[0].image
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
